import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import { AccardionData } from "../../data/SlidesData";

const Accardion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-[80px] bg-[#088269]">
      <div className="mx-auto max-w-[1350px] flex sm:flex-row flex-col gap-5 px-5">
        <div className="sm:w-1/2 w-full ">
          <h3 className="text-[20px] md:text-[30px] pb-[30px] sm:pb-[10px] text-[#fff]">
            Часто задоваемые вопросы
          </h3>
        </div>
        <div className="sm:w-1/2 w-full flex flex-col gap-5">
          {AccardionData.map((item, index) => (
            <div key={index} className="border-t">
              <div
                onClick={() => toggleAccordion(index)}
                className="flex pt-[15px] items-center pb-[15px] justify-between"
              >
                <h2 className=" text-[15px] md:text-[18px] font-semibold text-[#fff]">
                  {item.title}
                </h2>
                <button
                  className={`w-[40px] h-[40px] ${
                    activeIndex === index
                      ? "bg-[#fff] text-[#111] rotate-45"
                      : "text-[#fff] bg-transparent rotate-0"
                  } rounded-full border flex justify-center duration-300 items-center`}
                >
                  <AiOutlinePlus size={20} />
                </button>
              </div>
              <div
                className={`${
                  activeIndex === index ? "h-[150px]" : "h-0"
                } overflow-hidden duration-300`}
              >
                <p className="text-[#fff]">{item.content}</p>
                <button className="flex mt-[20px] text-[#fff] gap-1 items-center">
                  Подробнее <MdOutlineArrowOutward />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accardion;
