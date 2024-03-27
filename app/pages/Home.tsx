import React from "react";
import { IProductData } from "../types/type";

interface IProps {
  prd: IProductData;
}

const Home: React.FC<IProps> = ({ prd }) => {
  return <div>{prd.name}</div>;
};

export default Home;
