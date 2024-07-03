import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AccordionItems } from "../../data/SlidesData";
const Sertifikat = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f8f7f3] py-[80px]">
      <div className="max-w-[1350px] mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-[30px]">
          <div className="">
            <h2 className="text-[48px] leading-[52px] md:w-[80%] py-[30px]">
              Сертификаты
            </h2>
          </div>
          <div className="">
            {AccordionItems.map((item, index) => (
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
                        ? "bg-[#088269] text-[#fff] rotate-45"
                        : " bg-transparent rotate-0"
                    } rounded-full border flex justify-center duration-300 items-center`}
                  >
                    <AiOutlinePlus size={20} />
                  </button>
                </div>
                <div
                  className={`${
                    activeIndex === index ? "h-[490px]" : "h-0"
                  } overflow-hidden duration-300 `}
                >
                  <div className="flex flex-col gap-2 ">
                    <p className=" text-[10px] text-[#07745E] ">
                      Инструменты медицинские хирургические РУ № РЗН 2015/3121
                      от 12 октября 2015 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа
                      2016 г
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23
                      ноября 2018 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября
                      2018 года
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23
                      ноября 2015 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября
                      2012 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Гигрометры ВИТ Свидетельство об утверждении
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017
                      г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября 2018
                      г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18
                      марта 2020 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Емкости-контейнеры РУ № ФСР 2012/13095 ч.1
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Электроды медицинские РУ № ФСЗ 2012/12612
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Инструменты хирургические РУ № ФСЗ 2012/12251 от 30 мая
                      2012 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Изделие медицинское для инфуз.-трансфуз. РУ № ФСЗ
                      2011/11287 от 27 декабря 2011 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Термометр медицинский РУ № ФСЗ 2011/10572
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Мундштуки картонные и адаптеры РУ № ФСР 2012/13317 от 27
                      августа 2019 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Мундштуки картонные одноразовые РУ № ФСР 2012/13607 от 13
                      февраля 2018 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Анализатор паров этанола Alcotest РУ № РЗН 2016/5237 от 13
                      января 2017 г.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertifikat;
