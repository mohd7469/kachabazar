import "@styles/custom.css";
import "@styles/_index.scss";

import moment from "moment";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
});

import AOS from "aos";
import "aos/dist/aos.css";

if (typeof window !== "undefined") {
  NProgress.start();
  
  if (!window.__AOS_INITIALIZED__) {
    AOS.init({
      duration: 500,
      once: true,
      offset: 50, // optional
      // easing: "ease-in-out", // optional
    });
    window.__AOS_INITIALIZED__ = true;
  }

  const handleStart = () => NProgress.start();
  const handleStop = () => {
    NProgress.done();
    AOS.refresh?.(); // Ensure AOS recalculates after page transitions
  };
  
  window.addEventListener("load", handleStop);
  
  Router.events.on("routeChangeStart", handleStart);
  Router.events.on("routeChangeComplete", handleStop);
  Router.events.on("routeChangeError", handleStop);
  
  if (module?.hot) {
    module.hot.dispose(() => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleStop);
      Router.events.off("routeChangeError", handleStop);
      window.removeEventListener("load", handleStop);
    });
  }
}

import { CartProvider } from "react-use-cart";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import ReactGA from "react-ga4";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

// Internal imports
import store from "@redux/store";
import { handlePageView } from "@lib/analytics";
import { UserProvider } from "@context/UserContext";
import DefaultSeo from "@components/common/DefaultSeo";
import { SidebarProvider } from "@context/SidebarContext";
import SettingServices from "@services/SettingServices";

let persistor = persistStore(store);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [storeSetting, setStoreSetting] = useState(null);
  
  const [statusMessage, setStatusMessage] = useState("");
  useEffect(() => {
    const randomMinutes = Math.floor(Math.random() * 10) + 1;
    setStatusMessage(`Typically replies within ${moment.duration(randomMinutes, "minutes").humanize()}`);
  }, []);
  
  useEffect(() => {
    const fetchStoreSettings = async () => {
      try {
        const settings = await queryClient.fetchQuery({
          queryKey: ["storeSetting"],
          queryFn: async () => await SettingServices.getStoreSetting(),
          staleTime: 4 * 60 * 1000, // Cache data for 4 minutes
        });

        setStoreSetting(settings);

        // Initialize Google Analytics
        if (settings?.google_analytic_status) {
          ReactGA.initialize(settings?.google_analytic_key || "");
          handlePageView();

          const handleRouteChange = (url) => {
            handlePageView(`/${router.pathname}`, "Kachabazar");
          };

          router.events.on("routeChangeComplete", handleRouteChange);
          return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
          };
        }
      } catch (error) {
        console.error("Failed to fetch store settings:", error);
      }
    };

    fetchStoreSettings();
  }, [router]);

  return (
    <>
      {/* Render TawkMessengerReact only if tawk_chat_status is enabled */}
      {storeSetting?.tawk_chat_status && (
        <TawkMessengerReact
          propertyId={storeSetting?.tawk_chat_property_id || ""}
          widgetId={storeSetting?.tawk_chat_widget_id || ""}
        />
      )}
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <UserProvider>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <SidebarProvider>
                  <CartProvider>
                    <DefaultSeo />
                    <Component {...pageProps} />
                  </CartProvider>
                </SidebarProvider>
              </PersistGate>
            </Provider>
          </UserProvider>
        </SessionProvider>
      </QueryClientProvider>
      <FloatingWhatsApp
        phoneNumber="13022783235"
        accountName="Support"
        statusMessage={statusMessage}
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar="https://res.cloudinary.com/kachabazarcloud/image/upload/v1757099203/ptptohgyyjpoqri9rmyl.svg"
      />
    </>
  );
}

export default MyApp;
