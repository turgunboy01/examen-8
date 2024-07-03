import React from "react";
import { Products } from "../../data/ProductsData";
import { BsArrowBarRight } from "react-icons/bs";
import Product from "../ui/Product";

const Aksiya = () => {
  return (
    <div className="max-w-[1350px] mx-auto px-5 py-[30px] flex gap-5">
      <div className="w-[30%] border p-5">
        <h2 className=" pb-4  border-b rounded-lg">Категории</h2>
        <h2 className="py-3 flex justify-between text-[14px] items-center">
          Группы товаров
          <BsArrowBarRight />
        </h2>{" "}
        <h2 className="py-3 flex justify-between text-[14px] items-center">
          Мониторы
          <BsArrowBarRight />
        </h2>{" "}
        <h2 className="py-3 flex justify-between text-[14px] items-center">
          Лампы
          <BsArrowBarRight />
        </h2>{" "}
        <h2 className="py-3 flex justify-between text-[14px] items-center">
          Кровати
          <BsArrowBarRight />
        </h2>{" "}
        <h2 className="py-3 flex justify-between text-[14px] items-center">
          Рентгены
          <BsArrowBarRight />
        </h2>{" "}
      </div>
      <div className="w-[70%]">
        <div className="grid grid-cols-3 gap-4 pt-3">
          {Products.map((slide, index) => (
            <Product key={index} slide={slide} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aksiya;
