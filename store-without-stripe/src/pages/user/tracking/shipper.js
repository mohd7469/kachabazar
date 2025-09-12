import React from "react";
import TRACKING_CONFIG from "@pages/user/tracking/config.json";

const Shipper = ({
  name = "shipper",
  options = [],
  loading,
  shipperSelectBox,
  onChangeShipperSelectBox,
  shipperInputBox,
  onChangeShipperInputBox,
}) => {
  return (
    <>
      <div className="flex items-center border rounded-lg p-1">
        <div className="shrink-0 text-gray-500">
          <select
            id={`${name}-select`}
            name={`${name}-select`}
            className={`rounded-l-lg col-start-1 row-start-1 w-full pr-7 pl-3 text-sm outline-none border-0 focus:outline-none focus:ring-0
              [&:has(option[value='']:checked)]:text-yellow-600
            `}
            value={shipperSelectBox ?? ""}
            onChange={(e) => onChangeShipperSelectBox(e.target.value)}
          >
            <option value="" hidden>???</option>
            {options.map((item) => (
              <option key={item.value} value={item.value} disabled={item.disabled}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <input
          type={"search"}
          id={`${name}-input`}
          name={`${name}-input`}
          placeholder="Enter tracking number"
          className="rounded-r-lg mr-1 block min-w-0 grow pr-3 pl-2 text-sm outline-none border-0 focus:outline-none focus:ring-0 placeholder:text-gray-400"
          disabled={loading}
          defaultValue={shipperInputBox}
          onChange={(e) => onChangeShipperInputBox(e.target.value)}
        />
        <div className="grid shrink-0 grid-cols-1 focus-within:relative pr-1">
          <button
            disabled={loading || !shipperInputBox}
            type="submit"
            className="rounded-lg bg-emerald-600 text-white px-4 py-2 disabled:opacity-60"
          >
            {!loading ? (TRACKING_CONFIG.BUTTON_LABEL + ' ' + shipperSelectBox) : "Fetching.."}
          </button>
        </div>
      </div>
    </>
  );
}

export default Shipper;
