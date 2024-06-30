import React from "react";
import {
  CardIcon1,
  CardIcon2,
  CardIcon3,
  CardIcon4,
} from "../../assets/HomeSvg";

const HomeCards = () => {
  return (
    <div className="bg-[#f8f7f3] py-[80px]">
      <div className="max-w-[1350px] mx-auto px-5">
        <h2 className="text-[30px] text-[#202020] pb-[30px]">
          Почему выбирают нас?
        </h2>
        <div className=" flex flex-wrap gap-2 ">
          <div className="w-[320px] h-[320px] border rounded-lg flex-col gap-2  flex justify-center items-center">
            <CardIcon1 />
            <h2 className="text-[#202020]">Быстрая доставка</h2>
          </div>
          <div className="w-[320px] h-[320px] rounded-lg border flex-col flex gap-2 justify-center items-center">
            <CardIcon2 />
            <h2 className="text-[#202020]">Весь товар сертифицирован</h2>
          </div>
          <div className="w-[320px] h-[320px] rounded-lg border flex-col flex gap-2 justify-center items-center">
            <CardIcon3 />
            <h2 className="text-[#202020]">Гибкая система скидок</h2>
          </div>
          <div className="w-[320px] h-[320px] rounded-lg border flex flex-col  gap-2 justify-center items-center">
            <CardIcon4 />
            <h2 className="text-[#202020]">Лет на рынке</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
