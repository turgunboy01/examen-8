// src/components/CartItem.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgClose } from "react-icons/cg";
import { descrement, increment, removeItem } from "../../redux/CartSlice";
import { CategoryIcons1, CategoryIcons2 } from "../../assets/HomeSvg";
import { SelectSrav, setTosrav } from "../../redux/SravSlice";
import { setToWishList } from "../../redux/WishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const CartItem = ({ slide }) => {
  const dispatch = useDispatch();
  console.log(slide);

  const increaseQty = (productId) => {
    dispatch(increment(productId));
  };

  const decreaseQty = (productId) => {
    dispatch(descrement(productId));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const sravList = useSelector(SelectSrav);
  const likeList = useSelector((state) => state.like.data);

  const handleSravToggle = (product) => {
    dispatch(setTosrav(product));
  };

  const handleWishListToggle = (product) => {
    dispatch(setToWishList(product));
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
            className={`px-3 py-1 text-[12px] font-semibold border border-[#088269] text-[#088269] bg-[#e1efe6] ${
              slide.aksiya === "-30%"
                ? "text-[#855E00] bg-[#ffe095] border-[#AD7B00]"
                : slide.aksiya === "Хит продаж"
                ? "bg-[#e6e6fd] text-[#59599A] border-[#424285]"
                : ""
            } rounded-full`}
          >
            {slide.aksiya}
          </div>
          <div className="md:hidden flex gap-1 pr-5">
            <button onClick={() => handleSravToggle(slide)}>
              {sravList.some((sravItem) => sravItem.id === slide.id) ? (
                <CategoryIcons2 />
              ) : (
                <CategoryIcons1 />
              )}
            </button>
            <button onClick={() => handleWishListToggle(slide)}>
              {likeList.some((wishItem) => wishItem.id === slide.id) ? (
                <FaHeart size={20} />
              ) : (
                <FaRegHeart size={20} />
              )}
            </button>
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
                <button className="p-2" onClick={() => decreaseQty(slide.id)}>
                  -
                </button>
                <p>{slide.amount}</p>
                <button className="p-2" onClick={() => increaseQty(slide.id)}>
                  +
                </button>
              </span>
            </div>
          </div>
          <div className="flex gap-1 items-start top-5 ">
            <div className=" hidden md:flex gap-1">
              <button onClick={() => handleSravToggle(slide)}>
                {sravList.some((sravItem) => sravItem.id === slide.id) ? (
                  <CategoryIcons2 />
                ) : (
                  <CategoryIcons1 />
                )}
              </button>
              <button onClick={() => handleWishListToggle(slide)}>
                {likeList.some((wishItem) => wishItem.id === slide.id) ? (
                  <FaHeart size={20} />
                ) : (
                  <FaRegHeart size={20} />
                )}
              </button>
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
