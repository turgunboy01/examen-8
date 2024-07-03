import React, { useRef } from "react";
import img1 from "../../assets/home/category1.png";
import img2 from "../../assets/home/category2.png";
import img3 from "../../assets/home/category3.png";
import Slider from "react-slick";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PopularSlides, SettingsSlide } from "../../data/SlidesData";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Popular = () => {
  const sliderRef = useRef(null);

  return (
    <div className="bg-[#f8f7f3] py-[80px]">
      <div className="max-w-[1350px] mx-auto px-5 flex w-full gap-[30px]">
        <div className="h-[300px] w-1/3">
          <h1 className="text-[30px] font-medium">
            Популярные <br /> категории
          </h1>
        </div>
        <div className="h-[350px] w-2/3 flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...SettingsSlide}>
              {PopularSlides.map((slide, index) => (
                <div key={index} className="w-[320px] border bg-[#f8f7f3]">
                  <div className="w-full h-[220px] bg-[#fff] flex items-center justify-center">
                    <img src={slide.src} alt={slide.title} />
                  </div>
                  <h2 className="text-[#202020] p-4 border-t w-[80%]">
                    {slide.title}
                  </h2>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3">
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
              Сертификаты
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
