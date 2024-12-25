import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button className=" flex flex-row items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full bg-coral-red text-white border-coral-red">
      {label}
      <img src={iconUrl} className=" ml-2 rounded-full w-5 h-5" />
    </button>
  );
};

export default Button;
