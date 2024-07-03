import React from "react";
import { EmailIcons } from "../../assets/FooterSvg";

const FooterEmail = () => {
  return (
    <div className="bg-[#e5e4ed]">
      <div className="max-w-[1350px] mx-auto px-5 grid grid-cols-2 gap-10">
        <EmailIcons />
        <div className="py-[30px]">
          <h2 className="text-[30px] font-medium leading-[36px]">
            Подпишитесь и будьте в курсе!
          </h2>
          <p className="text-[16px] pt-[15px] pb-[25px] text-[#7A7687]">
            Акции, скидки, распродажи ждут!
          </p>
          <div className=" bg-[#fff] w-full flex justify-between rounded-full">
            <input
              type="text"
              placeholder="Введите email"
              className="px-4 py-3 border-none w-full rounded-full outline-none"
            />
            <button className="px-5 py-2 rounded-full bg-[#088269] text-white ">
              Подписаться
            </button>
          </div>
          <span className="flex gap-3 pt-[15px]">
            <input type="checkbox" />
            <p> Я даю согласие на обработку своих персональных данных.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterEmail;
