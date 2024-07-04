import React, { useEffect, useState } from "react";
import { CategoryIcons1, CategoryIcons2 } from "../../assets/HomeSvg";
import { CgClose } from "react-icons/cg";

const CardProduct = ({ slide }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("cart");
    if (storedData) {
      setCart(JSON.parse(storedData));
    }
  }, []);
  const removeItemById = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className=" border  rounded-xl relative  flex overflow-hidden  bg-[#f8f7f3]">
      <div className="w-[40%] h-[270px] bg-[#fff] flex items-center relative justify-center">
        <img
          src={slide.img}
          alt={slide.title}
          className="w-[320px] object-contain h-full"
        />
        <div
          className={`absolute top-3 left-3 px-2 py-1 text-[14px] font-semibold border border-[#088269] text-[#088269] bg-[#e1efe6] ${
            slide.aksiya == "-30%"
              ? "text-[#855E00] bg-[#ffe095] border-[#AD7B00]"
              : slide.aksiya == "Хит продаж"
              ? "bg-[#e6e6fd] text-[#59599A] border-[#424285]"
              : ""
          } rounded-full`}
        >
          {slide.aksiya}
        </div>
      </div>
      <div className="w-[60%] p-5 grid grid-cols-2">
        <div className="">
          <h2 className="w-[80%] text-[18px] font-semibold">{slide.title}</h2>
          <p className="text-[#7A7687] text-[12px] pt-2 ">
            Артикул: {slide.article}{" "}
          </p>
          <p className="text-[#7A7687] text-[12px] pt-1 ">В наличии</p>
        </div>
        <div className="flex justify-between">
          <div className="">
            <p className="text-[18px] font-semibold">{slide.price} руб.</p>
            <div className="">
              <span className="border mt-[30px] rounded-full w-[90px]    py-2 flex justify-center items-center gap-5">
                <button>-</button>
                <p>{slide.quantity}</p>
                <button>+</button>
              </span>
            </div>
          </div>
          <div className=" flex  items-start gap-2">
            <CategoryIcons1 />
            <CategoryIcons2 />
            <button onClick={() => removeItemById(slide.id)}>
              <CgClose size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
