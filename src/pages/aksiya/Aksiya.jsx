import React from "react";
import { BsArrowBarRight } from "react-icons/bs";
import Product from "../../components/ui/Product";

import img1 from "../../assets/home/category1.png";
import img2 from "../../assets/home/category2.png";
import img3 from "../../assets/home/category3.png";
import img4 from "../../assets/home/category4.png";
import img5 from "../../assets/home/category5.png";
import Kabinet from "../../components/ui/Kabinet";
import Popular from "../../components/ui/Popular";
import Brend from "../../components/ui/Brend";
import Contact from "../../components/home/Contact";

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

const AksiyaPage = () => {
  return (
    <div className="bg-[#f8f7f3]">
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
            {slides.map((slide, index) => (
              <Product key={index} slide={slide} />
            ))}
          </div>
        </div>
      </div>
      <Kabinet />
      <Popular />
      <Brend />
      <Contact />
    </div>
  );
};

export default AksiyaPage;
