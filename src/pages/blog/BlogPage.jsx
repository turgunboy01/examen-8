import React from "react";
import { BsArrowBarRight, BsArrowRight } from "react-icons/bs";
import img1 from "../../assets/blog.png";
import img2 from "../../assets/blog2.png";
import img3 from "../../assets/blog3.png";
import img4 from "../../assets/blog4.png";
const BlogPage = () => {
  return (
    <div className="bg-[] py-[70px]">
      <div className="max-w-[1350px] mx-auto px-5 flex gap-3">
        <div className="w-[30%] border h-full rounded-lg p-5">
          <h2 className=" pb-4  border-b">Направления</h2>
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Реанимация
            <BsArrowBarRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Хирургия
            <BsArrowBarRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Офтальмология
            <BsArrowBarRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Лабораторная диагностика
            <BsArrowBarRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Акушерство и Гинекология
            <BsArrowBarRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Гистология
            <BsArrowBarRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Косметология
            <BsArrowBarRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Оториноларингология
            <BsArrowBarRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Рентгенология и томография
            <BsArrowBarRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Стерилизация
            <BsArrowBarRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Физиотерапия и реабилитация
            <BsArrowBarRight />
          </h2>{" "}
          <h2 className="py-3 flex justify-between text-[14px] items-center">
            Функциональная диагностика
            <BsArrowBarRight />
          </h2>
        </div>
        <div className="w-[70%] flex flex-col gap-2 ">
          <div className="border rounded-lg h-[full] flex">
            <img src={img1} alt="" />
            <div className="p-[30px]">
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
          </div>
          <div className="border rounded-lg h-[full] flex">
            <img src={img2} alt="" />
            <div className="p-[30px]">
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
          </div>{" "}
          <div className="border rounded-lg h-[full] flex">
            <img src={img3} alt="" />
            <div className="p-[30px]">
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
          </div>{" "}
          <div className="border rounded-lg h-[full] flex">
            <img src={img4} alt="" />
            <div className="p-[30px]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
