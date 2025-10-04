import {useEffect} from "react";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  IoArrowForward,
  IoBagHandle
} from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { ImCreditCard } from "react-icons/im";
import useTranslation from "next-translate/useTranslation";

import {PhoneNumberUtil} from 'google-libphonenumber';
import {Controller} from "react-hook-form";
import {PhoneInput} from 'react-international-phone';
import 'react-international-phone/style.css';


const cities = [
  { value: "", label: "Select City" },
  { value: "Abu Dhabi", label: "Abu Dhabi" },
  { value: "Dubai", label: "Dubai" },
  { value: "Sharjah", label: "Sharjah" },
  { value: "Ajman", label: "Ajman" },
  { value: "Al Ain", label: "Al Ain" },
  { value: "Ras Al Khaimah", label: "Ras Al Khaimah" },
  { value: "Umm Al Quwain", label: "Umm Al Quwain" },
  { value: "Fujairah", label: "Fujairah" },
  { value: "Khor Fakkan", label: "Khor Fakkan" },
  { value: "Dibba Al-Fujairah", label: "Dibba Al-Fujairah" }
];

import Layout from "@layout/Layout";
import Label from "@components/form/Label";
import Error from "@components/form/Error";
import CartItem from "@components/cart/CartItem";
import InputArea from "@components/form/InputArea";
import useGetSetting from "@hooks/useGetSetting";
import InputShipping from "@components/form/InputShipping";
import InputPayment from "@components/form/InputPayment";
import useCheckoutSubmit from "@hooks/useCheckoutSubmit";
import useUtilsFunction from "@hooks/useUtilsFunction";
import SettingServices from "@services/SettingServices";
import SwitchToggle from "@components/form/SwitchToggle";
import {FiTrash2} from "react-icons/fi";

const phoneUtil = PhoneNumberUtil.getInstance();

//internal import

