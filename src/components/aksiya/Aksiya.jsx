import React, { useState } from "react";
import { Products } from "../../data/ProductsData";
import { BsArrowBarRight } from "react-icons/bs";
import Product from "../ui/Product";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { Settings } from "../../assets/SvgIcons";
import { Link } from "react-router-dom";

const Aksiya = () => {
  const [catalog, setCatalog] = useState(false);

  const fill = Products.filter((fil) => fil.aksiya == "-30%");

  return (
    <div className="max-w-[1350px] mx-auto px-5 py-[10px] ">
      <div className="flex gap-2 items-center ">
        <Link to={"/"} className="text-[#7A7687] text-[14px] py-[20px]">
          Главная
        </Link>
        <MdOutlineKeyboardArrowRight />
        <Link className="text-[14px]" to={"/aksiya"}>
          Акции
        </Link>
      </div>
      <div className=" w-full sm:hidden block   sm:w-[300px] relative  ">
        <h2
          onClick={() => setCatalog(!catalog)}
          className="pb-4 flex gap-2 items-center  justify-center  border rounded-lg p-5"
        >
          <span>
            <Settings />
          </span>{" "}
          Фильтр
        </h2>
        <div
          className={`${
            catalog ? "h-[250px] opacity-100" : "h-0 opacity-0"
          }  rounded-lg absolute bg-[#f8f7f3] duration-300 z-50 top-[60px] w-[100%] border mt-[10px]  p-[20px]`}
        >
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Группы товаров
            <MdKeyboardArrowRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Мониторы
            <MdKeyboardArrowRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Лампы
            <MdKeyboardArrowRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Кровати
            <MdKeyboardArrowRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Рентгены
            <MdKeyboardArrowRight />
          </h2>{" "}
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-[30%] hidden sm:block h-full border p-5">
          <h2 className=" pb-4  border-b rounded-lg">Категории</h2>
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Группы товаров
            <MdKeyboardArrowRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Мониторы
            <MdKeyboardArrowRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Лампы
            <MdKeyboardArrowRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Кровати
            <MdKeyboardArrowRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Рентгены
            <MdKeyboardArrowRight />
          </h2>{" "}
        </div>
        <div className="sm:w-[70%]">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
            {fill.map((slide, index) => (
              <Product key={index} slide={slide} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aksiya;
