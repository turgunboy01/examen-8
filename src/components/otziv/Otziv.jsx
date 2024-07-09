import React from "react";
import { OtzivIcons } from "../../assets/HomeSvg";
import img from "../../assets/otziv.png";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { OtzivSlide } from "../../data/ProductsData";
import { Rating } from "@mui/material";

const Otziv = () => {
  return (
    <div className="bg-[#f8f7f3] py-[25px]">
      <div className="max-w-[1350px] mx-auto px-5">
        <div className="flex gap-2 items-center pb-[25px] ">
          <Link to={"/"} className="text-[#7A7687] text-[14px]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link className="text-[14px]" to={"/otziv"}>
            Отзывы
          </Link>
        </div>
        <h2 className=" text-[30px] md:text-[48px] md:leading-[52px] pb-[20px]">
          Отзывы
        </h2>
        <div className="grid sm:grid-cols-2 gap-5 ">
          {OtzivSlide.map((item) => (
            <div key={item.id} className="bg-[#fff] rounded-lg p-6 border">
              <div className="flex justify-between">
                <div className="flex  items-center gap-3">
                  <img src={img} alt="" />
                  <span>
                    <h2>{item.name}</h2>
                    <p className="text-[12px] text-[#7A7687]">{item.title}</p>
                    <p>
                      <Rating
                        name="read-only"
                        value={4}
                        readOnly
                      />
                    </p>
                  </span>
                </div>
                <p className="text-[12px]">{item.time}</p>
              </div>
              <p className="text-[#7A7687] pt-[10px] text-[12px] sm:text-[14px] md:text-[16px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Otziv;
