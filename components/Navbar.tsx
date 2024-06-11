"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import Dropdown from "./Dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import tr from "../app/images/tr.png";
import en from "../app/images/en.png";
import Image from "next/image";

const Navbar = () => {
  const { t } = useTranslation();

  const changeLanguage = async (lang: string) => {
    await i18next.changeLanguage(lang);
  };

  const flagChange = (lang: string) => {
    changeLanguage(lang);
    setFlag(!flag);
  };

  const [flag, setFlag] = useState<boolean>(false);
  return (
    <div className="w-full bg-blue-800 fixed z-50 text-white">
      <div className="flex items-center justify-between h-28 px-4 container mx-auto">
        <div className="sm:text-3xl md:text-5xl lg:text-6xl max-sm:text-3xl tracking-widest font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-transparent">
          <Link href="/">{t("logo")}</Link>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder={t("search")}
            className="border px-8 py-4 outline-none rounded-lg bg-transparent"
          />
          <div className="border-2 px-8 p-2 py-3 text-lg rounded-lg bg-transparent hover:bg-green-500 duration-700">
            <Link href="/">{t("login")}</Link>
          </div>
          <div className="flex items-center justify-center border-2 bg-gray-500 py-3 px-6 rounded-lg">
            <Link href="/basket" className="flex gap-3 relative">
              <SlBasket size={20} />
              <span className="absolute bottom-3 bg-red-500 rounded-full w-5 h-5 px-1 text-sm left-3">
                0
              </span>
              {t("cart")}
            </Link>
          </div>
          <div className="flex gap-4">
            <select
              className="bg-transparent text-lg "
              onChange={(e) => flagChange(e.target.value)}
            >
              <option className="text-black" value="en">
                {t("EN")}
              </option>

              <option className="text-black" value="tr">
                {t("TR")}
              </option>
            </select>
            <Image className="w-8" src={flag ? tr : en} alt="" />
          </div>
        </div>
      </div>

      {/* Navbar Category Dropdown */}
      <Dropdown />
    </div>
  );
};

export default Navbar;
