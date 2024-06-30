import React, { useRef } from "react";
import img1 from "../../assets/opit1.png";
import img2 from "../../assets/opit2.png";
import img3 from "../../assets/opit3.png";

import Slider from "react-slick";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Opit = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      src: img1,
      src1: img2,
      src2: img3,
      desc: "Основатель компании",
      title: "Константин Константинопольский ",
    },
    {
      src: img1,
      src1: img2,
      src2: img3,
      title: "Оборудование для анастезиологии",
      desc: "Основатель компании",
    },
    {
      src: img1,
      src1: img2,
      src2: img3,
      title: "Оборудование для анастезиологии",
      desc: "Основатель компании",
    },
  ];
  return (
    <div className="bg-[#f8f7f3] py-[80px]">
      <div className="max-w-[1350px] mx-auto px-5 flex w-full justify-between gap-[30px]">
        <div className="h-[300px] w-1/2">
          <h1 className="text-[30px] font-medium">
            Популярные <br /> категории
          </h1>
        </div>
        <div className=" w-1/2  gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className="   bg-[#f8f7f3]">
                  <div className="flex gap-2">
                    <div className="border">
                      <div className="w-full   bg-[#fff] flex items-center justify-center">
                        <img src={slide.src} alt={slide.title} />
                      </div>
                      <h2 className="text-[#202020] px-4 pt-3 border-t w-[30%]">
                        {slide.title}
                      </h2>
                      <p className="px-4  text-[15px] text-[grey] w-[80%]">
                        {slide.desc}
                      </p>
                    </div>{" "}
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <div className="w-full  bg-[#fff] flex items-center justify-center">
                          <img src={slide.src1} alt={slide.title} />
                        </div>
                      </div>{" "}
                      <div className="">
                        <div className="w-full  bg-[#fff] flex items-center justify-center">
                          <img src={slide.src2} alt={slide.title} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex pt-[20px] justify-between">
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

export default Opit;
