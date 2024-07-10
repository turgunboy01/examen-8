import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// import img from "../../assets/Photo.png";
import { CategoryIcons1, CategoryIcons2 } from "../../assets/HomeSvg";
import { SelectSrav, setTosrav } from "../../redux/SravSlice";
import { setToWishList } from "../../redux/WishlistSlice";
import {
  selectCard,
  addToCart,
  increment,
  descrement,
} from "../../redux/CartSlice";
import { Products } from "../../data/ProductsData";

const ProductDetails = () => {
  const { id } = useParams();
  const product = Products.find((p) => p.id == id);
  const dispatch = useDispatch();
  const sravList = useSelector(SelectSrav);
  const likeList = useSelector((state) => state.like.data);
  const cart = useSelector(selectCard);
  const [clickedAdd, setClickedAdd] = useState(false);

  const cartItem = cart.find((item) => item.id === product.id);
  console.log(cartItem);
  const initialAmount = cartItem ? cartItem.amount : 0;
  const [amount, setAmount] = useState(initialAmount);
  const [imgChange, setImgChange] = useState("");

  const handleSravToggle = (product) => {
    dispatch(setTosrav(product));
  };

  const handleWishListToggle = (product) => {
    dispatch(setToWishList(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setClickedAdd(true);
  };
  const increaseQty = (productId) => {
    dispatch(increment(productId));
  };

  const decreaseQty = (productId) => {
    dispatch(descrement(productId));
  };

  return (
    <div className="bg-[#f8f7f3] py-5">
      <div className="max-w-[1350px] mx-auto px-5">
        <div className="flex flex-col sm:flex-row gap-[30px] items-center">
          <div className="w-full sm:w-[50%] h-[510px] relative rounded-lg flex justify-center items-center bg-[#fff] border">
            {imgChange.length == 0 ? (
              <img src={product.img} alt="imgs" />
            ) : (
              <img src={imgChange} alt="imgs" />
            )}
            <div className="absolute top-4 left-4 px-2 py-1 text-[13px] border border-[#088269] text-[#088269] bg-[#e1efe6] rounded-full">
              {product.aksiya}
            </div>
            <div className="absolute right-4 top-4 flex gap-2">
              <button onClick={() => handleSravToggle(product)}>
                {sravList.some((sravItem) => sravItem.id === product.id) ? (
                  <CategoryIcons2 />
                ) : (
                  <CategoryIcons1 />
                )}
              </button>
              <button onClick={() => handleWishListToggle(product)}>
                {likeList.some((wishItem) => wishItem.id === product.id) ? (
                  <FaHeart size={20} />
                ) : (
                  <FaRegHeart size={20} />
                )}
              </button>
            </div>
            <div className="absolute left-7 bottom-7 flex gap-2">
              {product.imgs.map((img, index) => (
                <img
                  onClick={() => setImgChange(img)}
                  key={index}
                  src={img}
                  alt=""
                  className="w-[60px] border rounded-lg p-1 h-[60px]"
                />
              ))}
            </div>
          </div>
          <div className="w-full sm:w-[50%]">
            <h2 className="text-[30px] leading-[36px]">{product.title}</h2>
            <span className="py-[10px]">
              <Rating name="read-only" value={product.rating} readOnly />
            </span>
            <p className="text-[12px] text-[#7A7687]">
              Категория: {product.category}
            </p>
            <p className="text-[12px] text-[#7A7687]">Производитель: Lorem</p>
            <p className="text-[12px] text-[#7A7687]">Артикул: 213134</p>
            <p className="text-[12px] text-[#7A7687]">В наличии</p>
            <p className="text-[18px] py-3 font-semibold">
              {product.price} руб.
            </p>
            <div className="flex gap-3 py-[20px]">
              {clickedAdd && (
                <span className="hidden md:flex items-center px-2 lg:px-6 rounded-full gap-3 lg:gap-4 border">
                  <button onClick={() => decreaseQty(product.id)}>-</button>
                  <p className="text-[13px] lg:text-[14px] text-[#088269]">
                    {amount}
                  </p>
                  <button
                    onClick={() => increaseQty(product.id)}
                    className="text-[#088269]"
                  >
                    +
                  </button>
                </span>
              )}
              <button className="w-full py-2 border text-[13px] lg:text-[14px] text-[#088269] rounded-full">
                Задать вопрос
              </button>
              <button
                onClick={() => handleAddToCart(product)}
                className="px-2 w-full py-2 text-[13px] lg:text-[14px] border bg-[#088269] text-[#fff] rounded-full"
              >
                Добавить в корзину
              </button>
            </div>
            <p className="text-[18px]">О товаре</p>
            <p className="py-[10px] text-[12px] text-[#202020a9]">
              Но синтетическое тестирование, в своём классическом представлении,
              допускает внедрение поэтапного и последовательного развития
              общества. В рамках спецификации современных стандартов, сторонники
              тоталитаризма в науке будут функционально разнесены.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
