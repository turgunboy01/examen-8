import React from "react";
import {
  Cards,
  FooterLogo,
  Telegram,
  WhatsUp,
  Wkantact,
} from "../../assets/FooterSvg";

const FooterCenter = () => {
  return (
    <div className="flex sm:border-t  pt-[20px] flex-col sm:flex-row gap-[30px] lg:gap-[50px] w-full">
      <div className="flex flex-1 gap-[20px] justify-between flex-col sm:flex-row">
        <div className="hidden sm:flex">
          <FooterLogo />
        </div>

        <div className="">
          <h2>Мы в соцсетях</h2>
          <div className=" pt-1 flex gap-3">
            <Wkantact />
            <Telegram />
            <WhatsUp />
          </div>
        </div>
        <div className="">
          <h2 className="text-[12px] lg:text-[14px]">Партнерская программа</h2>
          <h2 className="text-[12px] lg:text-[14px]">Оптовые продажи</h2>
          <h2 className="text-[12px] lg:text-[14px]">Реквизиты</h2>
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
        <Cards />
      </div>
    </div>
  );
};

export default FooterCenter;
