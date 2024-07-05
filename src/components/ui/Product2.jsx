import React from "react";
import { CategoryIcons1, CategoryIcons2 } from "../../assets/HomeSvg";
import { useDispatch, useSelector } from "react-redux";
import { SelectSrav, setTosrav } from "../../redux/SravSlice";
import { setToWishList } from "../../redux/WishlistSlice";
import { addToCart } from "../../redux/CartSlice";

const Product2 = ({ slide }) => {
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
    <div className=" border rounded-xl relative  flex overflow-hidden  bg-[#f8f7f3]">
      <div className="w-[40%] h-[270px] bg-[#fff] flex items-center relative justify-center">
        <img
          src={slide.img}
          alt={slide.title}
          className="w-[320px] object-contain h-full"
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
      </div>
      <div className="p-4 w-[60%] flex justify-between flex-col ">
        <span>
          <h2 className="text-[#202020] font-semibold w-[70%]">
            {slide.title}
          </h2>
          {/* <h3></h3> */}
          <p className="text-[#7a7687] text-[12px] w-[40%] pt-[5px]">
            {slide.artikl}
          </p>
        </span>
        <div className="flex justify-between w-full">
          <p className=" font-semibold pt-[15px]">{slide.price}</p>
          <button
            onClick={() => handleAddToCart(slide)}
            className="py-2 px-5 border w-[250px] text-[14px] h-[41px] hover:text-[#fff] hover:bg-[#088269] border-[#80808035]  mt-[20px] text-[#088269] rounded-full"
          >
            Добавить в корзину
          </button>
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
    </div>
  );
};

export default Product2;
