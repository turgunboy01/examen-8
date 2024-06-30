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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      <div className="max-w-[1350px] mx-auto px-5 flex w-full gap-[30px]">
        <div className="h-[300px] w-1/3">
          <h1 className="text-[30px] font-medium">
            Новости <br /> компании
          </h1>
          {/* <p className="text-[#202020] text-[16px] pt-[10px]">Эксклюзивные поставщики</p> */}
        </div>
        <div className=" w-2/3 flex flex-col gap-[40px]">
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
              Все новости
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
