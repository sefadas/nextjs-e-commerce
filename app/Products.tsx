"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Home from "./Home";
import { getAllData } from "@/app/constants/data/products";
import Loading from "@/components/Loading";
import { IProductData } from "./types/type";

const Products: React.FC = () => {
  const { data, isLoading } = useQuery<IProductData[]>({
    queryKey: ["products"],
    queryFn: getAllData,
  });

  return (
    <div>
      {isLoading && <Loading />}

      <div className="flex flex-wrap gap-4 justify-center pt-44 pb-24">
        {data?.map((prd) => (
          <Home prd={prd} key={prd.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
