import React from "react";

import { UslugiData } from "../../data/ProductsData";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Uslugi = () => {
  return (
    <div className="bg-[#f8f7f3] py-[40px]">
      <div className="max-w-[1350px] mx-auto px-5">
        <div className="flex gap-2 items-center ">
          <Link to={"/"} className="text-[#7A7687] text-[14px]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link className="text-[14px]" to={"/uslugi"}>
            Услуги
          </Link>
        </div>
        <h1 className="text-[48px] leading-[56px] py-[30px]">Услуги</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          {UslugiData.map((item) => (
            <div className="flex flex-col md:flex-row  rounded-lg bg-[#fff]">
              <div className="p-[20px] w-full md:w-[55%] md:order-first order-last flex flex-col justify-between">
                <div className="">
                  <h2 className="text-[18px] font-medium">{item.name}</h2>
                  <p className="text-[#7A7687] text-[12px] py-2">
                    {item.title}
                  </p>
                  <p className="text-[15px]">{item.desc}</p>
                </div>
                <span>
                  {" "}
                  <button className="text-[#088269] py-2 px-5 m border rounded-full">
                    Заказать
                  </button>
                </span>
              </div>
              <div className="w-full md:w-[45%]">
                <img src={item.img} className="w-full h-full" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uslugi;
