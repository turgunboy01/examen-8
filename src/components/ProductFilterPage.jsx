import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import Product from "./ui/Product";

import img1 from "../assets/home/category1.png";
import img2 from "../assets/home/category2.png";
import img3 from "../assets/home/category3.png";
import img4 from "../assets/home/category4.png";
import img5 from "../assets/home/category5.png";
import { FilterSvg1, FilterSvg2 } from "../assets/HomeSvg";
import Product2 from "./ui/Product2";

const countries = [
  "Австралия",
  "Австрия",
  "Беларусь",
  "Бельгия",
  "Великобритания",
  "Германия",
  "Израиль",
  "Испания",
];

const slides = [
  {
    src: img1,
    title: "Анализатор мочи MIND UA- 66",
    artikl: "Артикул: 213134 В наличии",
    price: "300 000 руб.",
  },
  {
    src: img2,
    title: "Анализатор мочи MIND UA- 66",
    artikl: "Артикул: 213134 В наличии",
    price: "300 000 руб.",
  },
  {
    src: img3,
    title: "Анализатор мочи MIND UA- 66",
    artikl: "Артикул: 213134 В наличии",
    price: "300 000 руб.",
  },
  {
    src: img4,
    title: "Анализатор мочи MIND UA- 66",
    artikl: "Артикул: 213134 В наличии",
    price: "300 000 руб.",
  },
  {
    src: img5,
    title: "Анализатор мочи MIND UA- 66",
    artikl: "Артикул: 213134 В наличии",
    price: "300 000 руб.",
  },
  {
    src: img2,
    title: "Анализатор мочи MIND UA- 66",
    artikl: "Артикул: 213134 В наличии",
    price: "300 000 руб.",
  },
];

const ProductFilterPage = () => {
  const [value, setValue] = useState([0, 1000]);
  const [price, setPrice] = useState(true);
  const [country, setCountry] = useState(true);
  const [product, setProduct] = useState(false);
  const [vertical, setVertical] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const valuetext = (value) => {
    return `${value}°C`;
  };

  return (
    <div className="bg-[#f8f7f3] py-[80px] overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-5">
        <h2 className="text-[30px] leading-[36px] py-5">
          Оборудование Draeger
        </h2>
        <div className="flex gap-4 overflow-x-scroll">
          <button className="py-2 px-5 bg-[#fff] border rounded-full">
            Дерматологическое оборудование
          </button>
          <button className="py-2 px-5 bg-[#fff] border rounded-full">
            Ветеринарное оборудование
          </button>
          <button className="py-2 px-5 bg-[#fff] border rounded-full">
            Мебель медицинская
          </button>
          <button className="py-2 px-5 bg-[#fff] border rounded-full">
            Анестезиология
          </button>
          <button className="py-2 px-5 bg-[#fff] border rounded-full">
            Показать все
          </button>
        </div>
        <div className="flex gap-[30px] sm:flex-row flex-col my-[30px] ">
          <div className="sm:w-[30%] ">
            <div className="px-[20px]  py-[14px] border rounded-xl">
              <h2 className="flex justify-between items-center">
                Направления <MdKeyboardArrowDown />
              </h2>
            </div>
            <div
              className={`px-[20px] py-[10px] duration-300 overflow-hidden ${
                product ? "h-[900px]" : " h-[55px] sm:h-[80px] md:h-[55px]"
              } border mt-[15px]  rounded-xl`}
            >
              <h2
                onClick={() => setProduct(!product)}
                className="flex justify-between items-center py-2 border-b"
              >
                Фильтр по товарам{" "}
                <MdKeyboardArrowDown
                  className={` duration-300 ${
                    product ? "rotate-180" : "rotate-0"
                  }`}
                />
              </h2>
              <div className="">
                <h3
                  onClick={() => setPrice(!price)}
                  className="flex justify-between py-2 pt-[20px] "
                >
                  Цена{" "}
                  <MdKeyboardArrowDown
                    className={`duration-300 ${
                      price ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </h3>
                <div
                  className={` overflow-hidden duration-300 ${
                    price ? "h-[110px] opacity-100" : "h-[0] opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-3 ">
                    <span className="border-b py-2">
                      <p className="text-[12px] text-[#7A7687]">От:</p>
                      <p> ${value[0]}</p>
                    </span>
                    <span className="border-b py-2">
                      <p className="text-[12px] text-[#7A7687]">До:</p>
                      <p> ${value[1]}</p>
                    </span>
                  </div>
                  <Box sx={{ width: 300, padding: "10px " }}>
                    <Slider
                      getAriaLabel={() => "Price range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      className="text-[red]"
                      getAriaValueText={valuetext}
                      min={0}
                      max={1000}
                    />
                  </Box>
                </div>
              </div>
              <div className="">
                <h2
                  onClick={() => setCountry(!country)}
                  className="flex justify-between py-2  "
                >
                  Страна
                  <MdKeyboardArrowDown
                    className={`duration-300 ${
                      country ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </h2>
                <div
                  className={`py-[10px]  duration-300 overflow-hidden ${
                    country ? "h-[400px]  " : "h-[0px]"
                  }`}
                >
                  <div
                    className={`flex justify-between items-center   rounded-full p-3 px-4 ${
                      country ? "bg-[#fff]" : "bg-transparent"
                    } `}
                  >
                    <input
                      type="text"
                      className="border-none outline-none"
                      placeholder="Поиск по стране"
                    />{" "}
                    <IoIosSearch size={20} />
                  </div>
                  <div className="mt-[10px]">
                    <div className="space-y-2">
                      {countries.map((country) => (
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label={country}
                          />
                        </FormGroup>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <h2 className="flex justify-between  ">
                  Состояние
                  <MdKeyboardArrowDown className={`rotate-180`} />
                </h2>
                <div className="mt-[10px]">
                  <div className="space-y-2">
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={"Новый"}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={"Демонстрационный"}
                      />
                    </FormGroup>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <h2 className="flex justify-between  ">
                  Назначение
                  <MdKeyboardArrowDown />
                </h2>
              </div>
              <div className="pt-5">
                <h2 className="flex justify-between  ">
                  Комплектация
                  <MdKeyboardArrowDown />
                </h2>
              </div>
            </div>
            <div className="flex md:flex-row flex-col  gap-3 pt-[10px]">
              <button className="px-5 lg:px-10 py-2 border rounded-full">
                Сбросить
              </button>
              <button className="px-3 lg:px-6 w-full py-2 bg-[#088269] text-[#fff] border rounded-full">
                Показать
              </button>
            </div>
          </div>
          <div className="w-full   ">
            <div className="border px-4 py-2 flex rounded-lg">
              <div className="w-[70%]">
                <h2 className=" flex  items-center gap-2">
                  По популярности <MdKeyboardArrowDown />
                </h2>
              </div>
              <div className="w-[30%] flex justify-between">
                <div className="flex gap-2">
                  <h2>Показать</h2>{" "}
                  <span className="flex items-center">
                    36 <MdKeyboardArrowDown />
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="" onClick={() => setVertical(true)}>
                    <FilterSvg1 color={vertical ? "#088269" : "#7a7687"} />
                  </div>
                  <div className="" onClick={() => setVertical(false)}>
                    <FilterSvg2 color={vertical ? "#7a7687" : "#088269"} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`grid ${
                vertical ? "grid-cols-1" : " grid-cols-2 lg:grid-cols-3"
              } gap-4 pt-3`}
            >
              {slides.map((slide, index) =>
                vertical ? (
                  <>
                    <Product2 slide={slide} key={index} />
                  </>
                ) : (
                  <>
                    <Product slide={slide} key={index} />
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterPage;
