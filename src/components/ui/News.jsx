import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/news/img1.png";
import img2 from "../../assets/news/img2.png";
import img3 from "../../assets/news/img3.png";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

const News = () => {
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
      desc: "Допускает внедрение поэтапного и развития общества.",
      date: "07.11.2022",
      title: "Название новости",
    },
    {
      src: img2,
      desc: "Допускает внедрение поэтапного и развития общества.",
      date: "07.11.2022",
      title: "Название новости",
    },
    {
      src: img3,
      desc: "Допускает внедрение поэтапного и развития общества.",
      date: "07.11.2022",
      title: "Название новости",
    },
  ];

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
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide, index) => (
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
              Все новости
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
