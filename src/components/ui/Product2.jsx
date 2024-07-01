import React from "react";
import { CategoryIcons1, CategoryIcons2 } from "../../assets/HomeSvg";

const Product2 = ({ slide }) => {
  return (
    <div className=" border rounded-xl relative  flex overflow-hidden  bg-[#f8f7f3]">
      <div className="w-[320px] h-[270px] bg-[#fff] flex items-center relative justify-center">
        <img
          src={slide.src}
          alt={slide.title}
          className="w-full object-contain h-full"
        />
        <div className="absolute top-3 left-3 px-2 py-1 text-[13px] border border-[#088269] text-[#088269] bg-[#e1efe6] rounded-full">
          Новинка
        </div>
      </div>
      <div className="p-4 w-full flex justify-between flex-col ">
        <span>
          <h2 className="text-[#202020] font-semibold w-[70%]">
            {slide.title}
          </h2>
          {/* <h3></h3> */}
          <p className="text-[#7a7687] text-[12px] w-[40%] pt-[5px]">
            {slide.artikl}
          </p>
        </span>
        <div className="flex justify-between w-full">
          <p className=" font-semibold pt-[15px]">{slide.price}</p>
          <button className="py-2 px-5 border w-[250px] text-[14px] h-[41px] hover:text-[#fff] hover:bg-[#088269] border-[#80808035]  mt-[20px] text-[#088269] rounded-full">
            Добавить в корзину
          </button>
        </div>
        <div className="absolute right-3 top-3 flex gap-2">
          <CategoryIcons1 />
          <CategoryIcons2 />
        </div>
      </div>
    </div>
  );
};

export default Product2;
