import React from "react";
import {
  HederCatalog,
  HederLocation,
  MenuIcon1,
  MenuIcon2,
  MenuIcon3,
  MenuIcon4,
  MenuIcon5,
} from "../../assets/HeaderSvg";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className=" ">
      <div className="max-w-[1350px] w-full mx-auto px-5">
        <div className="hidden sm:flex justify-between items-center py-4 ">
          <div className="flex items-center gap-[10px] md:gap-[20px] xl:gap-[30px]">
            <li>
              <Link
                to="/katalog"
                className="flex items-center text-[10px] pt-1 gap-1 md:text-[12px]"
              >
                <HederCatalog className="w-[10px]" /> Каталог
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-[10px]  md:text-[12px] lg:text-[13px]"
              >
                Производители
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-[10px] md:text-[12px] lg:text-[13px]"
              >
                Кабинеты под ключ{" "}
              </a>
            </li>
            <li>
              <a href="#" className="text-[10px] md:text-[12px] lg:text-[13px]">
                Услуги
              </a>
            </li>
            <li>
              <a href="#" className="text-[10px] md:text-[12px] lg:text-[13px]">
                Акции
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-[10px] md:text-[12px] lg:text-[13px]"
              >
                Покупателям
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-[10px] md:text-[12px] lg:text-[13px]"
              >
                Контакты
              </a>
            </li>
          </div>
          <div className="flex gap-3 xl:gap-5 items-center">
            <li>
              <a
                href="#"
                className="flex gap-1 text-[10px] md:text-[12px] lg:text-[13px] items-center"
              >
                Москва
                <HederLocation />
              </a>
            </li>
            <div className="hidden lg:block">
              <button className="px-5 py-2 border pt-1 text-[12px] rounded-full">
                +7(495)000-00-00
              </button>
            </div>
            <div className="hidden lg:block">
              <button className="px-5 bg-[#088269] text-[12px] text-[#fff] py-2 border rounded-full">
                Заказать звонок
              </button>
            </div>
            <div className="block lg:hidden">
              <button className=" bg-[#088269] h-[32px]  w-[32px] flex justify-center items-center text-[12px] text-[#fff] p-1.5 border rounded-full">
                <IoCallOutline size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 bg-[#fff] border-t w-full  px-[20px] py-3  z-[999]">
        <ul className="flex justify-between gap-4">
          <li>
            <a
              href="#"
              className="flex flex-col text-[12px] items-center justify-center"
            >
              <MenuIcon1 />
              Главная
            </a>
          </li>
          <li>
            <Link
              to="/katalog"
              className="flex flex-col text-[12px] items-center justify-center"
            >
              <MenuIcon2 />
              Каталог
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col text-[12px] items-center justify-center"
            >
              <MenuIcon3 />
              Корзина
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col text-[12px] items-center justify-center"
            >
              <MenuIcon4 />
              Избранное
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col text-[12px] items-center justify-center"
            >
              <MenuIcon5 />
              Войти
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottom;
