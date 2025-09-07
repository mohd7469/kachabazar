import Link from "next/link";
// import dayjs from "dayjs";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { IoLockOpenOutline } from "react-icons/io5";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

//internal import
import { getUserSession } from "@lib/auth";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import TrackOrder from "@pages/user/tracking/track-order";

const NavBarTop = () => {
  const userInfo = getUserSession();
  const router = useRouter();

  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue, globalSetting } = useUtilsFunction();

  const handleLogOut = () => {
    signOut();
    Cookies.remove("couponInfo");
    router.push("/");
  };

  useEffect(() => {
    if (userInfo) {
      const decoded = jwtDecode(userInfo?.token);

      const expireTime = new Date(decoded?.exp * 1000);
      const currentTime = new Date();

      // console.log(
      //   // decoded,
      //   "expire",
      //   dayjs(expireTime).format("DD, MMM, YYYY, h:mm A"),
      //   "currentTime",
      //   dayjs(currentTime).format("DD, MMM, YYYY, h:mm A")
      // );
      if (currentTime >= expireTime) {
        console.log("token expire, should sign out now..");
        handleLogOut();
      }
    }
  }, [userInfo]);

  return (
    <>
      <div className="hidden lg:block bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="text-gray-700 py-2 font-sans text-xs font-medium border-b flex justify-between items-center">
            <span className="flex items-center">
              <i className="fa-brands fa-whatsapp mr-1 text-emerald-500"></i>
              {showingTranslateValue(
                storeCustomizationSetting?.navbar?.help_text
              )}
              <a
                href={`tel:${
                  storeCustomizationSetting?.navbar?.phone || "+971*****"
                }`}
                className="font-bold text-emerald-500 ml-1"
              >
                {storeCustomizationSetting?.navbar?.phone || "+971*****"}
              </a>
            </span>

            <div className="lg:text-right flex items-center navBar">
              <div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@firzy.com&su=General%20Inquiry&body=Hello%2C%20I%20have%20a%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-500"
                >
                  <i className="fa-solid fa-envelope mr-1"></i>
                  { globalSetting?.email || "support@****.com"}
                </a>
                <span className="mx-2">|</span>
              </div>
              
              <div>
                <Link
                  href="/user/my-account"
                  className="font-medium hover:text-emerald-600"
                >
                  {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.my_account
                  )}
                </Link>
                <span className="mx-2">|</span>
              </div>
              
              <div className={"flex justify-between items-center"} >
                <TrackOrder buttonLabel={"Order Tracking"}/>
                <span className="mx-2">|</span>
              </div>

              {userInfo?.email ? (
                <button
                  onClick={handleLogOut}
                  className="flex items-center font-medium hover:text-emerald-600"
                >
                  <span className="mr-1">
                    <IoLockOpenOutline />
                  </span>
                  {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.logout
                  )}
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  className="flex items-center font-medium hover:text-emerald-600"
                >
                  <span className="mr-1">
                    <FiUser />
                  </span>

                  {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.login
                  )}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(NavBarTop), { ssr: false });
