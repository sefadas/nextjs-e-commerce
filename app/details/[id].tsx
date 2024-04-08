// pages/details/[id].tsx
import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { IProductData } from "../types/type";
import { getProductById } from "../constants/data/products";

interface DetailProps {
  product: IProductData;
}

const DetailPage: React.FC<DetailProps> = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Stock: {product.stock}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Burada, mevcut ürünlerin ID'lerini almalısınız
  const productIds = ["1", "2"]; // Örnek olarak

  // Dinamik rotaları oluşturmak için gerekli ID'leri sağlayın
  const paths = productIds.map((id) => ({ params: { id } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params.id kullanarak ürün bilgilerini getirin
  const productId = params?.id as string;
  const product = getProductById(productId); // getProductById fonksiyonuyla ürün bilgilerini alın

  return {
    props: {
      product,
    },
  };
};

export default DetailPage;
