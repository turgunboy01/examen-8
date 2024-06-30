import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/home/category1.png";
import img2 from "../../assets/home/category2.png";
import img3 from "../../assets/home/category3.png";
import img4 from "../../assets/home/category4.png";
import img5 from "../../assets/home/category5.png";

import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { CategoryIcons1, CategoryIcons2 } from "../../assets/HomeSvg";
const CategoryTovar = () => {
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
      title: "Анализатор мочи MIND UA- 66",
      artikl: "Артикул: 213134 В наличии",
      price: "300 000 руб.",
    },
    {
      src: img2,
      title: "Анализатор мочи MIND UA- 66",
      artikl: "Артикул: 213134 В наличии",
      price: "300 000 руб.",
    },
    {
      src: img3,
      title: "Анализатор мочи MIND UA- 66",
      artikl: "Артикул: 213134 В наличии",
      price: "300 000 руб.",
    },
    {
      src: img4,
      title: "Анализатор мочи MIND UA- 66",
      artikl: "Артикул: 213134 В наличии",
      price: "300 000 руб.",
    },
    {
      src: img5,
      title: "Анализатор мочи MIND UA- 66",
      artikl: "Артикул: 213134 В наличии",
      price: "300 000 руб.",
    },
  ];
  return (
    <div className="bg-[#f8f7f3] py-[80px]">
      <div className="max-w-[1350px] mx-auto px-5 flex w-full gap-[30px]">
        <div className="h-[300px] w-1/3">
          <h1 className="text-[30px] font-medium">Каталог товаров</h1>
          <p className="text-[#2020207b] text-[16px] pt-[10px]">Хиты продаж </p>
          <p className="text-[#2020207a] text-[16px] pt-[10px]"> Новинки </p>
          <p className="text-[#20202071] text-[16px] pt-[10px]"> Акции</p>
        </div>
        <div className=" w-2/3 flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className=" border rounded-xl h-[520px] bg-[#f8f7f3]"
                >
                  <div className="w-full h-[300px] bg-[#fff] flex items-center relative justify-center">
                    <img src={slide.src} alt={slide.title} />
                    <div className="absolute top-3 left-3 px-2 py-1 text-[13px] border border-[#088269] text-[#088269] bg-[#e1efe6] rounded-full">
                      Новинка
                    </div>
                    <div className="absolute right-3 top-3 flex gap-2">
                      <CategoryIcons1 />
                      <CategoryIcons2 />
                    </div>
                  </div>
                  <div className="p-4 ">
                    <h2 className="text-[#202020] font-semibold border-t w-[70%]">
                      {slide.title}
                    </h2>
                    {/* <h3></h3> */}
                    <p className="text-[#7a7687] text-[12px] w-[40%] pt-[5px]">
                      {slide.artikl}
                    </p>
                    <p className=" font-semibold pt-[15px]">{slide.price}</p>
                    <button className="py-2 border hover:text-[#fff] hover:bg-[#088269] border-[#80808035] w-full mt-[20px] text-[#088269] rounded-full">
                      Добавить в корзину
                    </button>
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

export default CategoryTovar;
