import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { IoBagCheckOutline, IoClose, IoBagHandle } from "react-icons/io5";
import Link from "next/link";

//internal imports
import { getUserSession } from "@lib/auth";
import CartItem from "@components/cart/CartItem";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";

import moment from "moment";
import useLoginSubmit from "@hooks/useLoginSubmit";
import useGetSetting from "@hooks/useGetSetting";

const Cart = () => {
  const { showingTranslateValue } = useUtilsFunction();
  const { storeCustomizationSetting } = useGetSetting();
  
  const router = useRouter();
  const { isEmpty, items, cartTotal } = useCart();
  const { closeCartDrawer } = useContext(SidebarContext);
  const { currency } = useUtilsFunction();
  const userInfo = getUserSession();
  const guestId = 'Guest-' + moment().format("DDMMYY-Hms");
  const { guestSignup, setLoading, loading } = useLoginSubmit();
  
  // console.log("userInfo", userInfo);
  
  const handleGuest = async () => {
    const res = await guestSignup(guestId);
    if (res?.success) {
      await router.push('/checkout');
      closeCartDrawer();
    }
  };
  
  const handleCheckout = async () => {
    setLoading(true);
    if (items?.length <= 0) {
      closeCartDrawer();
      setLoading(false);
    } else {
      if (!userInfo) {
        // console.log("userInfo::", userInfo, "history");

        // Redirect to login page with returnUrl query parameter
        await router.push(`/auth/login?redirectUrl=checkout`);
        closeCartDrawer();
        setLoading(false);
      } else {
        await router.push("/checkout");
        closeCartDrawer();
        setLoading(false);
      }
    }
  };
  
  const goToCheckout = async () => {
    setLoading(true);
    if (items?.length <= 0) {
      closeCartDrawer();
      setLoading(false);
    } else {
      await router.push("/checkout");
      closeCartDrawer();
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-full justify-between items-middle bg-white rounded cursor-pointer">
        <div className="w-full flex justify-between items-center relative px-5 py-4 bg-emerald-700">
          <h2 className="text-white text-lg m-0 text-heading flex items-center">
            <span className="text-xl mr-3">
              {loading ? (
                <img
                  src="/loader/spinner.gif"
                  alt="Loading"
                  width={30}
                  height={30}
                />
              ) : (
                <i className="fa-solid fa-cart-shopping"></i>
              )}
            </span>
            Shopping Cart
          </h2>
          <button
            onClick={closeCartDrawer}
            className="inline-flex text-base items-center justify-center text-white p-2 focus:outline-none transition-opacity rounded-lg bg-emerald-600 hover:bg-emerald-500"
          >
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full">
          {isEmpty && (
            <div className="flex flex-col h-full justify-center">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-emerald-100">
                  <span className="text-emerald-600 text-4xl block">
                    <IoBagHandle />
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-gray-700 text-lg pt-5">
                  Your cart is empty
                </h3>
                <p className="px-12 text-center text-sm text-gray-500 pt-2">
                  No items added in your cart. Please add product to your cart
                  list.
                </p>
              </div>
            </div>
          )}

          {items.map((item, i) => (
            <CartItem key={i + 1} item={item} currency={currency} />
          ))}
        </div>
        
        {items?.length > 0 && (
          loading ? (
            <div className="w-full flex justify-center items-center my-4">
              <img
                src="/loader/spinner.gif"
                alt="Loading"
                width={50}
                height={50}
              />
            </div>
          ) : (
            <div className="mx-5 my-3">
              {/*{!userInfo && (
                <button
                  disabled={loading}
                  onClick={handleGuest}
                  className="w-full py-5 px-3 rounded-lg bg-gray-700 mb-4 flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300"
                >
                  <span className="align-middle font-medium">
                    Continue as Guest
                  </span>
                  <span className="rounded-lg font-bold py-2 px-3 bg-white text-emerald-600">
                  {guestId}
                </span>
                </button>
              )}
              
              <button
                onClick={handleCheckout}
                className="w-full py-3 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300"
              >
              <span className="align-middle font-medium">
                {!userInfo ? 'Register' : 'Proceed'} To Checkout
              </span>
                <span className="rounded-lg font-bold py-2 px-3 bg-white text-emerald-600">
                {currency} {cartTotal.toFixed(2)}
              </span>
              </button>*/}
              
              {!userInfo ? (
                <button
                  disabled={loading}
                  onClick={handleGuest}
                  className="w-full py-3 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300"
                >
                  <span className="align-middle font-medium">
                    Proceed to Checkout
                  </span>
                  <span className="rounded-lg font-bold py-2 px-3 bg-white text-emerald-600">
                    {currency} {cartTotal.toFixed(2)}
                  </span>
                </button>
              ) : (
                <button
                  disabled={loading}
                  onClick={goToCheckout}
                  className="w-full py-3 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300"
                >
                  <span className="align-middle font-medium" title={userInfo?.name}>
                    <i className={"fa-solid fa-user me-1"}></i>
                    Proceed to Checkout
                  </span>
                  <span className="rounded-lg font-bold py-2 px-3 bg-white text-emerald-600">
                    {currency} {cartTotal.toFixed(2)}
                  </span>
                </button>
              )}
              
              <Link
                href="/"
                className="mt-4 py-4 px-3 rounded-lg bg-gray-50 border border-indigo-100 text-center text-sm font-bold text-gray-600 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center items-center font-serif w-full"
              >
                  <span className="mr-2">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                {showingTranslateValue(
                  storeCustomizationSetting?.checkout?.continue_button
                )}
              </Link>
            </div>
          )
        )}
        
      </div>
    </>
  );
};

export default Cart;
