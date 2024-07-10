import React from "react";
import Product from "../ui/Product";
import { useSelector } from "react-redux";
import { SelectSrav } from "../../redux/SravSlice";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Sravnenie = () => {
  const sravList = useSelector(SelectSrav);
  console.log(sravList);

  return (
    <div className="bg-[#f8f7f3] py-[20px]">
      <div className="max-w-[1350px] mx-auto px-5 py-[10px] ">
        <div className="flex gap-2 items-center ">
          <Link to={"/"} className="text-[#7A7687] text-[14px]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight />
          <Link className="text-[14px]" to={"/sravnenie"}>
            Каталог
          </Link>
        </div>
        <div className="w-full flex flex-col pt-[80px] pb-3 md:flex-row  justify-between  md:gap-[50px] ">
          <h2 className="text-[20px] sm:text-[30px] md:text-[48px] leading-[52px] py-[0px]">
            Сравнение товаров
          </h2>
          {sravList.length == 0 && (
            <div className="w-full flex md:justify-center">
              <div className="">
                <h2 className="text-[18px] sm:text-[20px] md:text-[32px] md:leading-[36px]">
                  Не добавлено товаров к сравнению
                </h2>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] pt-[10px] md:pt-[20px]  pb-[10px] w-[80%] md:w-[50%]  text-[#7A7687]">
                  Вы можете перейти на главную страницу или воспользоваться
                  каталогом товаров
                </p>
                <span className="flex gap-2">
                  <Link
                    to={"/"}
                    className="px-5 py-2 bg-[#fff] border border-[#088269] text-[#088269] font-semibold text-[14px] rounded-full"
                  >
                    На главную
                  </Link>
                  <Link
                    to={"/katalog"}
                    className="px-5 py-2 bg-[#088269] text-[#fff] font-semibold text-[14px] rounded-full"
                  >
                    В каталог
                  </Link>
                </span>
              </div>
            </div>
          )}
        </div>
        {sravList.length > 0 && (
          <div
            className="
      flex flex-col md:flex-row gap-5"
          >
            <div className="md:w-[30%] flex flex-row md:flex-col gap-4  py-5">
              <h2 className=" py-1  rounded-lg text-[12px]  sm:text-[14px] md:text-[16px]">
                Анализаторы мочи (3)
              </h2>
              <h2 className="py-1 flex justify-between text-[#20202078] text-[12px] sm:text-[14px] md:text-[16px] items-center">
                Маммографы
              </h2>{" "}
              <h2 className="py-1 flex text-[#20202078] justify-between text-[12px] sm:text-[14px] md:text-[16px] items-center">
                Флюорографы
              </h2>{" "}
            </div>
            <div className="md:w-[70%] h-[800px] py-[30px] ">
              <div className={`grid  grid-cols-2  md:grid-cols-3 gap-4 pt-3`}>
                {sravList.map((slide, index) => (
                  <div>
                    <Product slide={slide} key={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sravnenie;
