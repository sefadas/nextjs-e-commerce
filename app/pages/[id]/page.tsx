"use client";

import { getDetail } from "@/app/constants/data/products";
import { IProductData } from "@/app/types/type";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import { useQuery } from "@tanstack/react-query";
import { error } from "console";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/redux/slices/productSlice";
import { useTranslation } from "react-i18next";

const DetailsPage: React.FC = () => {
  const { t } = useTranslation();
  const [counter, setCounter] = useState<number>(1);

  const { id } = useParams();

  const router = useRouter();

  const dispatch = useDispatch();

  const parsedId = +id;

  const {
    data: detail,
    isLoading,
    isError,
  } = useQuery<IProductData>({
    queryKey: ["details", parsedId],
    queryFn: () => getDetail(parsedId),
    enabled: !Number.isNaN(parsedId),
  });

  // Loading...
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (isError || !detail) {
    router.push("/404");
    return <div>{t("error")}</div>;
  }

  const addToCart = () => {
    dispatch(
      addItem({
        id: detail.id,
        name: detail.name,
        price: detail.price,
        quantity: counter,
        imageUrl: detail.imageUrl,
      })
    );
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center w-full pt-48 pb-16 gap-4 text-gray-300">
        <div className="flex w-full justify-center">
          <img className="w-2/3" src={detail.imageUrl} alt={detail.name} />
        </div>
        <div className="w-2/3 flex flex-col items-center px-8 gap-4">
          <div className="font-bold text-lg">{detail.category}</div>
          <div className="text-xl">{detail.name}</div>
          <div className="font-bold">
            {t("price")} {detail.price} $
          </div>
          <div>
            {t("stock")} {detail.stock}{" "}
          </div>
          <div className="flex items-center gap-8 pb-3 pt-3">
            <CgMathMinus
              onClick={() => setCounter((prev) => (prev > 1 ? prev - 1 : 1))}
              className="cursor-pointer bg-green-500 hover:bg-green-700 duration-700 w-8 h-8 rounded-full p-1"
              size={25}
            />

            <span>{counter}</span>

            <CgMathPlus
              onClick={() => setCounter((prev) => prev + 1)}
              className="cursor-pointer bg-red-500 hover:bg-red-700 duration-700 w-8 h-8 rounded-full p-1"
              size={25}
            />
          </div>
          <div className="w-80">
            <Button onClick={addToCart}>{t("basket")}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
