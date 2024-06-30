import React from "react";
import { BsArrowBarRight } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import img1 from "../../assets/katalog/katalog1.png";
import img2 from "../../assets/katalog/katalog2.png";
import img3 from "../../assets/katalog/katalog3.png";
import img4 from "../../assets/katalog/katalog4.png";
import img5 from "../../assets/katalog/katalog5.png";
import img6 from "../../assets/katalog/katalog6.png";
import img7 from "../../assets/katalog/katalog7.png";
import img8 from "../../assets/katalog/katalog8.png";
import img9 from "../../assets/katalog/katalog9.png";
import img10 from "../../assets/katalog/katalog10.png";

const KatalogComponent = () => {
  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5 py-[70px]">
        <div className="flex gap-5">
          <div className="w-[30%] border h-full rounded-lg p-5">
            <h2 className=" pb-4  border-b">Направления</h2>
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Реанимация
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Реанимация
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Хирургия
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Офтальмология
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Лабораторная диагностика
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Акушерство и Гинекология
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Гистология
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Косметология
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Оториноларингология
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Рентгенология и томография
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Стерилизация
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Физиотерапия и реабилитация
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Функциональная диагностика
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Эндоскопия
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Новинки
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Распродажи
              <RiArrowRightSLine />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Кабинеты под ключ
              <RiArrowRightSLine />
            </h2>
          </div>
          <div className="w-[70%] grid grid-cols-3 gap-5">
            <div className="flex gap-5 flex-col">
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img1} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img2} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
            </div>
            <div className="flex gap-5 flex-col">
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img3} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img4} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
            </div>
            <div className="border-[1px] h-[100%] overflow-hidden rounded-lg ">
              <div className="  h-[560px] bg-white  flex  items-center flex-col justify-center">
                <img src={img5} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                Дерматологическое оборудование
              </h2>
            </div>
            <div className="border-[1px] h-[100%] overflow-hidden rounded-lg ">
              <div className="  h-[560px] bg-white  flex  items-center flex-col justify-center">
                <img src={img6} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                Дерматологическое оборудование
              </h2>
            </div>
            <div className="flex gap-5 flex-col">
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img1} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img2} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
            </div>
            <div className="flex gap-5 flex-col">
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img3} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
              <div className="border-[1px] overflow-hidden rounded-lg ">
                <div className=" p-[20px] h-[220px] bg-white  flex  items-center flex-col justify-center">
                  <img src={img4} alt="s" />
                </div>
                <h2 className="p-[20px] text-[#202020] text-[14px] lg:text-[16px] xl:text-[18px]">
                  Дерматологическое оборудование
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KatalogComponent;