const Checkout = () => {
  const { t } = useTranslation();
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  const { data: storeSetting } = useQuery({
    queryKey: ["storeSetting"],
    queryFn: async () => await SettingServices.getStoreSetting(),
    staleTime: 4 * 60 * 1000, // Api request after 4 minutes
  });

  const {
    error,
    couponInfo,
    couponRef,
    total,
    isEmpty,
    items,
    cartTotal,
    currency,
    register,
    errors,
    showCard,
    setShowCard,
    handleSubmit,
    watch,
    control,
    setValue,
    getValues,
    submitHandler,
    handleShippingCost,
    handleCouponCode,
    handleRemoveCoupon,
    discountAmount,
    shippingCost,
    isCheckoutSubmit,
    useExistingAddress,
    hasShippingAddress,
    isCouponAvailable,
    handleDefaultShippingAddress,
  } = useCheckoutSubmit();
  
  const handlePhoneValid = (phone) => {
    try {
      const parsed = phoneUtil.parseAndKeepRawInput(phone);
      return phoneUtil.isValidNumber(parsed);
    } catch (error) {
      return false;
    }
  };
  
  useEffect(() => {
    const handleWindowLoad = () => {
      const input = document.querySelector(".react-international-phone-input");
      if (input) {
        input.classList.add("flex-1");
      }
    };
    
    if (document.readyState === "complete") {
      // already loaded
      handleWindowLoad();
    } else {
      window.addEventListener("load", handleWindowLoad);
      return () => window.removeEventListener("load", handleWindowLoad);
    }
  }, []);
  
  return (
    <>
      <Layout title="Checkout" description="this is checkout page">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
              <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit(submitHandler)}>
                  {hasShippingAddress && (
                    <div className="flex justify-end my-2">
                      <SwitchToggle
                        id="shipping-address"
                        title="Use Default Shipping Address"
                        processOption={useExistingAddress}
                        handleProcess={handleDefaultShippingAddress}
                      />
                    </div>
                  )}
                  <div className="form-group">
                    <h2 className="font-bold md:text-base text-heading leading-5 text-teal-800 pb-3 text-lg">
                      01.{" "}
                      {showingTranslateValue(
                        storeCustomizationSetting?.checkout?.personal_details
                      )}
                    </h2>

                    <div className="grid grid-cols-6 gap-6">
                      {/*
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label={showingTranslateValue(
                            storeCustomizationSetting?.checkout?.first_name
                          )}
                          name="firstName"
                          type="text"
                          placeholder="John"
                          required={true}
                        />
                        <Error errorName={errors.firstName} />
                      </div>
                      */}
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label={showingTranslateValue(
                            storeCustomizationSetting?.checkout?.last_name
                          )}
                          name="lastName"
                          type="text"
                          placeholder="Enter Your Name"
                          required={true}
                        />
                        <Error errorName={errors.lastName} />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        {/*
                        <InputArea
                          register={register}
                          label={showingTranslateValue(
                            storeCustomizationSetting?.checkout?.checkout_phone
                          )}
                          name="contact"
                          type="tel"
                          placeholder="0501234567"
                        />
                        <Error errorName={errors.contact} />
                        */}
                        <>
                          {/* Controlled PhoneInput */}
                          <Controller
                            name="contact"
                            control={control}
                            rules={{
                              required: "Phone number is required",
                              validate: (input, allValues) => {
                                console.log('validate', allValues);
                                const fullContact = getValues("fullContact"); // 👈 grab full number
                                return handlePhoneValid(fullContact) || "Invalid phone number";
                              }
                              // validate: (value, meta) => {
                              //   console.log('validate');
                              //   console.log(value, handlePhoneValid(value), meta);
                              //   return handlePhoneValid(value) || "Invalid phone number";
                              // }
                            }}
                            render={({ field }) => (
                              <>
                                <Label
                                  label={showingTranslateValue(
                                    storeCustomizationSetting?.checkout?.checkout_phone
                                  )}
                                  className="required"
                                />
                                <PhoneInput
                                  className="customPhoneInput h-12"
                                  placeholder={'0501234567'}
                                  value={field.value}
                                  onChange={(phone, meta) => {
                                    setValue("fullContact", phone, { shouldValidate: true }); // for full number with country code
                                    field.onChange(meta.inputValue); // user input number without country code
                                    field.onBlur(); // mark as touched
                                    field.ref(meta); // optional if you want meta info
                                  }}
                                  disableDialCodePrefill={true}
                                  disableDialCodeAndPrefix={true}
                                  showDisabledDialCodeAndPrefix={true}
                                  defaultCountry="ae"
                                />
                              </>
                            )}
                          />
                          
                          {/* Error */}
                          {errors.contact && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.contact.message}
                            </p>
                          )}
                        </>
                        {/*{watch('contact')}*/}
                      </div>
                      
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          required={false}
                          register={register}
                          label={showingTranslateValue(
                            storeCustomizationSetting?.checkout?.email_address
                          )}
                          name="email"
                          type="email"
                          placeholder="youremail@gmail.com"
                        />
                        <Error errorName={errors.email} />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-12">
                    <h2 className="font-bold md:text-base text-heading leading-5 text-teal-800 pb-3 text-lg">
                      02.{" "}
                      {showingTranslateValue(
                        storeCustomizationSetting?.checkout?.shipping_details
                      )}
                    </h2>

                    <div className="grid grid-cols-6 gap-6 mb-8">
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        {/*<InputArea
                          register={register}
                          label={showingTranslateValue(
                            storeCustomizationSetting?.checkout?.city
                          )}
                          name="city"
                          type="text"
                          placeholder="Enter City"
                        />
                        <Error errorName={errors.city} />*/}
                        
                        <Label label={showingTranslateValue(
                          storeCustomizationSetting?.checkout?.city
                        )} className={ 'required' } />
                        <select
                          name="city"
                          {...register("city", { required: "City is required" })}
                          className={`px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12 `}
                          defaultValue=""
                        >
                          {cities.map((city) => (
                            <option
                              key={city.value}
                              value={city.value}
                              disabled={city.value === ""}
                              hidden={city.value === ""}
                            >
                              {city.label}
                            </option>
                          ))}
                        </select>
                        <Error errorName={errors.city} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        {/*
                        <InputArea
                          defaultValue={""}
                          register={register}
                          label={showingTranslateValue(
                            storeCustomizationSetting?.checkout?.country
                          )}
                          name="country"
                          type="text"
                          placeholder="United States"
                        />
                        <Error errorName={errors.country} />
                        */}
                        <Label
                          className={'required'}
                          label={showingTranslateValue(
                            storeCustomizationSetting?.checkout?.country
                          )}
                        />
                        <div className="flex items-center ps-2 h-11 font-semibold text-gray-500">
                          <img
                            src="https://flagcdn.com/w40/ae.png"
                            alt="UAE Flag"
                            className="inline-block w-6 h-4"
                          />
                          <span className={'ms-2'}>{watch('country')}</span>
                        </div>
                      </div>
                      
                      <div className="col-span-6">
                        <InputArea
                          register={register}
                          label={showingTranslateValue(
                            storeCustomizationSetting?.checkout?.street_address
                          )}
                          name="address"
                          type="text"
                          placeholder="Enter Address"
                        />
                        <Error errorName={errors.address} />
                        <div className={'text-xs text-gray-400  [word-spacing:0.2rem]'}>
                          e.g: Area, Street Name, Building Name
                        </div>
                      </div>
                      
                      {/*<div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputArea
                          defaultValue={"000000"}
                          register={register}
                          label={showingTranslateValue(
                            storeCustomizationSetting?.checkout?.zip_code
                          )}
                          name="zipCode"
                          type="text"
                          placeholder="2345"
                        />
                        <Error errorName={errors.zipCode} />
                      </div>*/}
                    </div>
                    
                    <div className="grid grid-cols-6 gap-6 mb-8">
                      <div className="col-span-12">
                        <InputArea
                          required={false}
                          defaultValue={""}
                          register={register}
                          label={'Note'}
                          name="note"
                          type="text"
                          placeholder="Any Special Note For Delivery.."
                        />
                        <Error errorName={errors.zipCode} />
                      </div>
                    </div>
                    
                    {/*
                    <Label
                      label={showingTranslateValue(
                        storeCustomizationSetting?.checkout?.shipping_cost
                      )}
                    />
                    <div className="grid grid-cols-6 gap-4 mt-3">
                      <div className="col-span-6 sm:col-span-12">
                        <InputShipping
                          urgent={true}
                          defaultChecked={false}
                          currency={currency}
                          handleShippingCost={handleShippingCost}
                          register={register}
                          // value="FedEx"
                          value={showingTranslateValue(
                            storeCustomizationSetting?.checkout
                              ?.shipping_name_one
                          )}
                          description={showingTranslateValue(
                            storeCustomizationSetting?.checkout
                              ?.shipping_one_desc
                          )}
                          // time="Today"
                          cost={
                            Number(
                              storeCustomizationSetting?.checkout
                                ?.shipping_one_cost
                            ) || 60
                          }
                        />
                        <Error errorName={errors.shippingOption} />
                      </div>

                      <div className="col-span-6 sm:col-span-12">
                        <InputShipping
                          urgent={false}
                          defaultChecked={false}
                          currency={currency}
                          handleShippingCost={handleShippingCost}
                          register={register}
                          value={showingTranslateValue(
                            storeCustomizationSetting?.checkout
                              ?.shipping_name_two
                          )}
                          description={showingTranslateValue(
                            storeCustomizationSetting?.checkout
                              ?.shipping_two_desc
                          )}
                          // time="7 Days"
                          cost={
                            Number(
                              storeCustomizationSetting?.checkout
                                ?.shipping_two_cost
                            ) || 20
                          }
                        />
                        <Error errorName={errors.shippingOption} />
                      </div>
                    </div>
                    */}
                  </div>
                  {/*
                  <div className="form-group mt-12">
                    <h2 className="font-bold md:text-base text-heading leading-5 text-teal-800 pb-3">
                      03.{" "}
                      {showingTranslateValue(
                        storeCustomizationSetting?.checkout?.payment_method
                      )}
                    </h2>

                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
                      {storeSetting?.cod_status && (
                        <div className="">
                          <InputPayment
                            defaultChecked={false}
                            description={'Pay when order arrives.'}
                            setShowCard={setShowCard}
                            register={register}
                            name={t("common:cashOnDelivery")}
                            value="Cash"
                            Icon={IoWalletSharp}
                          />
                          <Error errorMessage={errors.paymentMethod} />
                        </div>
                      )}

                     {storeSetting?.razorpay_status && (
                      <div className="">
                        <InputPayment
                          defaultChecked={false}
                          description={'Pay using card.'}
                          setShowCard={setShowCard}
                          register={register}
                          name="RazorPay"
                          value="RazorPay"
                          Icon={ImCreditCard}
                        />
                        <Error errorMessage={errors.paymentMethod} />
                      </div>
                     )}
                    </div>
                  </div>
                  */}

                  <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                    {/*<div className="col-span-6 sm:col-span-3">
                      <Link
                        href="/"
                        className="bg-gray-50 border border-indigo-100 rounded py-3 text-center text-sm font-bold text-gray-600 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center items-center font-serif w-full"
                      >
                        <span className="mr-2">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </span>
                        {showingTranslateValue(
                          storeCustomizationSetting?.checkout?.continue_button
                        )}
                      </Link>
                    </div>*/}
                    <div className={`col-span-6 sm:col-span-12 ${isEmpty || isCheckoutSubmit ? 'no-control' : ''}`}>
                      <button
                        type="submit"
                        disabled={isEmpty || isCheckoutSubmit}
                        className="bg-emerald-500 hover:bg-emerald-600 border border-emerald-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                      >
                        {isCheckoutSubmit ? (
                          <span className="flex justify-center text-center items-center">
                            {" "}
                            <img
                              src="/loader/spinner.gif"
                              alt="Loading"
                              width={20}
                              height={10}
                            />{" "}
                            <span className="ml-2">
                              {t("common:processing")}
                            </span>
                          </span>
                        ) : (
                          <span className="flex justify-center text-center items-center">
                            <span className="text-xl mx-2">
                              {" "}
                              {/*<IoArrowForward />*/}
                              <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                            {showingTranslateValue(
                              storeCustomizationSetting?.checkout
                                ?.confirm_button
                            )}
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
              <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2">
                <h2 className="font-semibold font-serif text-lg pb-4">
                  {showingTranslateValue(
                    storeCustomizationSetting?.checkout?.order_summary
                  )}
                </h2>

                <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-64 bg-gray-50 block">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} currency={currency} />
                  ))}

                  {isEmpty && (
                    <div className="text-center py-10">
                      <span className="flex justify-center my-auto text-gray-500 font-semibold text-4xl">
                        <IoBagHandle />
                      </span>
                      <h2 className="font-medium font-serif text-sm pt-2 text-gray-600">
                        No Item Added Yet!
                      </h2>
                    </div>
                  )}
                </div>

                <div className="flex items-center mt-4 py-4 lg:py-4 text-sm w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                  <form className="w-full">
                    {couponInfo.couponCode ? (
                      <div className="bg-emerald-50 px-4 py-3 leading-tight w-full rounded-md flex justify-between items-center">
                        {" "}
                        <div className="text-emerald-600">
                          <span className={"text-lg me-1"}>🥳</span>
                          <span className={"text-orange-400 me-1"}>"{couponInfo.couponCode}"</span>
                          Coupon Applied
                        </div>
                        <button
                          title={"Remove coupon"}
                          onClick={() => handleRemoveCoupon()}
                          className="hover:bg-red-200 text-red-500 cursor-pointer bg-red-100 p-2 rounded"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-start justify-end">
                        <input
                          ref={couponRef}
                          type="text"
                          placeholder={t("common:couponCode")}
                          className="form-input py-2 px-3 md:px-4 w-full appearance-none transition ease-in-out border text-input text-sm rounded-md h-12 duration-200 bg-white border-gray-200 focus:ring-0 focus:outline-none focus:border-emerald-500 placeholder-gray-500 placeholder-opacity-75"
                        />
                        {isCouponAvailable ? (
                          <button
                            disabled={isCouponAvailable}
                            type="submit"
                            className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-emerald-500 h-12 text-sm lg:text-base w-full sm:w-auto"
                          >
                            <img
                              src="/loader/spinner.gif"
                              alt="Loading"
                              width={20}
                              height={10}
                            />
                            <span className=" ml-2 font-light">Processing</span>
                          </button>
                        ) : (
                          <button
                            disabled={isCouponAvailable}
                            onClick={handleCouponCode}
                            className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-emerald-500 h-12 text-sm lg:text-base w-full sm:w-auto"
                          >
                            {showingTranslateValue(
                              storeCustomizationSetting?.checkout?.apply_button
                            )}
                          </button>
                        )}
                      </div>
                    )}
                  </form>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  {showingTranslateValue(
                    storeCustomizationSetting?.checkout?.sub_total
                  )}
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                    {currency}
                    {cartTotal?.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  {showingTranslateValue(
                    storeCustomizationSetting?.checkout?.shipping_cost
                  )}
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                    {currency}
                    {shippingCost?.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  {showingTranslateValue(
                    storeCustomizationSetting?.checkout?.discount
                  )}
                  <span className="ml-auto flex-shrink-0 font-bold text-orange-400">
                    {currency}
                    {discountAmount.toFixed(2)}
                  </span>
                </div>
                <div className="border-t mt-4">
                  <div className="flex items-center font-bold font-serif justify-between pt-5 text-sm uppercase">
                    {showingTranslateValue(
                      storeCustomizationSetting?.checkout?.total_cost
                    )}
                    <span className="font-serif font-extrabold text-lg">
                      {currency}
                      {parseFloat(total).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(Checkout), { ssr: false });
