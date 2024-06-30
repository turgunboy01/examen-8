import React from "react";
import img1 from "../../assets/podKluch1.png";
import img2 from "../../assets/podKluch2.png";
const PodKluch = () => {
  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5 pt-[60px]">
        <h2 className="text-[48px] leading-[52px] py-5">Кабинеты под ключ</h2>
        <div className="grid grid-cols-2 gap-5 ">
          <div className="border bg-[#fff]">
            <img src={img1} alt="" />
            <h2 className="p-3 px-5">Реанимация</h2>
          </div>
          <div className="bg-[#fff] border rounded-lg">
            <img src={img2} alt="" />
            <h2 className="p-3 px-5">Реанимация</h2>
          </div>{" "}
          <div className="border  rounded-lg bg-[#fff]">
            <img src={img2} alt="" />
            <h2 className="p-3 px-5">Реанимация</h2>
          </div>
          <div className="bg-[#fff] border rounded-lg">
            <img src={img1} alt="" />
            <h2 className="p-3 px-5">Реанимация</h2>
          </div>{" "}
          <div className=" border rounded-lg bg-[#fff]">
            <img src={img1} alt="" />
            <h2 className="p-3 px-5">Реанимация</h2>
          </div>
          <div className="bg-[#fff] border rounded-lg">
            <img src={img2} alt="" />
            <h2 className="p-3 px-5">Реанимация</h2>
          </div>{" "}
          <div className="bg-[#fff] border rounded-lg">
            <img src={img1} alt="" />
            <h2 className="p-3 px-5">Реанимация</h2>
          </div>{" "}
          <div className=" border rounded-lg bg-[#fff]">
            <img src={img2} alt="" />
            <h2 className="p-3 px-5">Реанимация</h2>
          </div>
          <div className="bg-[#fff] border rounded-lg">
            <img src={img2} alt="" />
            <h2 className="p-3 px-5">Реанимация</h2>
          </div>{" "}
          <div className="bg-[#fff] border rounded-lg">
            <img src={img1} alt="" />
            <h2 className="p-3 px-5">Реанимация</h2>
          </div>{" "}
          <div className=" border rounded-lg bg-[#fff]">
            <img src={img1} alt="" />
            <h2 className="p-3 px-5">Реанимация</h2>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default PodKluch;
