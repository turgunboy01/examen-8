import React, { useContext } from "react";
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
import { NavLink } from "react-router-dom";
import { ModalContext } from "../../context/modal/ModalContext";
import ZakazatTovar from "../modal/homeModal/ZakazatTovar";

const HeaderBottom = () => {
  const { zakazModal, setZakazModal } = useContext(ModalContext);
  return (
    <div>
      <div className="max-w-[1350px] w-full mx-auto px-5">
        {zakazModal && <ZakazatTovar />}
        <div className="hidden sm:flex justify-between items-center py-4">
          <ul className="flex items-center gap-[10px] md:gap-[20px] xl:gap-[30px]">
            <li className="group relative">
              <NavLink
                to="/katalog"
                className="flex items-center text-[10px] group-hover:text-[#088269] pt-1 gap-1 md:text-[12px]"
              >
                <HederCatalog className="w-[10px]" /> Каталог
              </NavLink>
              {/* Uncomment and correct the code if needed */}
              {/* <div className="absolute top-[20px] w-[200px] hidden group-hover:flex -left-3 flex-col gap-2 p-3 bg-[#fff]">
                <NavLink to="/vakansy" className="text-[12px] cursor-pointer">
                  Вакансии
                </NavLink>
                <p className="text-[12px] cursor-pointer">Отзывы Сертификаты</p>
                <p className="text-[12px] cursor-pointer">Партнерские программы</p>
                <p className="text-[12px] cursor-pointer">Оптовые</p>
                <p className="text-[12px] cursor-pointer">Продажи Лизинг</p>
              </div> */}
            </li>
            <li className="group relative">
              <NavLink
                to="/proizvaditel"
                className="text-[10px] group-hover:text-[#088269] md:text-[12px] lg:text-[13px]"
              >
                Производители
              </NavLink>
              <div className="absolute top-[24px] w-[200px] hidden group-hover:flex -left-3 flex-col gap-2 p-5 bg-[#fff]">
                <p className="text-[12px] cursor-pointer">A. KRÜSS Optronic</p>
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
              <NavLink
                to="/podkluch"
                className="text-[10px] hover:text-[#088269] md:text-[12px] lg:text-[13px]"
              >
                Кабинеты под ключ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/uslugi"
                className="text-[10px] hover:text-[#088269] md:text-[12px] lg:text-[13px]"
              >
                Услуги
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aksiya"
                className="text-[10px] hover:text-[#088269] md:text-[12px] lg:text-[13px]"
              >
                Акции
              </NavLink>
            </li>
            <li className="group relative">
              <NavLink
                to="/proizvaditel"
                className="text-[10px] md:text-[12px] group-hover:text-[#088269] lg:text-[13px]"
              >
                Покупателям
              </NavLink>
              <div className="absolute top-[24px] hidden w-[200px] group-hover:flex -left-3 flex-col gap-2 p-3 bg-[#fff]">
                <p className="text-[12px] cursor-pointer">Как сделать заказ</p>
                <p className="text-[12px] cursor-pointer">Возврат</p>
                <p className="text-[12px] cursor-pointer">
                  Прайс-лист (скачать)
                </p>
                <p className="text-[12px] cursor-pointer">
                  Каталоги оборудования PDF
                </p>
                <p className="text-[12px] cursor-pointer">Оформить претензию</p>
                <NavLink to="/faq" className="text-[12px] cursor-pointer">
                  FAQ
                </NavLink>
              </div>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-[10px] hover:text-[#088269] md:text-[12px] lg:text-[13px]"
              >
                Контакты
              </NavLink>
            </li>
          </ul>
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
              <button className="px-5 py-2 border pt-1 hover:border-[#07745E] hover:text-[#07745E] text-[12px] rounded-full">
                +7(495)000-00-00
              </button>
            </div>
            <div className="hidden lg:block">
              <button
                onClick={() => setZakazModal(true)}
                className="px-5 bg-[#088269] text-[12px] hover:bg-[#07745E] text-[#fff] py-2 border rounded-full"
              >
                Заказать звонок
              </button>
            </div>
            <div className="block lg:hidden">
              <button className="bg-[#088269] h-[32px] w-[32px] flex justify-center items-center text-[12px] text-[#fff] p-1.5 border rounded-full">
                <IoCallOutline size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed sm:hidden block bottom-0 bg-[#fff] border-t w-full px-[20px] py-3 z-[999]">
        <ul className="flex justify-between gap-4">
          <li>
            <NavLink
              to="/"
              className="flex flex-col text-[12px] items-center justify-center"
            >
              <MenuIcon1 />
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/katalog"
              className="flex flex-col text-[12px] items-center justify-center"
            >
              <MenuIcon2 />
              Каталог
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="flex flex-col text-[12px] items-center justify-center"
            >
              <MenuIcon3 />
              Корзина
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wishlist"
              className="flex flex-col text-[12px] items-center justify-center"
            >
              <MenuIcon4 />
              Избранное
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className="flex flex-col text-[12px] items-center justify-center"
            >
              <MenuIcon5 />
              Войти
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottom;
