/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { IProductData } from "./types/type";
import { useTranslation } from "react-i18next";

interface IProps {
  prd: IProductData;
}

const Home: React.FC<IProps> = ({ prd }) => {
  const { t } = useTranslation();

  return (
    <div className="xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 max-sm:w-full h-[480px] border-2 bg-gray-400 hover:border-red-600 duration-500 m-2 p-1 space-y-1 shadow-lg hover:shadow-2xl shadow-gray-300 rounded-md">
      <Link href={`/pages/${prd.id}`}>
        <img
          className="object-cover w-full h-[250px]"
          src={prd?.imageUrl}
          alt=""
        />
      </Link>

      <div className="flex flex-col items-center justify-center">
        <div className="font-bold pt-3">{prd?.category}</div>
        <div className="h-8 pt-3">{prd?.name}</div>
        <div className="font-bold text-lg pt-3">{prd?.price} €</div>
        <div className="font-bold text-lg pb-2">
          {t("stock")} {prd?.stock}
        </div>

        {/* Add Button */}
        <Link
          href={`/pages/${prd.id}`}
          className="flex items-center justify-center text-center w-full px-4"
        >
          <Button>{t("detail")}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
