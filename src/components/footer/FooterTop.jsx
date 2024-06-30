import React, { useState } from "react";
import { FooterIcons1, FooterLogo } from "../../assets/FooterSvg";
import { FiMinus, FiPlus } from "react-icons/fi";

const FooterTop = () => {
  const [accodion, setAccodion] = useState("0");
  return (
    <div className=" pb-[30px]">
      <div className="flex sm:hidden pb-4">
        <FooterLogo />
      </div>
      <div className="flex justify-between flex-col sm:flex-row  gap-[30px]">
        <div className="">
          <h2
            onClick={() => setAccodion("1")}
            className="text-[12px] md:text-[14px] py-[10px] flex items-center justify-between"
          >
            Покупателям{" "}
            <span className="block sm:hidden">
              {accodion == "1" ? <FiMinus /> : <FiPlus />}
            </span>
          </h2>
          <hr />
          <div className="hidden sm:flex gap-[30px] lg:gap-[40px] pt-[10px]">
            <div className="">
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Сертификаты
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Вакансии
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Гарантии
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Акции
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Доставка
                </a>
              </li>
            </div>
            <div className="">
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Оплата
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Лизинг
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Блог
                </a>
              </li>
            </div>
          </div>
          {accodion == "1" && (
            <div className="flex sm:hidden gap-[30px] lg:gap-[40px] pt-[10px]">
              <div className="">
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    О компании
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Сертификаты
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Вакансии
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Гарантии
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Акции
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Доставка
                  </a>
                </li>
              </div>
              <div className="">
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Лизинг
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Отзывы
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Блог
                  </a>
                </li>
              </div>
            </div>
          )}
        </div>
        <div className="">
          <h2
            onClick={() => setAccodion("2")}
            className="text-[12px] md:text-[14px] py-[10px] flex items-center justify-between"
          >
            Каталог{" "}
            <span className="block sm:hidden">
              {accodion == "2" ? <FiMinus /> : <FiPlus />}
            </span>
          </h2>
          <hr />
          <div className=" hidden sm:flex  gap-[30px] lg:gap-[40px] pt-[10px]">
            <div className="">
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Реанимация
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Хирургия
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Офтальмология
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Лабораторная диагностика
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Акушерство и Гинекология
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Гистология
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Косметология
                </a>
              </li>
              <span className="block md:hidden">
                {" "}
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Орториноларингология
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Рентгенология и томография
                  </a>
                </li>
              </span>
            </div>

            <div className="flex flex-col">
              <span className="hidden md:block">
                {" "}
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Орториноларингология
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Рентгенология и томография
                  </a>
                </li>
              </span>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Стрерилизация
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Физиотерапия и реабилитация
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Функциональная диагностика
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Эндоскопия
                </a>
              </li>
              <div className="block md:hidden">
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Новинки
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Распродажи
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Кабинеты под ключ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Скачать каталог
                  </a>
                </li>
              </div>
            </div>
            <div className="hidden md:block">
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Новинки
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Распродажи
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Кабинеты под ключ
                </a>
              </li>
              <li>
                <a href="#" className="text-[12px] md:text-[14px]">
                  Скачать каталог
                </a>
              </li>
            </div>
          </div>
          {accodion == "2" && (
            <div className="flex sm:hidden  gap-[30px] lg:gap-[40px] pt-[10px]">
              <div className="">
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Реанимация
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Хирургия
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Офтальмология
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Лабораторная диагностика
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Акушерство и Гинекология
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Гистология
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Косметология
                  </a>
                </li>
                <span className="block md:hidden">
                  {" "}
                  <li>
                    <a href="#" className="text-[12px] md:text-[14px]">
                      Орториноларингология
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[12px] md:text-[14px]">
                      Рентгенология и томография
                    </a>
                  </li>
                </span>
              </div>

              <div className="flex flex-col">
                <span className="hidden md:block">
                  {" "}
                  <li>
                    <a href="#" className="text-[12px] md:text-[14px]">
                      Орториноларингология
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[12px] md:text-[14px]">
                      Рентгенология и томография
                    </a>
                  </li>
                </span>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Стрерилизация
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Физиотерапия и реабилитация
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Функциональная диагностика
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Эндоскопия
                  </a>
                </li>
                <div className="block md:hidden">
                  <li>
                    <a href="#" className="text-[12px] md:text-[14px]">
                      Новинки
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[12px] md:text-[14px]">
                      Распродажи
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[12px] md:text-[14px]">
                      Кабинеты под ключ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[12px] md:text-[14px]">
                      Скачать каталог
                    </a>
                  </li>
                </div>
              </div>
              <div className="hidden md:block">
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Новинки
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Распродажи
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Кабинеты под ключ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    Скачать каталог
                  </a>
                </li>
              </div>
            </div>
          )}
        </div>
        <div className="">
          <h2
            onClick={() => setAccodion("3")}
            className="text-[12px] md:text-[14px] py-[10px] flex items-center justify-between"
          >
            Контакты
            <span className="block sm:hidden">
              {accodion == "3" ? <FiMinus /> : <FiPlus />}
            </span>
          </h2>
          <hr />
          <div className="hidden sm:flex gap-[50px] pt-[10px]">
            <div className="">
              <li className="pb-2">
                <h2 className="text-[12px] md:text-[14px] font-semibold">
                  Адрес:
                </h2>
                <a href="#" className="text-[12px] md:text-[14px]">
                  г. Москва, ул. Московская, д. 35
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[12px] md:text-[14px] flex items-center gap-2 py-2 font-semibold"
                >
                  Карта проезда <FooterIcons1 />
                </a>
              </li>
              <li className=" py-2">
                <a href="#" className="text-[12px] md:text-[14px]">
                  График работы: <br /> Пн-Пт с 09:00-19:00, <br /> Сб-Вс -
                  выходной
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-[12px] md:text-[14px]">
                  +7 000-000-00-00 <br /> +7 495-000-00-00 <br /> 8
                  800-000-00-00 <br /> info@mail.ru
                </a>
              </li>
            </div>
          </div>
          {accodion == "3" && (
            <div className="flex sm:hidden gap-[50px] pt-[10px]">
              <div className="">
                <li className="pb-2">
                  <h2 className="text-[12px] md:text-[14px] font-semibold">
                    Адрес:
                  </h2>
                  <a href="#" className="text-[12px] md:text-[14px]">
                    г. Москва, ул. Московская, д. 35
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[12px] md:text-[14px] flex items-center gap-2 py-2 font-semibold"
                  >
                    Карта проезда <FooterIcons1 />
                  </a>
                </li>
                <li className=" py-2">
                  <a href="#" className="text-[12px] md:text-[14px]">
                    График работы: <br /> Пн-Пт с 09:00-19:00, <br /> Сб-Вс -
                    выходной
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-[12px] md:text-[14px]">
                    +7 000-000-00-00 <br /> +7 495-000-00-00 <br /> 8
                    800-000-00-00 <br /> info@mail.ru
                  </a>
                </li>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
