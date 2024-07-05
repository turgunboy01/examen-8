import React from "react";
import Product from "../ui/Product";
import { useSelector } from "react-redux";
import { SelectSrav } from "../../redux/SravSlice";

const Sravnenie = () => {
  const sravList = useSelector(SelectSrav);
  console.log(sravList);

  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5 py-[30px] ">
        <h2 className="text-[48px] leading-[52px] py-[20px]">
          Сравнение товаров
        </h2>
        <div
          className="
      flex flex-col md:flex-row gap-5"
        >
          <div className="md:w-[30%] flex flex-row md:flex-col gap-4  p-5">
            <h2 className=" py-1  rounded-lg text-[16px]">
              Анализаторы мочи (3)
            </h2>
            <h2 className="py-1 flex justify-between text-[#20202078] text-[16px] items-center">
              Маммографы
            </h2>{" "}
            <h2 className="py-1 flex text-[#20202078] justify-between text-[16px] items-center">
              Флюорографы
            </h2>{" "}
          </div>
          <div className="md:w-[70%] h-[800px] p-[30px] overflow-y-scroll">
            <div className={`grid  grid-cols-2  md:grid-cols-3 gap-4 pt-3`}>
              {sravList.map((slide, index) => (
                <div>
                  <Product slide={slide} key={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sravnenie;
