import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { SettingsSlide, newsSlides } from "../../data/SlidesData";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const News = () => {
  const sliderRef = useRef(null);

  return (
    <div className="bg-[#f8f7f3] py-[80px]">
      <div className="max-w-[1350px] mx-auto px-5 flex flex-col md:flex-row w-full gap-[30px]">
        <div className=" w-full md:w-1/3 flex justify-between">
          <h1 className="text-[30px]  md:w-[50%] font-medium">
            Новости компании
          </h1>
          <span>
            {" "}
            <button className="px-5 py-3 rounded-full hidden sm:block md:hidden border text-[14px] text-[#fff] bg-[#088269]">
              Все новости
            </button>
          </span>
        </div>
        <div className=" w-full md:w-2/3 flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...SettingsSlide}>
              {newsSlides.map((slide, index) => (
                <div key={index} className="w-[320px] border bg-[#f8f7f3]">
                  <div className="w-full bg-[#fff] flex items-center justify-center">
                    <img
                      src={slide.src}
                      className="h-[320px]"
                      alt={slide.title}
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-[#202020] text-[14px] w-[80%]">
                      {slide.date}
                    </h2>
                    <h2 className="text-[#202020] py-1 w-[80%]">
                      {slide.title}
                    </h2>
                    <h2 className="pt-3 text-[14px] text-[#a09595] w-[80%]">
                      {slide.desc}
                    </h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex sm:hidden md:flex justify-center md:justify-between ">
            <div className=" hidden md:flex gap-3">
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
            <button className="px-5 py-3 rounded-full border text-[14px] text-[#fff] bg-[#088269]">
              Все новости
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
