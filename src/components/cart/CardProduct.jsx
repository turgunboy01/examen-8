// src/components/CartItem.js
import React from "react";
import { useDispatch } from "react-redux";
// import {  removeItem, updateQuantity } from "../redux/cartSlice"; // path to your slice
import { CgClose } from "react-icons/cg";
import { removeItem, updateQuantity } from "../../redux/CartSlice";
import { CategoryIcons1, CategoryIcons2 } from "../../assets/HomeSvg";

const CartItem = ({ slide }) => {
  const dispatch = useDispatch();
  console.log(slide);
  const increaseQty = (id, currentQuantity) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const decreaseQty = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
    } else {
      dispatch(removeItem(id));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="border rounded-xl relative flex overflow-hidden bg-[#f8f7f3]">
      <div className="sm:w-[40%] h-[270px] bg-[#fff] flex items-center relative justify-center">
        <img
          src={slide.img}
          alt={slide.title}
          className="w-[320px] object-contain h-full"
        />
        <div className="absolute top-3 left-3 w-full flex justify-between">
          <div
            className={`px-2 py-1 text-[12px] font-semibold border border-[#088269] text-[#088269] bg-[#e1efe6] ${
              slide.aksiya === "-30%"
                ? "text-[#855E00] bg-[#ffe095] border-[#AD7B00]"
                : slide.aksiya === "Хит продаж"
                ? "bg-[#e6e6fd] text-[#59599A] border-[#424285]"
                : ""
            } rounded-full`}
          >
            {slide.aksiya}
          </div>
          <div className="flex gap-1 pr-5">
            <CategoryIcons1 />
            <CategoryIcons2 />
          </div>
        </div>
      </div>
      <div className="w-[60%] p-5 grid md:grid-cols-2">
        <div className="">
          <h2 className="w-[80%] text-[16px] lg:text-[18px] font-semibold">
            {slide.title}
          </h2>
          <p className="text-[#7A7687] text-[12px] pt-2 ">
            Артикул: {slide.article}
          </p>
          <p className="text-[#7A7687] text-[12px] pt-1 ">В наличии</p>
        </div>
        <div className="flex justify-between items-start">
          <div className="">
            <p className="lg:text-[18px] text-[16px] font-semibold">
              {slide.price} руб.
            </p>
            <div className="">
              <span className="border mt-[30px] rounded-full w-[90px] py-2 flex justify-center items-center gap-2">
                <button
                  className="p-2"
                  onClick={() => decreaseQty(slide.id, slide.quantity)}
                >
                  -
                </button>
                <p>{slide.quantity}</p>
                <button
                  className="p-2"
                  onClick={() => increaseQty(slide.id, slide.quantity)}
                >
                  +
                </button>
              </span>
            </div>
          </div>
          <div className="flex gap-1 items-start top-5 ">
            <div className=" hidden md:flex gap-1">
              <CategoryIcons1 />
              <CategoryIcons2 />
            </div>
            <button
              className="flex absolute md:relative top-2 sm:top-5 md:top-0 right-[10px] md:right-0"
              onClick={() => handleRemoveItem(slide.id)}
            >
              <CgClose size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
