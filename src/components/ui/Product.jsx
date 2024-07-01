import React from "react";
import { CategoryIcons1, CategoryIcons2 } from "../../assets/HomeSvg";

const Product = ({ slide }) => {
  return (
    <div className=" border rounded-xl   overflow-hidden  bg-[#f8f7f3]">
      <div className="w-full h-[300px] bg-[#fff] flex items-center relative justify-center">
        <img
          src={slide.src}
          alt={slide.title}
          className="w-full object-contain h-full"
        />
        <div className="absolute top-3 left-3 px-2 py-1 text-[13px] border border-[#088269] text-[#088269] bg-[#e1efe6] rounded-full">
          Новинка
        </div>
        <div className="absolute right-3 top-3 flex gap-2">
          <CategoryIcons1 />
          <CategoryIcons2 />
        </div>
      </div>
      <div className="p-4 ">
        <h2 className="text-[#202020] text-[16px] font-semibold border-t xl:w-[70%]">
          {slide.title}
        </h2>
        {/* <h3></h3> */}
        <p className="text-[#7a7687]  text-[10px] lg:text-[12px] xl:w-[40%] pt-[5px]">
          {slide.artikl}
        </p>
        <p className=" font-semibold pt-[15px]">{slide.price}</p>
        <button className="py-2 border hover:text-[#fff] hover:bg-[#088269] border-[#80808035] w-full mt-[20px] text-[#088269] rounded-full">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default Product;
