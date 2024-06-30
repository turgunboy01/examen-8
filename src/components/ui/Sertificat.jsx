import React, { useRef } from "react";

import img1 from "../../assets/sertificat.png";

import Slider from "react-slick";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sertificat = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const slides = [
    {
      src: img1,
    },
    {
      src: img1,
    },
    {
      src: img1,
    },
    {
      src: img1,
    },
    {
      src: img1,
    },
    {
      src: img1,
    },
  ];

  return (
    <div className="bg-[#f8f7f3] py-[80px]">
      <div className="max-w-[1350px] mx-auto px-5 flex w-full gap-[30px]">
        <div className="h-[300px] w-1/3">
          <h1 className="text-[30px] font-medium">
            Сертификаты на <br /> продукцию
          </h1>
        </div>
        <div className="h-[350px] w-2/3 flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide, index) => (
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
          <div className="flex justify-between">
            <div className="flex gap-3">
              <button
                className="w-[41px] h-[41px] rounded-full border flex items-center justify-center"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <BiArrowToLeft />
              </button>
              <button
                className="w-[41px] h-[41px] rounded-full border flex items-center justify-center"
                onClick={() => sliderRef.current.slickNext()}
              >
                <BiArrowToRight />
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

export default Sertificat;
