import Image from "next/image";
import React from "react";

const Shipper = ({
  options = [],
  value,
  onChange,
  name = "shipper",
  className = "",
}) => {
  const base =
    "relative inline-flex h-8 min-w-[72px] items-center gap-2 justify-center rounded-xl border px-4 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500";
  const enabled =
    "cursor-pointer border-gray-300 bg-white text-gray-900 hover:border-gray-400";
  const selected = "border-emerald-600 bg-emerald-600 text-white shadow-sm";
  const disabled =
    "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400";
  
  return (
    <>
      <div className={`flex flex-wrap gap-3 ${className}`} role="radiogroup">
        {options.map((opt) => {
          const isSelected = value === opt.value;
          const cls = opt.disabled
            ? `${base} ${disabled}`
            : isSelected
              ? `${base} ${selected}`
              : `${base} ${enabled}`;
          
          return (
            <label key={opt.value} className={cls}>
              <input
                type="radio"
                name={name}
                value={opt.value}
                className="sr-only"
                disabled={opt.disabled}
                checked={isSelected}
                onChange={() => onChange(opt.value)}
              />
              {opt.iconSrc ? (
                <Image
                  src={opt.iconSrc}
                  alt={`${opt.label} logo`}
                  width={16}
                  height={16}
                  unoptimized
                  loading="lazy"
                  className={`h-4 w-4 ${isSelected ? "brightness-0 invert" : ""}`}
                />
              ) : opt.Icon ? (
                <opt.Icon className="h-4 w-4" />
              ) : null}
              <span>{opt.label}</span>
            </label>
          );
        })}
      </div>
    </>
  );
}

export default Shipper;
