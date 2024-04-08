"use client";
import Link from "next/link";
import React from "react";
import { SlBasket } from "react-icons/sl";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-800 fixed z-50 text-white">
      <div className="flex items-center justify-between h-28 px-4 container mx-auto">
        <div className="sm:text-3xl md:text-5xl lg:text-6xl max-sm:text-3xl tracking-widest font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-transparent">
          <Link href="/">SHOPPING</Link>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Arama yapınız"
            className="border px-8 py-4 outline-none rounded-lg bg-transparent"
          />
          <div className="border-2 px-8 p-2 py-3 text-lg rounded-lg bg-transparent hover:bg-green-500 duration-700">
            <Link href="/">Giriş Yap</Link>
          </div>
          <div className="flex items-center justify-center border-2 bg-gray-500 py-3 px-6 rounded-lg">
            <Link href="/basket" className="flex gap-3 relative">
              <SlBasket size={20} />
              <span className="absolute bottom-3 bg-red-500 rounded-full w-5 h-5 px-1 text-sm left-3">
                0
              </span>
              Sepetim
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar Category Dropdown */}
      <Dropdown />
    </div>
  );
};

export default Navbar;
