import React, { useState } from "react";
import { IoCallOutline, IoClose, IoMenuOutline } from "react-icons/io5";
import { HeaderLogo, HederLocation } from "../../assets/HeaderSvg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeaderTop = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const handleMenuClick = (type) => {
    navigate(`/${type}`);
    setMenu(false);
  };

  return (
    <>
      <div className="max-w-[1350px] w-full mx-auto px-5">
        <div className="hidden sm:flex justify-between py-3 items-center">
          <div className="flex gap-4 md:gap-[30px]">
            <li className="group relative">
              <NavLink to="/about" className="text-[#827e8e] text-[12px]  ">
                О компании
              </NavLink>
              <div className="absolute top-[24px] hidden z-30 group-hover:flex -left-3  flex-col gap-2 w-[180px] p-3 bg-[#fff] ">
                <NavLink to={"/vakansy"} className="text-[12px] cursor-pointer">
                  Вакансии
                </NavLink>
                <NavLink
                  to={"/sertifat"}
                  className="text-[12px] cursor-pointer"
                >
                  Сертификаты
                </NavLink>
                <NavLink to={"/otziv"} className="text-[12px] cursor-pointer">
                  Отзывы
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
                <p className="text-[12px] cursor-pointer">Статьи</p>
                <p className="text-[12px] cursor-pointer">Видео</p>
              </div>
            </li>
          </div>
          <div className="flex gap-[20px] md:gap-[40px]">
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
        <div className="flex w-full sm:hidden items-center justify-between py-[10px]">
          <div className="">
            <HeaderLogo />
          </div>
          <div className="flex gap-5">
            <button>
              <IoCallOutline size={24} />
            </button>
            <button onClick={() => setMenu(!menu)}>
              {menu ? <IoClose size={24} /> : <IoMenuOutline size={24} />}
            </button>
          </div>
        </div>
      </div>
      {menu && (
        <div className="fixed block sm:hidden   top-[60px]  w-full h-full bg-[#f8f7f3] z-[888] pt-[10px]">
          <div className=" flex justify-between bg-[#E5E4ED] py-[10px] px-5 w-[100%]">
            <span className="flex gap-1 items-center font-semibold">
              <HederLocation />
              <p className="pt-1 text-[#202020]"> Москва</p>
            </span>
            <h3 className="font-semibold text-[#7A7687]">Изменить</h3>
          </div>
          <div className=" flex  px-5 py-2 justify-between">
            <div className="">
              <p className="text-[14px] font-semibold">+7(495)000-00-00</p>
              <p className="text-[12px] font-semibold">info@mail.ru</p>
              <p className="text-[12px] text-[#7A7687]">
                г. Москва, ул. Московская, д. 35
              </p>
            </div>
            <div className="flex  text-[12px] text-[#7A7687] flex-col items-end">
              <p>Пн-Пт с 09:00-19:00 </p>
              <p>Сб-Вс - выходной</p>
            </div>
          </div>
          <div className="py-2 px-5">
            <span
              onClick={() => handleMenuClick("katalog")}
              className="flex justify-between items-center border-t border-b py-3"
            >
              <h2 className="text-[14px] font-medium">Каталог товаров</h2>{" "}
              <MdKeyboardArrowRight />
            </span>{" "}
            <span
              onClick={() => handleMenuClick("/")}
              className="flex justify-between items-center border-b py-3"
            >
              <h2 className="text-[14px] font-medium">Информация</h2>{" "}
              <MdKeyboardArrowRight />
            </span>{" "}
            <span
              onClick={() => handleMenuClick("contact")}
              className="flex justify-between items-center border-b py-3"
            >
              <h2 className="text-[14px] font-medium">Контакты</h2>{" "}
              <MdKeyboardArrowRight />
            </span>{" "}
            <span
              onClick={() => handleMenuClick("about")}
              className="flex justify-between items-center border-b py-3"
            >
              <h2 className="text-[14px] font-medium">О нас</h2>{" "}
              <MdKeyboardArrowRight />
            </span>{" "}
            <span
              onClick={() => handleMenuClick("sravnenie")}
              className="flex justify-between items-center border-b py-3"
            >
              <h2 className="text-[14px] font-medium">Сравнение</h2>{" "}
              <MdKeyboardArrowRight />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderTop;
