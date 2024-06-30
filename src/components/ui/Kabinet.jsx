import React, { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/home/kabinetImg1.png";
import img2 from "../../assets/home/kabinetImg2.png";
import img3 from "../../assets/home/kabinetImg3.png";

import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
const Kabinet = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const slides = [
    {
      src: img1,
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      src: img2,
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      src: img3,
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
  ];

  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5 py-[20px] ">
        <h2 className=" text-[20px] md:text-[30px] leading-[24px] py-[30px] md:leading-[36px]">
          Комплексное оснащение кабинетов
        </h2>
        <div className=" w-full flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-[580px] border rounded-lg bg-[#f8f7f3]"
                >
                  <div className="w-full h-[100%] bg-[#fff] flex items-center justify-center">
                    <img src={slide.src} alt={slide.title} />
                  </div>
                  <h2 className="text-[#202020] p-4 border-t w-[80%]">
                    {slide.title}
                  </h2>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex md:justify-between justify-center">
            <div className="hidden md:flex gap-3">
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
            <div className="flex gap-2 sm:flex-row flex-col ">
              <button className=" px-4 md:px-6 py-2 text-[12px]  md:text-[16px] border rounded-full border-[#088269] text-[#088269]">
                Бесплатная консультация
              </button>
              <button className=" px-4 md:px-6 py-2 text-[13px]  md:text-[16px] bg-[#088269] border rounded-full text-[#fff]">
                Рассчитать стоимость
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kabinet;
