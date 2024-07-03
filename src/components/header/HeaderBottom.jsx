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
            <li className="group relative">
              <Link
                to="/katalog"
                className="flex items-center text-[10px] group-hover:text-[#088269] pt-1 gap-1 md:text-[12px]"
              >
                <HederCatalog className="w-[10px]" /> Каталог
              </Link>
              {/* <div className="absolute top-[20px] w-[200px] hidden group-hover:flex -left-3  flex-col gap-2 p-3 bg-[#fff] ">
                <Link to={"/vakansy"} className="text-[12px] cursor-pointer ">
                  Вакансии
                </Link>
                <p className="text-[12px] cursor-pointer">Отзывы Сертификаты</p>
                <p className="text-[12px] cursor-pointer">
                  Партнерские программы
                </p>
                <p className="text-[12px] cursor-pointer">Оптовые</p>
                <p className="text-[12px] cursor-pointer">продажи Лизинг</p>
              </div> */}
            </li>
            <li className="group relative">
              <Link
                to={"/proizvaditel"}
                className="text-[10px] group-hover:text-[#088269]  md:text-[12px] lg:text-[13px]"
              >
                Производители
              </Link>
              <div className="absolute top-[24px] w-[200px] hidden group-hover:flex -left-3  flex-col gap-2 p-5 bg-[#fff] ">
                <p className="text-[12px] cursor-pointer"> A. KRÜSS Optronic</p>
                <p className="text-[12px] cursor-pointer">AnD</p>
                <p className="text-[12px] cursor-pointer">ATAGO</p>
                <p className="text-[12px] cursor-pointer">
                  AWARENESS TECHNOLOGY
                </p>
                <p className="text-[12px] cursor-pointer">BEGER</p>
                <p className="text-[12px] cursor-pointer">Berrcom</p>
                <p className="text-[12px] cursor-pointer">BESTMAN</p>
              </div>
            </li>
            <li>
              <Link
                to={"/podkluch"}
                className=" text-[10px] hover:text-[#088269] md:text-[12px] lg:text-[13px]"
              >
                Кабинеты под ключ{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/uslugi"
                className="text-[10px] hover:text-[#088269] md:text-[12px] lg:text-[13px]"
              >
                Услуги
              </Link>
            </li>
            <li>
              <Link
                to="/aksiya"
                className="text-[10px] hover:text-[#088269] md:text-[12px] lg:text-[13px]"
              >
                Акции
              </Link>
            </li>
            <li className="group relative">
              <Link
                to="/proizvaditel"
                className=" text-[10px] md:text-[12px] group-hover:text-[#088269] lg:text-[13px]"
              >
                Покупателям
              </Link>
              <div className="absolute top-[24px] hidden w-[200px] group-hover:flex -left-3  flex-col gap-2 p-3 bg-[#fff] ">
                <p className="text-[12px] cursor-pointer">Как сделать заказ</p>
                <p className="text-[12px] cursor-pointer">Возврат</p>
                <p className="text-[12px] cursor-pointer">
                  Прайс-лист (скачать)
                </p>
                <p className="text-[12px] cursor-pointer">
                  Каталоги оборудования PDF
                </p>
                <p className="text-[12px] cursor-pointer">Оформить претензию</p>
                <p className="text-[12px] cursor-pointer">FAQ</p>
              </div>
            </li>
            <li>
              <Link
                to="/contact"
                className=" text-[10px] hover:text-[#088269] md:text-[12px] lg:text-[13px]"
              >
                Контакты
              </Link>
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
      <div className="fixed  sm:hidden block bottom-0 bg-[#fff] border-t w-full  px-[20px] py-3  z-[999]">
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
