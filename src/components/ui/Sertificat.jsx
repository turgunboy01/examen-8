import React, { useRef } from "react";

import img1 from "../../assets/sertificat.png";

import Slider from "react-slick";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SertifikatSlides, SettingsSlide } from "../../data/SlidesData";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Sertificat = () => {
  const sliderRef = useRef(null);

 

  return (
    <div className="bg-[#f8f7f3] ">
      <div className="max-w-[1350px] mx-auto px-5 flex flex-col md:flex-row w-full gap-[30px]">
        <div className=" md:w-1/3 w-full">
          <h1 className="text-[30px] font-medium">Сертификаты на продукцию</h1>
        </div>
        <div className="h-[350px] md:w-2/3 w-full flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...SettingsSlide}>
              {SertifikatSlides.map((slide, index) => (
                <div
                  key={index}
                  className="w-[320px] rounded-xl overflow-hidden border bg-[#f8f7f3]"
                >
                  <div className="w-full p-1  bg-[#fff] flex items-center justify-center">
                    <img
                      src={slide.src}
                      className="rounded-lg"
                      alt={slide.title}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="hidden md:flex justify-between">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertificat;
