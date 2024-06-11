"use client";
import Button from "@/components/Button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { clearCart, removeItem } from "../redux/slices/productSlice";
import { useTranslation } from "react-i18next";

const Basket: React.FC = () => {
  const { t } = useTranslation();

  const cart = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="container mx-auto pt-48 pb-16 text-gray-300">
      <h1 className="text-2xl font-bold mb-8 flex items-center justify-center">
        {t("cart")}
      </h1>
      {cart.items.length === 0 ? (
        <p>{t("empty")}</p>
      ) : (
        <div>
          <div className="mb-8">
            {cart.items.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <div className="flex gap-4">
                  <div className="">
                    <img className="w-32" src={item.imageUrl} alt="" />
                  </div>
                  <div>
                    <p>{item.name}</p>
                    <p>
                      {t("price")} {item.price} $
                    </p>
                    <p>
                      {t("qty")} {item.quantity}{" "}
                    </p>
                    <div className="pt-4 w-44">
                      <Button onClick={() => handleRemoveItem(item.id)}>
                        {t("remove")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between items-center">
            <p className="text-xl font-bold">
              {t("total")}
              {cart.items.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}{" "}
              $
            </p>
            <div className="w-44 pt-4">
              <Button onClick={handleClearCart}>{t("clear")}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
