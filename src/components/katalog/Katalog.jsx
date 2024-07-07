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

  const fill = Products.filter((fil) => fil.category == changeCategory);

  console.log(fill);
  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5 py-[30px]">
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
              }  rounded-lg absolute bg-[#f8f7f3] duration-300 top-[60px] w-[100%] border mt-[10px]  p-[20px]`}
            >
              {categories.map((item, index) => (
                <Link
                  to={`/kategory/${item}`}
                  onClick={() => setChangeCategory(item)}
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
                  onClick={() => setChangeCategory(item)}
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
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img1} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img2} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
            </div>
            <div className="flex gap-5 flex-col">
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img3} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img4} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
            </div>
            <div className="border-[1px] h-[100%] overflow-hidden rounded-lg ">
              <div className="  h-[560px] bg-white  flex  items-center flex-col justify-center">
                <img src={img5} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                Дерматологическое оборудование
              </h2>
            </div>
            <div className="border-[1px] h-[100%] overflow-hidden rounded-lg ">
              <div className="  h-[560px] bg-white  flex  items-center flex-col justify-center">
                <img src={img6} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                Дерматологическое оборудование
              </h2>
            </div>
            <div className="flex gap-5 flex-col">
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img7} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img8} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
            </div>
            <div className="flex gap-5 flex-col">
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img9} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img10} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KatalogComponent;
