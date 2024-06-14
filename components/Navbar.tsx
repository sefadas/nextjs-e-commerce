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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { selectTotalQuantity } from "@/app/redux/slices/productSlice";

const Navbar = () => {
  const { t } = useTranslation();

  const quantityCart = useSelector((state: RootState) =>
    selectTotalQuantity(state)
  );
  const dispatch = useDispatch();

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
        <div className="sm:text-lg md:text-3xl lg:text-5xl max-sm:text-md tracking-widest font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-transparent">
          <Link href="/">{t("logo")}</Link>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder={t("search")}
            className="sm:w-36 sm:py-1 md:w-36 lg:w-56 md:text-xs border  md:px-5 md:py-3 lg:px-8 lg:py-4 outline-none rounded-lg bg-transparent"
          />
          <div className="border-2 sm:px-2 sm:py-1 md:px-5 lg:px-8 p-2 md:py-1 lg:py-3 text-lg rounded-lg bg-transparent hover:bg-green-500 duration-700">
            <Link href="/">{t("login")}</Link>
          </div>
          <div className="flex items-center justify-center border-2 bg-gray-500 sm:py-2 lg:py-3 md:py-2 lg:px-6 md:px-4 rounded-lg">
            <Link href="/basket" className="flex gap-3 relative">
              <SlBasket size={20} />
              <span className="absolute bottom-3 bg-red-500 rounded-full w-5 h-5 px-1 text-sm left-3">
                {quantityCart}
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
