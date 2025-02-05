import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import img1 from "../../assets/katalog/katalog1.png";
import img2 from "../../assets/katalog/katalog2.png";
import img3 from "../../assets/katalog/katalog3.png";
import img4 from "../../assets/katalog/katalog4.png";
import img5 from "../../assets/katalog/katalog5.png";
import img6 from "../../assets/katalog/katalog6.png";
import img7 from "../../assets/katalog/katalog7.png";
import img8 from "../../assets/katalog/katalog8.png";
import img9 from "../../assets/katalog/katalog9.png";
import img10 from "../../assets/katalog/katalog10.png";
import { Settings } from "../../assets/SvgIcons";
import { Products } from "../../data/ProductsData";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const KatalogComponent = () => {
  const [catalog, setCatalog] = useState(false);
  const [categories, setCategories] = useState([]);
  const [changeCategory, setChangeCategory] = useState("");
  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(Products.map((cat) => cat.category))];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  console.log(categories);

  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5 py-[30px]">
        <div className="flex gap-2 items-center ">
          <Link to={"/"} className="text-[#7A7687] text-[14px]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link className="text-[14px]" to={"/katalog"}>
            Каталог
          </Link>
        </div>
        <div className="flex justify-between py-[20px] flex-wrap">
          <h2 className="text-[20px]  py-[20px]"> Популярные категории</h2>
          <div className=" w-full lg:hidden block  sm:w-[300px] relative  ">
            <h2
              onClick={() => setCatalog(!catalog)}
              className="pb-4 flex gap-2 items-center  justify-center  border rounded-lg p-5"
            >
              <span>
                <Settings />
              </span>{" "}
              Направления
            </h2>
            <div
              className={`${
                catalog ? "h-[420px] opacity-100" : "h-0 opacity-0"
              }  rounded-lg absolute bg-[#f8f7f3] duration-300 overflow-hidden top-[60px] w-[100%] border mt-[10px]  p-[20px]`}
            >
              {categories.map((item, index) => (
                <Link
                  to={`/kategory/${item}`}
                  key={index}
                  className="py-3 cursor-pointer flex justify-between text-[14px] items-center"
                >
                  {item}
                  <RiArrowRightSLine />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-[30%] hidden lg:block border h-full rounded-lg p-5">
            <div className="">
              <h2 className=" pb-4  border-b">Направления</h2>
              {categories.map((item, index) => (
                <Link
                  to={`/kategory/${item}`}
                  key={index}
                  className="py-3 cursor-pointer flex justify-between text-[14px] items-center"
                >
                  {item}
                  <RiArrowRightSLine />
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:w-[70%] w-full  grid grid-cols-3 gap-5">
            <div className="flex gap-5 flex-col">
              <Link
                to={`/kategory/Офтальмология`}
                className="border-[1px] overflow-hidden rounded-lg "
              >
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img1} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Офтальмология
                </h2>
              </Link>
              <Link
                to={`/kategory/Лабораторная диагностика`}
                className="border-[1px] overflow-hidden rounded-lg "
              >
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img2} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Лабораторная диагностика
                </h2>
              </Link>
            </div>
            <div className="flex gap-5 flex-col">
              <Link
                to={`/kategory/Хирургия`}
                className="border-[1px] overflow-hidden rounded-lg "
              >
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img3} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Хирургия
                </h2>
              </Link>
              <Link
                to={`/kategory/Физиотерапия и реабилитация`}
                className="border-[1px] overflow-hidden rounded-lg "
              >
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img4} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Физиотерапия и реабилитация
                </h2>
              </Link>
            </div>
            <Link
              to={`/kategory/Оборудование для медицинской метрологии`}
              className="border-[1px] h-[100%] overflow-hidden rounded-lg "
            >
              <div className="  h-[560px] bg-white  flex  items-center flex-col justify-center">
                <img src={img5} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                Оборудование для медицинской метрологии
              </h2>
            </Link>
            <Link
              to={`/kategory/Эндоскопия`}
              className="border-[1px] h-[100%] overflow-hidden rounded-lg "
            >
              <div className="  h-[560px] bg-white  flex  items-center flex-col justify-center">
                <img src={img6} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                Эндоскопия
              </h2>
            </Link>
            <div className="flex gap-5 flex-col">
              <Link
                to={`/kategory/Функциональная диагностика`}
                className="border-[1px] overflow-hidden rounded-lg "
              >
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img7} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Функциональная диагностика
                </h2>
              </Link>
              <Link
                to={`/kategory/Косметология`}
                className="border-[1px] overflow-hidden rounded-lg "
              >
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img8} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Косметология
                </h2>
              </Link>
            </div>
            <div className="flex gap-5 flex-col">
              <Link
                to={`/kategory/Стерилизация`}
                className="border-[1px] overflow-hidden rounded-lg "
              >
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img9} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Стерилизация
                </h2>
              </Link>
              <Link
                to={"/kategory/Распродажи"}
                className="border-[1px] overflow-hidden rounded-lg "
              >
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img10} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Распродажи
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KatalogComponent;
