import React from 'react';

const InputPayment = ({
  register,
  Icon,
  name,
  value,
  setShowCard,
  defaultChecked = false,
  description = "Choose this payment method"
}) => {
  return (
    <div className="p-3 card border border-gray-200 bg-white rounded-md">
      <label className="cursor-pointer label">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl mr-3 text-gray-400">
              <Icon />
            </span>
            <div>
              <h6 className="font-serif font-bold text-sm text-gray-600">
                {name}
              </h6>
              <p className="text-xs text-gray-500 font-medium">
                {description}
              </p>
            </div>
          </div>
          <input
            onClick={() => setShowCard(value === 'Card' ? true : false)}
            {...register('paymentMethod', {
              required: 'Payment Method is required!',
            })}
            type="radio"
            value={value}
            name="paymentMethod"
            className="form-radio outline-none focus:ring-0 text-emerald-500"
            defaultChecked={defaultChecked}
            required={true}
            onInvalid={(e) => e.currentTarget.setCustomValidity("?")}
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />
        </div>
      </label>
    </div>
  );
};

export default InputPayment;
