import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/home/image1.png";
import img2 from "../../assets/home/image2.png";
import img3 from "../../assets/home/image3.png";
import img4 from "../../assets/home/image4.png";
const MarqueePage = () => {
  return (
    <div className="bg-[#e5e4ed] py-[80px]">
      <div className="max-w-[1350px] mx-auto px-5 pb-[20px] flex flex-col gap-[20px] md:flex-row justify-between">
        <h2 className="text-[20px] md:text-[30px] ">Наши клиенты</h2>
        <h2 className="text-[30px] md:text-[48px]">
          БОЛЕЕ <span className="text-[#088269]">5000</span> <br /> УСПЕШНЫХ
          ПРОЕКТОВ
        </h2>
      </div>

      <Marquee direction="300">
        <div className="flex gap-[30px] mx-5 pt-[30px]">
          <div className="w-[320px] h-[280px] bg-[#f8f7f3]">
            <div className="w-full h-[220px] bg-[#fff] flex items-center justify-center">
              <img src={img1} alt="" />
            </div>
            <h2 className="text-[#202020] p-4 border-t">
              НМИЦ онкологии им. Н.Н. Блохина
            </h2>
          </div>
          <div className="w-[320px] h-[280px] bg-[#f8f7f3]">
            <div className="w-full h-[220px] bg-[#fff] flex items-center justify-center">
              <img src={img2} alt="" />
            </div>
            <h2 className="text-[#202020] p-4 border-t">
              НМИЦ онкологии им. Н.Н. Блохина
            </h2>
          </div>
          <div className="w-[320px] h-[280px] bg-[#f8f7f3]">
            <div className="w-full h-[220px] bg-[#fff] flex items-center justify-center">
              <img src={img3} alt="" />
            </div>
            <h2 className="text-[#202020] p-4 border-t">
              НМИЦ онкологии им. Н.Н. Блохина
            </h2>
          </div>
          <div className="w-[320px] h-[280px] bg-[#f8f7f3]">
            <div className="w-full h-[220px] bg-[#fff] flex items-center justify-center">
              <img src={img1} alt="" />
            </div>
            <h2 className="text-[#202020] p-4 border-t">
              НМИЦ онкологии им. Н.Н. Блохина
            </h2>
          </div>

          <div className="w-[320px] h-[280px] bg-[#f8f7f3]">
            <div className="w-full h-[220px] bg-[#fff] flex items-center justify-center">
              <img src={img4} alt="" />
            </div>
            <h2 className="text-[#202020] p-4 border-t">
              НМИЦ онкологии им. Н.Н. Блохина
            </h2>
          </div>
          <div className="w-[320px] h-[280px] bg-[#f8f7f3]">
            <div className="w-full h-[220px] bg-[#fff] flex items-center justify-center">
              <img src={img2} alt="" />
            </div>
            <h2 className="text-[#202020] p-4 border-t">
              НМИЦ онкологии им. Н.Н. Блохина
            </h2>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueePage;
