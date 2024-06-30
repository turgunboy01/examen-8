import React from "react";
import { FaSearch } from "react-icons/fa";
import {
  HeaderIcon1,
  HeaderIcon2,
  HeaderIcon3,
  HeaderIcon4,
  HeaderLogo,
} from "../../assets/HeaderSvg";

const HeaderCenter = () => {
  return (
    <div className="max-w-[1350px] w-full mx-auto px-5">
      <div className="py-[20px]  flex justify-between gap-4 ">
        <div className="flex gap-[30px] w-full md:gap-[50px]">
          <div className="hidden sm:block">
            <HeaderLogo />
          </div>
          <div className="w-full lg:w-[500px] overflow-hidden h-[43px] md:h-[47px] justify-between bg-[#d5d1e1] rounded-full  flex  items-center border ">
            <div className="flex-1 flex  bg-white rounded-full">
              <select
                className=" px-3 lg:px-6 py-3.5 rounded-full text-[12px] md:text-[16px]"
                name=""
                id=""
              >
                <option value="" className="text-[12px]">
                  Все категории
                </option>
              </select>
              <input
                type="text"
                className=" w-[70%] md:w-full pl-4 outline-none  text-[14px]  rounded-full"
                placeholder="Поиск"
              />
            </div>
            <div className="p-4  bg-[#d5d1e1]">
              <FaSearch size={20} />
            </div>
            <div className="p"></div>
          </div>
          <div className="hidden xl:block">
            <p className="text-[#8a8694] text-[14px] font-medium">
              Пн-Пт с 09:00-19:00
            </p>
            <p className="text-[#8a8694] text-[14px] font-medium">
              {" "}
              Сб-Вс - выходной
            </p>
          </div>
        </div>
        <div className="hidden sm:flex gap-3 lg:gap-6 items-center">
          <span className="flex flex-col gap-1 items-center">
            <HeaderIcon1 />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">Войти</p>
          </span>{" "}
          <span className="flex flex-col gap-1 items-center">
            <HeaderIcon2 />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">
              Избранное
            </p>
          </span>{" "}
          <span className="flex flex-col gap-1 items-center">
            <HeaderIcon3 />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">
              Сравнить
            </p>
          </span>{" "}
          <span className="flex flex-col gap-1 items-center">
            <HeaderIcon4 />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">
              Корзина
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;
