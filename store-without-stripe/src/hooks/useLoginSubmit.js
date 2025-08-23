import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

//internal import

import { notifyError, notifySuccess } from "@utils/toast";
import CustomerServices from "@services/CustomerServices";

const useLoginSubmit = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const redirectUrl = useSearchParams().get("redirectUrl");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log("router", router.pathname === "/auth/signup");

  const submitHandler = async ({ name, email, password, phone }) => {
    setLoading(true);

    // console.log("submitHandler", phone);

    try {
      switch (router.pathname) {
        case "/auth/signup": {
          // Call the sign-up API which also handles sending the email verification
          const res = await CustomerServices.verifyEmailAddress({
            name,
            email,
            password,
          });
          // console.log("res", res);
          notifySuccess(res.message);
          return setLoading(false);
        }
        
        case "/auth/forget-password": {
          // Call the forget password API for reset password
          const res = await CustomerServices.forgetPassword({
            email,
          });
          // console.log("res", res);
          notifySuccess(res.message);
          return setLoading(false);
        }
        
        case "/auth/phone-signup": {
          const res = await CustomerServices.verifyPhoneNumber({
            phone,
          });
          // console.log("res", res);
          notifySuccess(res.message);
          return setLoading(false);
        }
        
        default: {
          // Login logic (no changes)
          const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
            callbackUrl: "/user/dashboard",
          });
          // console.log("res", res);
          if (res?.error) {
            notifyError(res?.error);
            console.error("Error during sign-in:", res.error);
            setLoading(false);
          } else if (res?.ok) {
            const url = redirectUrl ? "/checkout" : res.url;
            router.push(url);
            setLoading(false);
          }
        }
      }
    } catch (error) {
      // Catch any unexpected errors here
      console.error(
        "Error in submitHandler:",
        error?.response?.data?.message || error?.message
      );
      setLoading(false);
      notifyError(error?.response?.data?.message || error?.message);
    }
  };

  return {
    register,
    errors,
    loading,
    control,
    handleSubmit,
    submitHandler,
  };
};

export default useLoginSubmit;
