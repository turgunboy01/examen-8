import React from "react";
import { IoCallOutline, IoMenuOutline } from "react-icons/io5";
import { HeaderLogo } from "../../assets/HeaderSvg";
import { Link, NavLink } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="max-w-[1350px] w-full mx-auto px-5">
      <div className="hidden sm:flex justify-between py-3 items-center">
        <div className="flex gap-[30px]">
          <li className="group relative">
            <NavLink to="/about" className="text-[#827e8e] text-[12px]  ">
              О компании
            </NavLink>
            <div className="absolute top-[24px] hidden z-30 group-hover:flex -left-3  flex-col gap-2 w-[180px] p-3 bg-[#fff] ">
              <NavLink to={"/vakansy"} className="text-[12px] cursor-pointer">
                Вакансии
              </NavLink>
              <NavLink to={"/sertifat"} className="text-[12px] cursor-pointer">
                Отзывы Сертификаты
              </NavLink>
              <p className="text-[12px] cursor-pointer">
                Партнерские программы
              </p>
              <p className="text-[12px] cursor-pointer">Оптовые</p>
              <p className="text-[12px] cursor-pointer">продажи Лизинг</p>
            </div>
          </li>
          <li>
            <NavLink
              to={"/dostavka"}
              className="text-[#827e8e] text-[12px]"
              href="#"
            >
              Доставка
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/oplata"}
              className="text-[#827e8e] text-[12px] "
              href="#"
            >
              Оплата
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/garanty"}
              className="text-[#827e8e] text-[12px] "
              href="#"
            >
              Гарантии
            </NavLink>
          </li>
          <li className="group relative">
            <NavLink
              to={"/blog"}
              className="text-[#827e8e] text-[12px] "
              href="#"
            >
              Блог
            </NavLink>
            <div className="absolute top-[24px] -left-3 hidden z-50 group-hover:flex flex-col gap-1 text-[#202020] p-3 bg-[#fff] ">
              <p className="text-[12px] cursor-pointer">Новости</p>
              <NavLink
                to={"/StatyaPage"}
                className="text-[12px] cursor-pointer"
              >
                Статьи
              </NavLink>
              <p className="text-[12px] cursor-pointer">Видео</p>
            </div>
          </li>
        </div>
        <div className="flex gap-[40px]">
          <li>
            <a className="text-[#827e8e] text-[12px] " href="#">
              info@mail.ru
            </a>
          </li>
          <li>
            <a className="text-[#827e8e] text-[12px] " href="#">
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
