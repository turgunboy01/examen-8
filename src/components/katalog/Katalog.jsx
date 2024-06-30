import React from "react";
import { BsArrowBarRight } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";

const KatalogComponent = () => {
  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5 py-[70px]">
        <div className="flex">
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
              <BsArrowBarRight />
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
          <div className="w-[70%]">
            <div className="grid grid-cols-3">
              <div className="">
                <div className=""></div>
              </div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KatalogComponent;
