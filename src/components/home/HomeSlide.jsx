import React, { useRef } from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import Slider from "react-slick";
import img1 from "../../assets/Banner.png";
import img2 from "../../assets/home/slide.png";

const HomeSlide = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[#f8f7f3] py-[20px]">
      <div className="max-w-[1350px] mx-auto px-5 relative">
        <div className="h-full md:h-[368px] w-full flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...settings}>
              <div className="w-[100%] border h-[100%] md:h-[350px] home  grid-cols-1 md:grid-cols-2 justify-between bg-[#e5e4ed]">
                <div className="p-[30px] ">
                  <h2 className=" text-[#202020] text-[32px] lg:text-[45px] w-[100%] 2xl:w-[90%] leading-[37px] lg:leading-[52px] border-t">
                    Заголовок баннера в пару строк
                  </h2>
                  <p className="text-[#7A7687] py-[20px] text-[14px] lg:text-[16px] w-[100%] sm:w-[80%] lg:w-[60%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor{" "}
                  </p>
                  <div className="flex gap-2 sm:pt-[40px]">
                    <button className=" px-4 sm:px-6 py-2 text-[13px]  sm:text-[16px] bg-[#088269] border rounded-full text-[#fff]">
                      Запросить цену
                    </button>
                    <button className=" px-4 sm:px-6 py-2 text-[13px]  sm:text-[16px] border rounded-full border-[#088269] text-[#088269]">
                      В каталог
                    </button>
                  </div>
                </div>
                <div className="w-[100%]  h-[350px] hidden md:flex items-center justify-center">
                  <img src={img1} alt={"title"} className="w-full h-full " />
                </div>
                <div className="w-[100%]  h-[350px]  flex md:hidden items-center justify-center">
                  <img src={img2} alt={"title"} className="w-full h-full" />
                </div>
              </div>
              <div className="w-[100%] border h-[100%] md:h-[350px] home  grid-cols-1 md:grid-cols-2 justify-between bg-[#e5e4ed]">
                <div className="p-[30px] ">
                  <h2 className=" text-[#202020] text-[32px] lg:text-[45px] w-[100%] 2xl:w-[90%] leading-[37px] lg:leading-[52px] border-t">
                    Заголовок баннера в пару строк
                  </h2>
                  <p className="text-[#7A7687] py-[20px] text-[14px] lg:text-[16px] w-[100%] sm:w-[80%] lg:w-[60%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor{" "}
                  </p>
                  <div className="flex gap-2 sm:pt-[40px]">
                    <button className=" px-4 sm:px-6 py-2 text-[13px]  sm:text-[16px] bg-[#088269] border rounded-full text-[#fff]">
                      Запросить цену
                    </button>
                    <button className=" px-4 sm:px-6 py-2 text-[13px]  sm:text-[16px] border rounded-full border-[#088269] text-[#088269]">
                      В каталог
                    </button>
                  </div>
                </div>
                <div className="w-[100%]  h-[350px] hidden md:flex items-center justify-center">
                  <img src={img1} alt={"title"} className="w-full h-full " />
                </div>
                <div className="w-[100%]  h-[350px]  flex md:hidden items-center justify-center">
                  <img src={img2} alt={"title"} className="w-full h-full" />
                </div>
              </div>{" "}
              <div className="w-[100%] border h-[100%] md:h-[350px] home  grid-cols-1 md:grid-cols-2 justify-between bg-[#e5e4ed]">
                <div className="p-[30px] ">
                  <h2 className=" text-[#202020] text-[32px] lg:text-[45px] w-[100%] 2xl:w-[90%] leading-[37px] lg:leading-[52px] border-t">
                    Заголовок баннера в пару строк
                  </h2>
                  <p className="text-[#7A7687] py-[20px] text-[14px] lg:text-[16px] w-[100%] sm:w-[80%] lg:w-[60%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor{" "}
                  </p>
                  <div className="flex gap-2 sm:pt-[40px]">
                    <button className=" px-4 sm:px-6 py-2 text-[13px]  sm:text-[16px] bg-[#088269] border rounded-full text-[#fff]">
                      Запросить цену
                    </button>
                    <button className=" px-4 sm:px-6 py-2 text-[13px]  sm:text-[16px] border rounded-full border-[#088269] text-[#088269]">
                      В каталог
                    </button>
                  </div>
                </div>
                <div className="w-[100%]  h-[350px] hidden md:flex items-center justify-center">
                  <img src={img1} alt={"title"} className="w-full h-full " />
                </div>
                <div className="w-[100%]  h-[350px]  flex md:hidden items-center justify-center">
                  <img src={img2} alt={"title"} className="w-full h-full" />
                </div>
              </div>
            </Slider>
          </div>
          <div className="flex justify-between absolute right-[60px]  bottom-10">
            <div className="flex gap-3">
              <button
                className="w-[41px] h-[41px] rounded-full border bg-[#fff] flex items-center justify-center"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <BiArrowToLeft />
              </button>
              <button
                className="w-[41px] h-[41px] rounded-full border bg-[#fff]  flex items-center justify-center"
                onClick={() => sliderRef.current.slickNext()}
              >
                <BiArrowToRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
