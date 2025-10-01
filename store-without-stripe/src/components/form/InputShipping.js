import React from "react";
import { FiTruck } from "react-icons/fi";

const InputShipping = ({
  register,
  value,
  time,
  cost,
  currency,
  description,
  handleShippingCost,
  urgent = false,
  defaultChecked = false,
}) => {
  return (
    <>
      <div className="p-3 card border border-gray-200 bg-white rounded-md">
        <label className="cursor-pointer label">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <h6 className="font-serif font-bold text-sm text-gray-600 flex items-center justify-center gap-2">
                  <span>{value}</span>
                  <span className="text-2xl mr-3 text-gray-400">{urgent ? "🏍️💨" : "🚚"}</span>
                </h6>
                <p className="text-xs text-gray-500 font-medium">
                  {description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-bold text-sm md:text-base text-heading leading-5 text-teal-700">
                <span>{currency}{parseFloat(cost).toFixed(2)}</span>
              </div>
              <input
                onClick={() => handleShippingCost(cost)}
                {...register(`shippingOption`, {
                  required: `Shipping Option is required!`,
                })}
                defaultChecked={defaultChecked}
                name="shippingOption"
                type="radio"
                value={value}
                className="form-radio outline-none focus:ring-0 text-emerald-500"
              />
            </div>
          </div>
        </label>
      </div>
    </>
  );
};

export default InputShipping;
