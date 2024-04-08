/* eslint-disable @next/next/no-img-element */
"use client";
import { Category, getProductsByCategory } from "@/app/constants/data/products";
import { IProductData } from "@/app/types/type";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const MenSweat: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["MenSweat", Category.MenSweat],
    queryFn: () => getProductsByCategory(Category.MenSweat),
  });

  return (
    <div>
      {isLoading && <Loading />}

      <div className="flex flex-wrap gap-4 justify-center text-center text-white pt-44 pb-24">
        {data?.map((mensweat) => (
          <div
            key={mensweat.id}
            className="xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 max-sm:w-full h-[500px] border-2 bg-gray-400 hover:border-red-600 duration-500 m-2 p-1 space-y-1 shadow-lg hover:shadow-2xl shadow-gray-300 rounded-md"
          >
            <img
              className="object-cover w-full h-[250px]"
              src={mensweat.imageUrl}
              alt=""
            />

            <div className="flex flex-col items-center justify-center text-black">
              <div className="font-bold pt-3">{mensweat?.category}</div>
              <div className="h-8 pt-3">{mensweat?.name}</div>
              <div className="font-bold text-lg pt-3">{mensweat?.price} €</div>
              <div className="font-bold text-lg pb-2">
                Stock: {mensweat?.stock} - pieces left{" "}
              </div>
              <div className="px-4 w-full pt-2">
                <Button />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenSweat;
