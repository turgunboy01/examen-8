import React, { useState } from "react";

import Product from "../ui/Product";
import {
  // MdOutlineKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { FilterSvg1, FilterSvg2 } from "../../assets/HomeSvg";
import Product2 from "../ui/Product2";
import { Products } from "../../data/ProductsData";
import { useSelector } from "react-redux";

const Wishlist = () => {
  // const sravList = useSelector(SelectSrav);
  const [vertical, setVertical] = useState(false);
  const likeList = useSelector((state) => state.like.data);
  console.log(likeList);
  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5 py-[30px] ">
        <h2 className="text-[48px] leading-[52px] py-[20px]">Избранное</h2>
        <div
          className="
        flex flex-col md:flex-row gap-5"
        >
          <div className="md:w-[30%] flex flex-row md:flex-col gap-4  p-5">
            <h2 className=" py-1  rounded-lg text-[16px]">Категории</h2>
            <h2 className="py-1 flex justify-between text-[#20202078] text-[16px] items-center">
              Группы товаров
            </h2>{" "}
            <h2 className="py-1 flex text-[#20202078] justify-between text-[16px] items-center">
              Мониторы
            </h2>{" "}
          </div>
          <div className="w-full md:w-[70%]">
            <div className="border px-4 py-2 flex rounded-lg">
              <div className="w-[100%] flex justify-between">
                <h2 className=" flex  items-center gap-2">
                  По популярности <MdKeyboardArrowDown />
                </h2>
                <div className="flex items-center gap-1">
                  <div className="" onClick={() => setVertical(true)}>
                    <FilterSvg1 color={vertical ? "#088269" : "#7a7687"} />
                  </div>
                  <div className="" onClick={() => setVertical(false)}>
                    <FilterSvg2 color={vertical ? "#7a7687" : "#088269"} />
                  </div>
                </div>{" "}
              </div>
            </div>
            <div
              className={`grid ${
                vertical ? "grid-cols-1" : " grid-cols-2 lg:grid-cols-3"
              } gap-4 pt-3`}
            >
              {likeList.map((slide, index) =>
                vertical ? (
                  <>
                    <Product2 slide={slide} key={index} />
                  </>
                ) : (
                  <>
                    <Product slide={slide} key={index} />
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
