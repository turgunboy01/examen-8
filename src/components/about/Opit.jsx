import React, { useRef } from "react";
import img1 from "../../assets/opit/opit1.png";
import img2 from "../../assets/opit/opit2.png";
import img3 from "../../assets/opit/opit3.png";

import Slider from "react-slick";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Opit = () => {
  const sliderRef = useRef(null);

  const SettingsSlide = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
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
      src: img2,
      src1: img3,
      src2: img1,
      title: "Оборудование для анастезиологии",
      desc: "Основатель компании",
    },
    {
      src: img3,
      src1: img1,
      src2: img2,
      title: "Оборудование для анастезиологии",
      desc: "Основатель компании",
    },
  ];
  return (
    <div className="bg-[#f8f7f3] py-[80px]">
      <div className="max-w-[1350px] mx-auto px-5 flex w-full md:flex-row flex-col justify-between  gap-[30px]">
        <div className=" md:w-1/2 w-full">
          <h1 className="text-[30px] leading-[36px] font-medium">
            Опытные сотрудники из производственных компаний
          </h1>
          <p className="text-[16px] pt-[20px]">
            Наши сотрудники имеют огромный опыт работы в сложных условиях,
            в том числе в разгар пандемии COVID–19. В этот период мы осуществили
            поставки медицинских аппаратов в новейшие клиники Минобороны
            в различных регионах страны.
          </p>
        </div>
        <div className=" md:w-1/2 w-full  gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...SettingsSlide}>
              {slides.map((slide, index) => (
                <div key={index} className="   bg-[#f8f7f3]">
                  <div className="flex gap-2">
                    <div className="border w-full sm:w-[60%] rounded-lg">
                      <div className="w-full bg-[#fff] flex items-center justify-center">
                        <img
                          src={slide.src}
                          className="h-[250px] w-full"
                          alt={slide.title}
                        />
                      </div>
                      <h2 className="text-[#202020] px-4 pt-3 text-[16px] border-t w-[100%] lg:w-[30%]">
                        {slide.title}
                      </h2>
                      <p className="px-4  text-[14px] text-[grey] pb-2 w-[80%]">
                        {slide.desc}
                      </p>
                    </div>{" "}
                    <div className="hidden sm:flex flex-col w-[40%] gap-2">
                      <div className="">
                        <div className="w-full  bg-[#fff] flex items-center justify-center">
                          <img
                            src={slide.src1}
                            className="h-[178px] w-full md:w-[220px]"
                            alt={slide.title}
                          />
                        </div>
                      </div>{" "}
                      <div className="">
                        <div className="w-full  bg-[#fff] flex items-center justify-center">
                          <img
                            src={slide.src2}
                            className="h-[178px] w-full md:w-[220px]"
                            alt={slide.title}
                          />
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

export default Opit;
