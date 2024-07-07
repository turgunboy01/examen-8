import React from "react";
import { CategoryIcons1, CategoryIcons2 } from "../../assets/HomeSvg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { SelectSrav, setTosrav } from "../../redux/SravSlice";
import { setToWishList } from "../../redux/WishlistSlice";
import { addToCart } from "../../redux/CartSlice";
import { Link } from "react-router-dom";

const Product = ({ slide }) => {
  const dispatch = useDispatch();

  const sravList = useSelector(SelectSrav);
  const likeList = useSelector((state) => state.like.data);

  const handleSravToggle = (product) => {
    dispatch(setTosrav(product));
  };

  const handleWishListToggle = (product) => {
    dispatch(setToWishList(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className=" border rounded-xl   overflow-hidden  bg-[#f8f7f3]">
      <div className="w-full h-[300px] bg-[#fff] flex items-center relative justify-center">
        <img
          src={slide.img}
          alt={slide.title}
          className="w-full object-contain h-full"
        />
        <div className="absolute top-1.5 left-2 px-2 py-1 text-[13px] rounded-full">
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
        </div>
        <div className="absolute right-3 top-3 flex gap-2">
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
      <div className="p-4 flex flex-col justify-between ">
        <div className="">
          <Link
            to={`/product/${slide.id}`}
            className="text-[#202020] font-semibold w-[70%]"
          >
            {slide.title}
          </Link>
          {/* <h3></h3> */}
          <p className="text-[#7a7687]  text-[10px] lg:text-[12px] xl:w-[40%] pt-[5px]">
            {slide.artikl}
          </p>
          <p className=" font-semibold pt-[15px]">{slide.price}</p>
        </div>
        <button
          onClick={() => handleAddToCart(slide)}
          className="py-2 text-[12px] lg:text-[14px] border hover:text-[#fff] hover:bg-[#088269] border-[#80808035] w-full mt-[20px] text-[#088269] rounded-full"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default Product;
