import React from "react";
import { PenIcon } from "../../assets/ProfileSvg";

const CompanyName = () => {
  return (
    <div className="flex  md:flex-row flex-col ">
      <div className="md:w-[25%] flex justify-between py-4 gap-[30px] ">
        <h3 className="text-[18px] text-[#202020] font-semibold">
          Данные о плательщике
        </h3>
        <button className="px-6 py-2 hidden sm:block md:hidden rounded-full border hover:bg-[#07745e] bg-[#088269] text-[#fff] text-[12px] md:text-[14px] font-semibold">
          Добавить плательщика
        </button>
      </div>
      <div className="md:w-[75%] ">
        <div className="border rounded-lg bg-[#fff] p-[30px]">
          <span className="flex justify-between items-center">
            <h2 className="text-[18px]  font-semibold">Название компании</h2>
            <PenIcon />
          </span>
          <p className="text-[#202020] text-[14px] lg:text-[16px] font-medium pt-2">
            ИНН 9717039181
          </p>
          <div className=" w-[90%] md:w-[80%] mt-[20px] sm:mt-[40px] md:mt-[60px] ">
            <div className="flex justify-between sm:flex-row flex-col sm:gap-10 ">
              <div className="">
                <h2 className="flex text-[#7A7687] text-[12px] sm:text-[14px] lg:text-[16px] items-center gap-3">
                  Адрес доставки
                </h2>
                <p className="text-[#202020] text-[12px] sm:text-[14px] lg:text-[16px]">
                  Россия, г. Москва, ул. Докукина, 8, стр. 2
                </p>
                <h2 className="flex text-[#7A7687] text-[12px] sm:text-[14px] pt-2 lg:text-[16px] items-center gap-3">
                  Сайт
                </h2>
                <p className="text-[#202020] text-[12px] sm:text-[14px] lg:text-[16px]">
                  global-mt.ru
                </p>
                <h2 className="flex text-[#7A7687] pt-2 text-[12px] sm:text-[14px] lg:text-[16px] items-center gap-3">
                  Email
                </h2>
                <p className="text-[#202020]  text-[12px] sm:text-[14px] lg:text-[16px]">
                  info@mail.ru
                </p>
              </div>
              <div className="pt-2  sm:pt-0">
                <h2 className="flex text-[#7A7687] text-[12px] sm:text-[14px] lg:text-[16px] items-center gap-3">
                  Ваша должность
                </h2>
                <p className="text-[#202020]  text-[12px] sm:text-[14px] lg:text-[16px]">
                  Менеджер по закупкам
                </p>

                <div className=" pt-2 ">
                  <h2 className="flex text-[#7A7687] items-center text-[12px] sm:text-[14px] lg:text-[16px] gap-3">
                    Тип организации
                  </h2>
                  <p className="text-[#202020] text-[12px] sm:text-[14px] lg:text-[16px]  ">
                    Юридическое лицо
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end pt-3">
          <button className="sm:hidden md:block px-6 py-2 rounded-full border hover:bg-[#07745e] bg-[#088269] text-[#fff] text-[12px] md:text-[14px] font-semibold">
            Добавить плательщика
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyName;
