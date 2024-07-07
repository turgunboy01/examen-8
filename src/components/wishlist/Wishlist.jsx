import React, { useEffect, useState } from "react";

import Product from "../ui/Product";

import { FilterSvg1, FilterSvg2 } from "../../assets/HomeSvg";
import Product2 from "../ui/Product2";
import { useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { SelectWishList } from "../../redux/WishlistSlice";

const Wishlist = () => {
  const [vertical, setVertical] = useState(false);
  const likeList = useSelector(SelectWishList);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("По популярности");
  const [sortedProducts, setSortedProducts] = useState(likeList);
  console.log(likeList);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    "По популярности",
    "По цене",
    "По наименованию",
    "По новинкам",
    "По хитам продаж",
  ];

  useEffect(() => {
    let sortedArray = [...likeList];
    switch (selectedOption) {
      case "По цене":
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case "По наименованию":
        sortedArray.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "По новинкам":
        sortedArray.sort(
          (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
        );
        break;
      case "По хитам продаж":
        sortedArray.sort((a, b) => b.sales - a.sales);
        break;
      default:
        sortedArray = likeList;
        break;
    }
    setSortedProducts(sortedArray);
  }, [selectedOption]);
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
            <div className="border px-4 py-2 flex justify-between w-full rounded-lg">
              <div className="w-[100%] flex justify-between">
                <div className="group relative">
                  <div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 justify-between  rounded-md shadow-sm px-4 py-2 font-medium text-gray-700  bg-transparent focus:outline-none"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                      onClick={toggleDropdown}
                    >
                      {selectedOption}
                      <IoIosArrowDown />
                    </button>
                  </div>
                  {isOpen && (
                    <div
                      className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="py-1" role="none">
                        {options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className={`${
                              option === selectedOption ? "bg-gray-100" : ""
                            } text-gray-700 block w-full text-left px-4 py-2 text-sm`}
                            role="menuitem"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
              {sortedProducts.map((slide, index) =>
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
