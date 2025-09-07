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
  urgent = false
}) => {
  return (
    <>
      <div className="p-3 card border border-gray-200 bg-white rounded-md">
        <label className="cursor-pointer label">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-3 text-gray-400">
                {/*<FiTruck />*/}
                {urgent ? "🏍️💨" : "🚚"}
              </span>
              <div>
                <h6 className="font-serif font-bold text-sm text-gray-600">
                  <div className="inline-flex items-center space-x-2 rounded-full border px-2 me-2">
                    <span className={`h-2 w-2 rounded-full ${urgent ? 'bg-red-500' : 'bg-amber-500'}`}></span>
                    <span className="font-semibold">{currency}{parseFloat(cost).toFixed(2)}</span>
                  </div>
                  {value}
                </h6>
                <p className="text-xs text-gray-500 font-medium">
                  {description}
                </p>
              </div>
            </div>
            <input
              onClick={() => handleShippingCost(cost)}
              {...register(`shippingOption`, {
                required: `Shipping Option is required!`,
              })}
              name="shippingOption"
              type="radio"
              value={value}
              className="form-radio outline-none focus:ring-0 text-emerald-500"
            />
          </div>
        </label>
      </div>
    </>
  );
};

export default InputShipping;
