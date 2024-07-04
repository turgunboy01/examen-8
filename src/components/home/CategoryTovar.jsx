import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CategoryIcons1, CategoryIcons2 } from "../../assets/HomeSvg";
import { SettingsSlide } from "../../data/SlidesData";
import { Products } from "../../data/ProductsData";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addToWishCart, removeWish } from "../../redux/WishlistSlice";
// import ProductDetails from "../productDetails/ProductDetails";

const CategoryTovar = () => {
  const [likeStatus, setLikeStatus] = useState(() => {
    const storedLikes = localStorage.getItem("like");
    return storedLikes ? JSON.parse(storedLikes) : {};
  });

  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(likeStatus));
  }, [likeStatus]);

  const handleAddToCart = (product) => {
    let totalPrice = 1 * product.price;
    const tempProduct = {
      ...product,
      quantity: 1,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    console.log(tempProduct);
  };

  const handleLikeToggle = (product) => {
    setLikeStatus((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
    const tempProduct = {
      ...product,
      likeStatus: true,
    };
    dispatch(addToWishCart(tempProduct));
  };

  const handleDisLikeToggle = (product) => {
    setLikeStatus((prevState) => ({
      ...prevState,
      [product.id]: false,
    }));
    const tempProduct = {
      ...product,
    };
    dispatch(removeWish(tempProduct));
  };

  return (
    <div className="bg-[#f8f7f3] py-[80px]">
      <div className="max-w-[1350px] mx-auto px-5">
        <div className="flex md:flex-row flex-col w-full gap-[20px] lg:gap-[30px]">
          <div className="w-full md:w-[30%]">
            <div className="flex justify-between items-center">
              <h1 className="text-[30px] font-medium">Каталог товаров</h1>
              <div className="hidden sm:flex md:hidden gap-2">
                <button className="px-4 md:px-6 py-2 text-[12px] md:text-[16px] border rounded-full border-[#088269] text-[#088269]">
                  Бесплатная консультация
                </button>
                <button className="px-4 md:px-6 py-2 text-[13px] md:text-[16px] bg-[#088269] border rounded-full text-[#fff]">
                  Все товары
                </button>
              </div>
            </div>
            <div className="flex flex-row md:flex-col gap-5 md:gap-1">
              <p className="text-[#2020207b] text-[16px] pt-[10px]">
                Хиты продаж
              </p>
              <p className="text-[#2020207a] text-[16px] pt-[10px]">Новинки</p>
              <p className="text-[#20202071] text-[16px] pt-[10px]">Акции</p>
            </div>
          </div>
          <div className="w-full md:w-[70%] flex flex-col gap-[40px]">
            <div>
              <Slider ref={sliderRef} {...SettingsSlide}>
                {Products.map((slide, index) => (
                  <div key={index} className="border rounded-xl bg-[#f8f7f3]">
                    <div className="w-full h-[300px] bg-[#fff] overflow-hidden flex items-center relative justify-center">
                      <img src={slide.img} alt={slide.title} />
                      <div
                        className={`absolute top-3 left-3 px-2 py-1 text-[14px] font-semibold border border-[#088269] text-[#088269] bg-[#e1efe6] ${
                          slide.aksiya === "-30%"
                            ? "text-[#855E00] bg-[#FFE095] border-[#AD7B00]"
                            : slide.aksiya === "Хит продаж"
                            ? "bg-[#E6E6FD] text-[#59599A] border-[#424285]"
                            : ""
                        } rounded-full`}
                      >
                        {slide.aksiya}
                      </div>
                      <div className="absolute right-3 top-3 flex gap-2">
                        <CategoryIcons1 />
                        {likeStatus[slide.id] ? (
                          <button onClick={() => handleDisLikeToggle(slide)}>
                            <FaHeart size={20} />
                          </button>
                        ) : (
                          <button onClick={() => handleLikeToggle(slide)}>
                            <FaRegHeart size={20} />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <h2 className="text-[#202020] font-semibold border-t w-[70%]">
                        {slide.title}
                      </h2>
                      <p className="text-[#7a7687] text-[12px] w-[40%] pt-[5px]">
                        {slide.artikl}
                      </p>
                      <p className="font-semibold pt-[15px]">
                        {slide.price} руб
                      </p>
                      <button
                        onClick={() => handleAddToCart(slide)}
                        className="py-2 border text-[13px] lg:text-[16px] hover:text-[#fff] hover:bg-[#088269] border-[#80808035] w-full mt-[20px] text-[#088269] rounded-full"
                      >
                        Добавить в корзину
                      </button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="flex sm:hidden md:flex justify-center md:justify-between">
              <div className="hidden sm:flex gap-3">
                <button
                  className="w-[41px] h-[41px] rounded-full border flex items-center justify-center"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <GoArrowLeft />
                </button>
                <button
                  className="w-[41px] h-[41px] rounded-full border flex items-center justify-center"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <GoArrowRight />
                </button>
              </div>
              <div className="flex gap-2">
                <button className="px-4 md:px-6 py-2 text-[12px] md:text-[16px] border rounded-full border-[#088269] text-[#088269]">
                  Бесплатная консультация
                </button>
                <button className="px-4 md:px-6 py-2 text-[13px] md:text-[16px] bg-[#088269] border rounded-full text-[#fff]">
                  Все товары
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTovar;
