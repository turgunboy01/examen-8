import React from "react";
import img1 from "../../assets/home/category1.png";
import img2 from "../../assets/home/category2.png";
import img3 from "../../assets/home/category3.png";
import img4 from "../../assets/home/category4.png";
import img5 from "../../assets/home/category5.png";
import img6 from "../../assets/home/category6.png";
import img7 from "../../assets/home/category7.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5">
        <h2 className="text-[30px] py-[20px]">Популярные категории</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="flex flex-col gap-3">
            <div className="   border-[1px] overflow-hidden rounded-lg ">
              <Link
                to={"/kategory/Офтальмология"}
                className="h-[220px] bg-white  flex  items-center flex-col justify-center"
              >
                <img src={img1} alt="s" />
              </Link>
              <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                Дерматологическое оборудование
              </h2>
            </div>
            <div className="   border-[1px] overflow-hidden rounded-lg ">
              <Link
                to={"/kategory/Лабораторная диагностика"}
                className="h-[220px] bg-white  flex  items-center flex-col justify-center"
              >
                <img src={img2} alt="s" />
              </Link>
              <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                Ветеринарное оборудование
              </h2>
            </div>
          </div>
          <div className="">
            <div className="  border-[1px] overflow-hidden rounded-lg ">
              <Link
                to={"/kategory/Хирургия"}
                className="h-[550px] bg-white  flex  items-center flex-col justify-center"
              >
                <img src={img7} alt="s" />
              </Link>
              <h2 className="p-[20px] text-[#202020] text-[14px]   lg:text-[16px] xl:text-[18px]">
                Дерматологическое оборудование
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="   border-[1px] overflow-hidden rounded-lg ">
              <Link
                to={"/kategory/Офтальмология"}
                className="h-[220px] bg-white  flex  items-center flex-col justify-center"
              >
                <img src={img3} alt="s" />
              </Link>
              <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                Оборудование для анастезиологии
              </h2>
            </div>
            <div className="   border-[1px] overflow-hidden rounded-lg ">
              <Link
                to={"/kategory/Эндоскопия"}
                className="h-[220px] bg-white  flex  items-center flex-col justify-center"
              >
                <img src={img4} alt="s" />
              </Link>
              <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                Оборудование для анастезиологии
              </h2>
            </div>
          </div>{" "}
          <div className="flex flex-col gap-3">
            <div className="   border-[1px] overflow-hidden rounded-lg ">
              <Link
                to={"/kategory"}
                className="h-[220px] bg-white  flex  items-center flex-col justify-center"
              >
                <img src={img5} alt="s" />
              </Link>
              <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                Мебель для медецинских целей
              </h2>
            </div>
            <div className="   border-[1px] overflow-hidden rounded-lg ">
              <Link
                to={"/kategory/Физиотерапия и реабилитация"}
                className="h-[220px] bg-white  flex  items-center flex-col justify-center"
              >
                <img src={img6} alt="s" />
              </Link>
              <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                Дерматологическое оборудование
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
