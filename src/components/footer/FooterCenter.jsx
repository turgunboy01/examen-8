import React from "react";
import {
  Cards,
  Cards2,
  FooterLogo,
  Telegram,
  WhatsUp,
  Wkantact,
} from "../../assets/FooterSvg";

const FooterCenter = () => {
  return (
    <div className="flex sm:border-t  pt-[20px] flex-col sm:flex-row gap-[15px] md:gap-[30px] lg:gap-[50px] w-full">
      <div className="flex flex-1 gap-[15px] justify-between flex-col sm:flex-row">
        <div className="hidden sm:flex">
          <FooterLogo />
        </div>

        <div className="">
          <h2 className="text-[14px]">Мы в соцсетях</h2>
          <div className=" pt-1 flex gap-3">
            <Wkantact />
            <Telegram />
            <WhatsUp />
          </div>
        </div>
        <div className="">
          <h2 className="text-[12px] lg:text-[14px]">Партнерская программа</h2>
          <h2 className="text-[12px] lg:text-[14px]">Оптовые продажи</h2>
          <h2 className="text-[12px] lg:text-[14px] group relative">
            Реквизиты
            <div className="absolute top-0 rounded-lg border left-[70px] hidden w-[200px] group-hover:flex  text-[#202020]  flex-col gap-2 p-3 bg-[#fff] ">
              <p className="text-[12px] cursor-pointer">ИНН 9717039181</p>
              <p className="text-[12px] cursor-pointer">ОГРН 1167746796986</p>
              <p className="text-[12px] cursor-pointer">КПП 771601001</p>
            </div>
          </h2>
        </div>
        <div className="">
          <h2 className="text-[12px] lg:text-[14px]">
            Политика конфиденциальности
          </h2>
          <h2 className="text-[12px] lg:text-[14px]">Условия соглашения</h2>
          <h2 className="text-[12px] lg:text-[14px]">Карта сайта</h2>
        </div>
      </div>

      <div className="">
        <h2 className="text-[12px] lg:text-[14px] pb-2">Способы оплаты</h2>
        <div className="block sm:hidden md:block">
          <Cards />
        </div>{" "}
        <div className="hidden sm:block md:hidden">
          <Cards2 />
        </div>
      </div>
    </div>
  );
};

export default FooterCenter;
