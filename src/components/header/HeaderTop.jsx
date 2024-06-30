import React from "react";
import { IoCallOutline, IoMenuOutline } from "react-icons/io5";
import { HeaderLogo } from "../../assets/HeaderSvg";

const HeaderTop = () => {
  return (
    <div className="max-w-[1350px] w-full mx-auto px-5">
      <div className="hidden sm:flex justify-between py-3 items-center">
        <div className="flex gap-[30px]">
          <li>
            <a
              href="#"
              className="text-[#827e8e] text-[10px] md:text-[13px] lg:text-[16px]"
            >
              О компании
            </a>
          </li>
          <li>
            <a
              className="text-[#827e8e] text-[10px] md:text-[13px] lg:text-[16px]"
              href="#"
            >
              Доставка
            </a>
          </li>
          <li>
            <a
              className="text-[#827e8e] text-[10px] md:text-[13px] lg:text-[16px]"
              href="#"
            >
              Оплата
            </a>
          </li>
          <li>
            <a
              className="text-[#827e8e] text-[10px] md:text-[13px] lg:text-[16px]"
              href="#"
            >
              Гарантии
            </a>
          </li>
          <li>
            <a
              className="text-[#827e8e] text-[10px] md:text-[13px] lg:text-[16px]"
              href="#"
            >
              Блог
            </a>
          </li>
        </div>
        <div className="flex gap-[40px]">
          <li>
            <a
              className="text-[#827e8e] text-[10px] md:text-[13px] lg:text-[16px]"
              href="#"
            >
              info@mail.ru
            </a>
          </li>
          <li>
            <a
              className="text-[#827e8e] text-[10px] md:text-[13px] lg:text-[16px]"
              href="#"
            >
              г. Москва, ул. Московская, д. 35
            </a>
          </li>
        </div>
      </div>
      <div className="flex sm:hidden justify-between py-[10px]">
        <div className="">
          <HeaderLogo />
        </div>
        <div className="flex gap-5">
          <button>
            <IoCallOutline size={24} />
          </button>
          <button>
            <IoMenuOutline size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
