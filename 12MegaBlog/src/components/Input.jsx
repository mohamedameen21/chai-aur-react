import React, { useId } from "react";

function Input({ label, type, placeholder, className, ...props }) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={`w-full border border-gray-300 rounded-md px-4 py-2 ${className}`}
        type={type}
        placeholder={placeholder}
        id={id}
        {...props}
      />
    </div>
  );
}

export default Input;
