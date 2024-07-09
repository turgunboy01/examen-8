import React, { useState } from "react";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import img1 from "../../assets/blog/blog.png";
import img2 from "../../assets/blog/blog2.png";
import img3 from "../../assets/blog/blog3.png";
import img4 from "../../assets/blog/blog4.png";
import { Link } from "react-router-dom";
import { Settings } from "../../assets/SvgIcons";
import { RiArrowRightSLine } from "react-icons/ri";
const BlogCom = () => {
  const [catalog, setCatalog] = useState(false);

  return (
    <div className="bg-[#f8f7f3] py-[30px]">
      <div className="max-w-[1350px] mx-auto px-5 ">
        <div className="flex gap-2 items-center ">
          <Link to={"/"} className="text-[#7A7687] text-[14px]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link className="text-[14px]" to={"/blog"}>
            Блог
          </Link>
        </div>
        <h2 className="text-[28px] sm:text-[34px] md:text-[48px] pt-[30px]  "> Блог</h2>
        <div className="flex justify-end py-[10px]">
          <div className=" w-full lg:hidden block  sm:w-[300px] relative  ">
            <h2
              onClick={() => setCatalog(!catalog)}
              className="pb-4 flex gap-2 items-center  justify-center  border rounded-lg p-5"
            >
              <span>
                <Settings />
              </span>{" "}
              Направления
            </h2>
            <div
              className={`${
                catalog ? "h-[800px] opacity-100" : "h-0 opacity-0"
              }  rounded-lg absolute bg-[#f8f7f3] duration-300 top-[60px] w-[100%] border mt-[10px]  p-[20px]`}
            >
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Реанимация
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Реанимация
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Хирургия
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Офтальмология
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Лабораторная диагностика
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Акушерство и Гинекология
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Гистология
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Косметология
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Оториноларингология
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Рентгенология и томография
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Стерилизация
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Физиотерапия и реабилитация
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Функциональная диагностика
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Эндоскопия
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Новинки
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Распродажи
                <RiArrowRightSLine />
              </h2>{" "}
              <h2 className="py-3 flex justify-between text-[14px] items-center">
                Кабинеты под ключ
                <RiArrowRightSLine />
              </h2>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" hidden md:block w-[30%] border h-full rounded-lg p-5">
            <h2 className=" pb-4  border-b">Направления</h2>
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Реанимация
              <MdKeyboardArrowRight />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Хирургия
              <MdKeyboardArrowRight />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Офтальмология
              <MdKeyboardArrowRight />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Лабораторная диагностика
              <MdKeyboardArrowRight />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Акушерство и Гинекология
              <MdKeyboardArrowRight />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Гистология
              <MdKeyboardArrowRight />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Косметология
              <MdKeyboardArrowRight />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Оториноларингология
              <MdKeyboardArrowRight />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Рентгенология и томография
              <MdKeyboardArrowRight />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Стерилизация
              <MdKeyboardArrowRight />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Физиотерапия и реабилитация
              <MdKeyboardArrowRight />
            </h2>{" "}
            <h2 className="py-3 flex justify-between text-[14px] items-center">
              Функциональная диагностика
              <MdKeyboardArrowRight />
            </h2>
          </div>
          <div className="md:w-[70%] grid md:grid-cols-1 sm:grid-cols-2 gap-2 ">
            <Link
              to={"/statya"}
              className="border rounded-lg h-full flex flex-col md:flex-row"
            >
              <img src={img1} className="flex-[.4] w-full" alt="" />
              <div className="p-[30px] flex-[.6]">
                <h2 className="text-[18px]">
                  Что такое инфузомат (инфузионный насос)
                </h2>
                <p className="text-[#7A7687] text-[12px]">14.03.2023</p>
                <p className="text-[#7A7687] text-[16px] pt-[20px]">
                  Обеспечение нашей деятельности требует определения и уточнения
                  распределения внутренних резервов и ресурсов. Каждый из нас
                  понимает очевидную вещь.
                </p>
                <button className="px-5 py-3 border-[1px] text-[#088269] mt-[35px]  rounded-full">
                  Подробнее
                </button>
              </div>
            </Link>
            <Link
              to={"/statya"}
              className="border rounded-lg h-full flex flex-col md:flex-row"
            >
              <img src={img2} alt="" className="flex-[.4] w-full" />
              <div className="p-[30px] flex-[.6]">
                <h2 className="text-[18px]">
                  Что такое инфузомат (инфузионный насос)
                </h2>
                <p className="text-[#7A7687] text-[12px]">14.03.2023</p>
                <p className="text-[#7A7687] text-[16px] pt-[20px]">
                  Обеспечение нашей деятельности требует определения и уточнения
                  распределения внутренних резервов и ресурсов. Каждый из нас
                  понимает очевидную вещь.
                </p>
                <button className="px-5 py-3 border-[1px] text-[#088269] mt-[35px]  rounded-full">
                  Подробнее
                </button>
              </div>
            </Link>{" "}
            <Link
              to={"/statya"}
              className="border rounded-lg h-full flex flex-col md:flex-row"
            >
              <img src={img3} alt="" className="flex-[.4] w-full" />
              <div className="p-[30px] flex-[.6]">
                <h2 className="text-[18px]">
                  Что такое инфузомат (инфузионный насос)
                </h2>
                <p className="text-[#7A7687] text-[12px]">14.03.2023</p>
                <p className="text-[#7A7687] text-[16px] pt-[20px]">
                  Обеспечение нашей деятельности требует определения и уточнения
                  распределения внутренних резервов и ресурсов. Каждый из нас
                  понимает очевидную вещь.
                </p>
                <button className="px-5 py-3 border-[1px] text-[#088269] mt-[35px]  rounded-full">
                  Подробнее
                </button>
              </div>
            </Link>{" "}
            <Link
              to={"/statya"}
              className="border rounded-lg h-full flex flex-col md:flex-row"
            >
              <img src={img4} alt="" className="flex-[.4] w-full" />
              <div className="p-[30px] flex-[.6]">
                <h2 className="text-[18px]">
                  Что такое инфузомат (инфузионный насос)
                </h2>
                <p className="text-[#7A7687] text-[12px]">14.03.2023</p>
                <p className="text-[#7A7687] text-[16px] pt-[20px]">
                  Обеспечение нашей деятельности требует определения и уточнения
                  распределения внутренних резервов и ресурсов. Каждый из нас
                  понимает очевидную вещь.
                </p>
                <button className="px-5 py-3 border-[1px] text-[#088269] mt-[35px]  rounded-full">
                  Подробнее
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCom;
