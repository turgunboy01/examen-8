import React from "react";
import Product from "../ui/Product";
import img1 from "../../assets/home/category1.png";
import img2 from "../../assets/home/category2.png";
import img3 from "../../assets/home/category3.png";
import img4 from "../../assets/home/category4.png";
import img5 from "../../assets/home/category5.png";
const ProductArray = () => {
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
  ];
  return (
    <div className=" bg-[#fff] px-4 py-4 overflow-x-scroll w-full  border-t grid grid-cols-4 gap-4">
      {slides.map((slide, index) => (
        <Product key={index} slide={slide} />
      ))}
    </div>
  );
};

export default ProductArray;
