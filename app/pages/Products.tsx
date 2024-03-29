"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../constants/data/products";
import Loading from "../../components/Loading";
import Home from "../pages/Home";

const Products: React.FC = () => {
  const { data, isLoading } = useQuery({
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
