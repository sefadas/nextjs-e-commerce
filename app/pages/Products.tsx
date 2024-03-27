"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductData } from "../constants/data/products";
import Loading from "../components/Loading";
import Home from "../pages/Home";

const Products: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProductData,
  });

  return (
    <div>
      {isLoading && <Loading />}

      <div className="flex flex-wrap gap-4 justify-center pt-44 pb-24">
        {data?.map((prd) => (
          <div key={prd.id}>
            <Home prd={prd} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
