import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IProductData } from "@/app/types/type";
import { useQuery } from "@tanstack/react-query";
import { getAllData } from "@/app/constants/data/products";

interface ProductDetailProps {
  product: IProductData;
}

const ProductDetailPage: React.FC<ProductDetailProps> = ({ product }) => {
  return <div>{/* Ürün detaylarını göster */}</div>;
};

export const getServerSideProps: GetServerSideProps<
  ProductDetailProps
> = async (context) => {
  // context.params ile router query'sine erişilebilir
  const { id } = context.params;

  // Ürün detaylarını getirmek için gerekli kodlar
  // Örneğin:
  // const product = await fetchProductDetails(id);

  // getServerSideProps içinden dönen veriler props olarak bileşene geçirilir
  return {
    props: {
      // product: product
      // Ürün detaylarını döndür
    },
  };
};

export default ProductDetailPage;
