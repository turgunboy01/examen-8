import React, { useRef } from "react";
import Slider from "react-slick";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrendSlide, SettingsSlide } from "../../data/SlidesData";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Brend = () => {
  const sliderRef = useRef(null);
  return (
    <div className="bg-[#f8f7f3] py-[80px] pb-[150px]">
      <div className="max-w-[1350px] mx-auto px-5 flex flex-col md:flex-row w-full gap-[30px]">
        <div className=" md:w-1/3 w-full">
          <div className="flex justify-between">
            <h1 className="text-[30px] font-medium">Бренды</h1>
            <button className="px-5 py-3 hidden sm:block md:hidden  rounded-full border hover:bg-[#07745E] text-[14px] text-[#fff] bg-[#088269]">
              Сертификаты
            </button>
          </div>
          <p className="text-[#202020] text-[16px] pt-[10px]">
            Эксклюзивные поставщики
          </p>
        </div>
        <div className="h-[350px] md:w-2/3 w-full flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...SettingsSlide}>
              {BrendSlide.map((slide, index) => (
                <div key={index} className="w-[320px] border bg-[#f8f7f3]">
                  <div className="w-full h-[220px] bg-[#fff] flex items-center justify-center">
                    <img src={slide.src} alt={slide.title} />
                  </div>
                  <h2 className="text-[#202020] text-[12px] sm:text-[15px] p-4 border-t w-full sm:w-[80%]">
                    {slide.title}
                  </h2>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex sm:hidden md:flex justify-center md:justify-between  ">
            <div className="hidden md:flex gap-3">
              <button
                className="w-[41px] h-[41px] rounded-full border flex items-center justify-center"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <GoArrowLeft />
              </button>
              <button
                className="w-[41px] h-[41px] rounded-full border flex items-center justify-center"
                onClick={() => sliderRef.current.slickNext()}
              >
                <GoArrowRight />
              </button>
            </div>
            <button className="px-5 py-3  rounded-full border hover:bg-[#07745E] text-[14px] text-[#fff] bg-[#088269]">
              Сертификаты
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brend;
