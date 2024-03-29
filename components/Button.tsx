import React from "react";

const Button = () => {
  return (
    <button
      type="button"
      className=" text-white rounded-lg bg-blue-800 w-full h-12 font-medium shadow-dark-3 transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    >
      Sepete Ekle
    </button>
  );
};

export default Button;
