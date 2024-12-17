import React from "react";

const Input = ({
  widtfull = false,
  label,
  placeholder,
  id,
  ispassword = false,
  ismarginRequired = true,
}) => {
  return (
    <div
      className={
        ismarginRequired
          ? "flex flex-col gap-y-2 mb-10"
          : "flex flex-col gap-y-2"
      }
    >
      <label htmlFor="FirstName" className="acountStyle text-[16px]">
        {label}
      </label>
      <input
        type={ispassword ? "password" : "text"}
        className={
          widtfull
            ? "bg-white_F5F5F5 rounded px-3 py-3 w-[903px]"
            : "bg-white_F5F5F5 rounded px-3 py-3 w-[430px]"
        }
        id={id}
        name={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
