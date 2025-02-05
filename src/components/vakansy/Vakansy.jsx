import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { accordionItems2 } from "../../data/ProductsData";

const Vakansy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f8f7f3] py-[30px]">
      <div className="max-w-[1350px] mx-auto px-5">
        <div className="flex gap-2 items-center ">
          <Link to={"/"} className="text-[#7A7687] text-[14px]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link className="text-[14px]" to={"/vakansy"}>
            Вакансии
          </Link>
        </div>
        <div className="grid md:grid-cols-2 pt-[70px] gap-[30px]">
          <div className="">
            <h2 className="text-[48px] leading-[52px] md:w-[80%] py-[30px]">
              Вакансии
            </h2>
            <p>
              В «Глобал Медикал Трейд» всегда есть место как для новичков,
              так и для состоявшихся экспертов. Тем, кто только начинает строить
              карьеру, мы предлагаем возможность получить ценные знания,
              а опытным специалистам — расширить компетенции.
            </p>
          </div>
          <div className="">
            <h2 className="text-[30px] leading-[36px] py-[30px]">
              Актуальные вакансии
            </h2>
            {accordionItems2.map((item, index) => (
              <div key={index} className="border-t">
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex pt-[15px] items-center pb-[15px] justify-between"
                >
                  <h2 className=" text-[15px] md:text-[18px] font-semibold ">
                    {item.title}
                  </h2>
                  <button
                    className={`w-[40px] h-[40px] ${
                      activeIndex === index
                        ? "bg-[#088269] hover:bg-[#07745E] text-[#fff] rotate-45"
                        : " bg-transparent rotate-0"
                    } rounded-full border flex justify-center duration-300 items-center`}
                  >
                    <AiOutlinePlus size={20} />
                  </button>
                </div>
                <div
                  className={`${
                    activeIndex === index ? "h-[460px]" : "h-0"
                  } overflow-hidden duration-300 `}
                >
                  <p className="text-[#7A7687] pb-2">Обязанности:</p>
                  <div>
                    <p className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />{" "}
                      Работа с входящими/исходящими звонками
                    </p>
                    <p className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />{" "}
                      Работа с договорами составление/заключение{" "}
                    </p>
                    <p className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />{" "}
                      Ведение деловой переписки (эл. почта, переписка в
                      мессенджерах)
                    </p>{" "}
                    <p className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />{" "}
                      Выполнение плановых показателей
                    </p>
                  </div>

                  <h2 className="text-[#7A7687] pb-2 pt-[30px]">Требования:</h2>
                  <div>
                    <p className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />{" "}
                      Опыт работы телефонных продаж
                    </p>
                    <p className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />{" "}
                      Опыт работы в CRM
                    </p>
                    <p className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />{" "}
                      Способность восприятия большого объема информации
                    </p>
                  </div>
                  <h2 className="text-[#7A7687] pb-2 pt-[30px]">
                    График работы:
                  </h2>
                  <div>
                    <p className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />{" "}
                      Оформление с первого рабочего дня
                    </p>
                    <p className="flex items-center gap-2">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />{" "}
                      00:00 - 23:59
                    </p>
                  </div>
                  <button className="flex text-[#fff] rounded-full mt-[20px] hover:bg-[#07745E] bg-[#088269] px-5 py-3  gap-1 items-center">
                    Отправить резюме
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vakansy;
