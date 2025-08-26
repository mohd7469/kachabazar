import { useRouter } from "next/router";
import Link from "next/link";
import { ImFacebook, ImGithub, ImGoogle } from "react-icons/im";
import { signIn } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

//internal imports
import SettingServices from "@services/SettingServices";
import useLoginSubmit from "@hooks/useLoginSubmit";

import moment from "moment";
import { useSearchParams } from "next/navigation";

const BottomNavigation = ({ or, route, desc, pageName, loginTitle }) => {
  const router = useRouter();
  const redirectUrl = useSearchParams().get("redirectUrl");
  const { guestSignup, loading } = useLoginSubmit();
  const guestId = 'Guest-' + moment().format("DDMMYY-Hms");
 
  const buttonStyles = `
    text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center rounded-md focus:outline-none shadow-sm
    px-3 py-4 h-12 w-full mb-6 mr-2
  `;
  
  const handleGuest = async () => {
    const res = await guestSignup(guestId);
    if (res?.success) {
      const url = redirectUrl ? `/${redirectUrl}` : '/';
      router.push(url);
    }
  };

  const {
    error,
    isLoading,
    data: storeSetting,
  } = useQuery({
    queryKey: ["storeSetting"],
    queryFn: async () => await SettingServices.getStoreSetting(),
    staleTime: 4 * 60 * 1000, // Api request after 4 minutes
  });

  return (
    <>
      {/*{or && (*/}
      {(
        <div className="my-2 text-center font-medium">
          <div className="after:bg-gray-100 before:bg-gray-100 text-xs">OR</div>
        </div>
      )}

      {!error && !isLoading && (
        <div className="flex flex-col mb-4">
          {loading ? (
            <button
              // disabled={loading}
              className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-gray-700 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
            >
              <img
                src="/loader/spinner.gif"
                alt="Loading"
                width={20}
                height={10}
              />
              <span className="font-serif ml-2 font-light">
                Processing
              </span>
            </button>
          ) : (
            <button
              disabled={loading}
              onClick={handleGuest}
              className="w-full text-center py-3 rounded mb-4 bg-gray-700 text-white transition-all focus:outline-none my-1"
            >
              Continue as Guest
            </button>
          )}
          
          {storeSetting?.google_login_status && (
            <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/user/dashboard",
                  redirect: true,
                })
              }
              className={
                buttonStyles + "bg-green-600 text-white hover:bg-green-700"
              }
            >
              <ImGoogle className="text-2xl" />
              <span className="ml-2">{loginTitle} With Google</span>
            </button>
          )}
          {storeSetting?.facebook_login_status && (
            <button
              onClick={() =>
                signIn("facebook", {
                  callbackUrl: "/user/dashboard",
                  redirect: true,
                })
              }
              className={
                buttonStyles + "bg-blue-500 text-white hover:bg-blue-600"
              }
            >
              <ImFacebook className="text-2xl" />
              <span className="ml-2">{loginTitle} With Facebook</span>
            </button>
          )}
          {storeSetting?.github_login_status && (
            <button
              onClick={() =>
                signIn("github", {
                  callbackUrl: "/user/dashboard",
                  redirect: true,
                })
              }
              className={
                buttonStyles + "bg-gray-700 text-white hover:bg-gray-900"
              }
            >
              <ImGithub className="text-2xl" />
              <span className="ml-2">{loginTitle} With Github</span>
            </button>
          )}
        </div>
      )}

      <div className="text-center text-sm text-gray-900 mt-4">
        <div className="text-gray-500 mt-2.5">
          {desc ? "Already have an account?" : "Don't have an account?"}
          <Link
            href={route}
            className="text-gray-800 hover:text-cyan-500 font-bold mx-2"
          >
            <span className="capitalize">{pageName}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
