import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import {
  MdOutlineArrowOutward,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { accordionItems } from "../../data/ProductsData";
import { Link } from "react-router-dom";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f8f7f3] py-[20px]">
      <div className="max-w-[1350px] mx-auto  pt-[10px] px-5">
        <div className="flex gap-2 items-center ">
          <Link to={"/"} className="text-[#7A7687] text-[14px]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link className="text-[14px]" to={"/faq"}>
            FAQ
          </Link>
        </div>
        <div className="grid md:grid-cols-2 py-[70px] gap-[30px]">
          <div className="">
            <h2 className="text-[48px] leading-[52px] md:w-[80%] py-[30px]">
              Часто задаваемые вопросы
            </h2>
            <div className="w-full lg:w-[500px] overflow-hidden h-[43px] md:h-[47px] justify-between bg-[#d5d1e1] rounded-full  flex  items-center border ">
              <div className="flex-1 flex  bg-white rounded-full">
                <input
                  type="text"
                  className=" w-[70%] md:w-full p-4 outline-none  text-[14px]  rounded-full"
                  placeholder="Поиск"
                />
              </div>
              <div className="p-4  bg-[#d5d1e1]">
                <FaSearch size={20} />
              </div>
            </div>
          </div>
          <div className="">
            {accordionItems.map((item, index) => (
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
                    activeIndex === index ? "h-[180px]" : "h-0"
                  } overflow-hidden duration-300`}
                >
                  <p className="">{item.content}</p>
                  <button className="flex mt-[20px]  gap-1 items-center">
                    Подробнее <MdOutlineArrowOutward />
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

export default Faq;
