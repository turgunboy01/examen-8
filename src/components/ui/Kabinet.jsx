import React, { useContext, useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { KabinetSlides, SettingsSlide } from "../../data/SlidesData";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { ModalContext } from "../../context/modal/ModalContext";
import Konsultatsiya from "../modal/homeModal/Konsultatsiya";
import ViewModal from "../modal/homeModal/ViewModal";
const Kabinet = () => {
  const sliderRef = useRef(null);
  const { konsultatsiyaModal, setKonsultatsiyaModal, viewModal, setViewModal } =
    useContext(ModalContext);
  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5 py-[20px] ">
        <h2 className=" text-[20px] md:text-[30px] leading-[24px] py-[30px] md:leading-[36px]">
          Комплексное оснащение кабинетов
        </h2>
        {konsultatsiyaModal && <Konsultatsiya />}
        {viewModal && <ViewModal />}
        <div className=" w-full flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...SettingsSlide}>
              {KabinetSlides.map((slide, index) => (
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
                <GoArrowLeft />
              </button>
              <button
                className="w-[41px] h-[41px] rounded-full border flex items-center justify-center"
                onClick={() => sliderRef.current.slickNext()}
              >
                <GoArrowRight />
              </button>
            </div>
            <div className="flex gap-2 sm:flex-row flex-col ">
              <button
                onClick={() => setKonsultatsiyaModal(true)}
                className=" px-4 md:px-6 py-2 text-[12px]  md:text-[16px] border rounded-full border-[#088269] text-[#088269]"
              >
                Бесплатная консультация
              </button>
              <button
                onClick={() => setViewModal(true)}
                className=" px-4 md:px-6 py-2 text-[13px]  md:text-[16px] hover:bg-[#07745E] bg-[#088269] border rounded-full text-[#fff]"
              >
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
