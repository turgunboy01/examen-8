import React from "react";
import CardProduct from "./CardProduct";

const CartComponents = () => {
  const storedData = localStorage.getItem("cart");
  const dataArray = JSON.parse(storedData);

  return (
    <div className="max-w-[1350px] mx-auto pt-[30px] pb-[100px] px-5">
      <div className="flex justify-between gap-[30px]">
        <div className="w-[70%] flex  flex-col gap-3">
          {dataArray.length > 0
            ? dataArray.map((item) => (
                <CardProduct slide={item} key={item.id} />
              ))
            : <>
            
            </>}
        </div>
        <div className="w-[30%]"></div>
      </div>
    </div>
  );
};

export default CartComponents;
