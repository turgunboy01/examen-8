import React from "react";
import CardProduct from "./CardProduct";
import { useSelector } from "react-redux";
import { selectCard } from "../../redux/CartSlice";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { MdOutlineKeyboardArrowRight } from "react-icons";

const CartComponents = () => {
  const data = useSelector(selectCard);
  const cart = useSelector(selectCard);
  const subtotal = cart.reduce((sum, product) => {
    const price = parseFloat(product.price) || 0;
    const quantity = parseInt(product.amount, 10) || 0;
    return sum + price * quantity;
  }, 0);

  return (
    <div className="max-w-[1350px] mx-auto pt-[30px] pb-[100px] px-5">
      <div className="flex gap-2 items-center ">
        <Link to={"/"} className="text-[#7A7687] text-[14px]">
          Главная
        </Link>
        <MdOutlineKeyboardArrowRight />
        <Link className="text-[14px]" to={"/cart"}>
          Корзина ({cart.length})
        </Link>
      </div>
      <div className="flex justify-between flex-col sm:flex-row py-[50px] gap-[30px]">
        <div className="sm:w-[75%] flex flex-col gap-3">
          {data.length > 0 ? (
            data.map((item) => <CardProduct slide={item} key={item.id} />)
          ) : (
            <div className="flex w-full justify-center">
              <img
                src="https://notebookstore.in/image/no-product-found.png"
                alt="No products found"
                className="w-full h-full"
              />
            </div>
          )}
        </div>
        <div className="sm:w-[30%] bg-[#fff] h-full border p-5 rounded-lg">
          <span className="flex justify-between items-center pb-3 border-b">
            <h2 className="text-[16px] font-semibold">Итого</h2>
            <p className="text-[14px] font-semibold">{subtotal} руб.</p>
          </span>
          <span className="flex pt-2 justify-between">
            <h2 className="text-[12px]">
              Товары ({data.length > 0 ? data.length : 0} шт)
            </h2>
            <p className="text-[12px] ">{subtotal} руб.</p>
          </span>
          <span className="flex py-1 justify-between">
            <h2 className="text-[12px]">Скидка</h2>
            <p className="text-[12px]">0 руб.</p>
          </span>
          <span className="flex flex-col pt-[10px] gap-2">
            <button className="py-2 w-full text-[12px] bg-[#088269] text-[#fff] border rounded-full">
              Оформить заказ
            </button>
            <button className="py-2 w-full text-[12px] rounded-full border">
              Задать вопрос
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartComponents;
