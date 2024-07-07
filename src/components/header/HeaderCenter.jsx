import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  HeaderIcon1,
  HeaderIcon2,
  HeaderIcon3,
  HeaderIcon4,
  HeaderLogo,
} from "../../assets/HeaderSvg";
import { Link, NavLink } from "react-router-dom";
// import img from "../../assets/header.png";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { Products } from "../../data/ProductsData";
import { ModalContext } from "../../context/modal/ModalContext";
// import Modal from "../modal/auth/Modal";
// import LoginModal from "../modal/auth/LoginModal";
// import SbrosModal from "../modal/auth/SbrosModal";

const HeaderCenter = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const handleInputChange = (e) => {
    setSearchProduct(e.target.value);
    setDropdown(false); // input o'zgarganda dropdown yopiladi
  };

  const searchProducts = Products.filter((fil) =>
    fil?.title.toLocaleLowerCase().includes(searchProduct.toLocaleLowerCase())
  );
  console.log(searchProducts);

  // const { regModal, setRegModal } = useContext(ModalContext);

  return (
    <div className="max-w-[1350px] w-full mx-auto px-5">
      <div className="py-[20px]  flex justify-between gap-4 ">
        <div className="flex gap-[30px] w-full md:gap-[40px]">
          <Link to={"/"} className="hidden sm:block">
            <HeaderLogo />
          </Link>
          <div className="w-full lg:w-[500px] relative  h-[40px] flex items-center ">
            <div className="flex  items-center justify-between  h-[37px] rounded-full  bg-[#d5d1e1]">
              <div className="flex-1 relative flex  bg-white rounded-full">
                <div
                  onClick={() => setDropdown(!dropdown)}
                  className="  px-3 w-[210px] flex justify-between items-center   lg:px-4 py-2 bg-[#efefef] rounded-full text-[14px] font-medium"
                >
                  <p>Все категории </p>
                  <IoMdArrowDropdown
                    className={`${
                      dropdown ? "rotate-180" : "rotate-0"
                    } duration-300`}
                  />
                </div>
                {dropdown && (
                  <div className="absolute top-[35px] z-50 w-[150px] flex flex-col gap-2 left-0  bg-[#fff] px-[15px] py-[10px] rounded-lg border">
                    <p className="text-[12px] cursor-pointer">Реанимация</p>
                    <p className="text-[12px] cursor-pointer">Хирургия</p>
                    <p className="text-[12px] cursor-pointer">Офтальмология</p>
                    <p className="text-[12px] cursor-pointer">
                      Лабораторная диагностика
                    </p>
                    <p className="text-[12px] cursor-pointer">Акушерство</p>
                    <p className="text-[12px] cursor-pointer">Гинекология</p>
                    <p className="text-[12px] cursor-pointer">Гистология</p>
                    <p className="text-[12px] cursor-pointer">Косметология</p>
                    <p className="text-[12px] cursor-pointer">
                      Оториноларингология
                    </p>
                    <p className="text-[12px] cursor-pointer">
                      Рентгенология и томография
                    </p>
                    <p className="text-[12px] cursor-pointer">
                      Оториноларингология
                    </p>
                    <p className="text-[12px] cursor-pointer">Стерилизация</p>
                    <p className="text-[12px] cursor-pointer">
                      Физиотерапия и реабилитация
                    </p>
                    <p className="text-[12px] cursor-pointer"> Эндоскопия</p>
                    <p className="text-[12px] cursor-pointer"> Новинки</p>
                    <p className="text-[12px] cursor-pointer"> Распродажи</p>
                    <p className="text-[12px] cursor-pointer">
                      Кабинеты под ключ
                    </p>
                  </div>
                )}
                <input
                  type="text"
                  value={searchProduct}
                  onChange={(e) => handleInputChange(e)}
                  className=" w-[100%] md:w-full px-4 py-1 outline-none  text-[14px]  rounded-full"
                  placeholder="Поиск"
                />
              </div>
              <div className="py-2 px-2  bg-[#d5d1e1] rounded-r-full">
                <IoIosSearch size={20} className=" " />
              </div>
            </div>
            {searchProduct && (
              <div className="absolute top-[45px] z-[999] border rounded-lg bg-[#fff] p-[20px] w-[100%]">
                <div className="">
                  {/* <h2 className="border-b text-[#7A7687] text-[12px] py-1">
                    Бренд
                  </h2> */}
                  <div className="py-[10px] flex flex-col gap-2">
                    {searchProducts.length > 0 ? (
                      searchProducts.map((item) => (
                        <div className="flex gap-2 items-center">
                          <img
                            src={item.img}
                            className="w-[50px] object-contain h-[50px]"
                            alt="as"
                          />
                          <h2 className="text-[14px]">{item.title}</h2>
                        </div>
                      ))
                    ) : (
                      <p className="text-center ">Products no found</p>
                    )}
                  </div>
                </div>
                {/* <div className="">
                  <h2 className="border-b text-[#7A7687] text-[12px] py-1">
                    Подкатегория
                  </h2>
                  <div className="py-[10px] flex flex-col gap-2">
                    <h2 className="text-[14px]">Аппараты ИВЛ</h2>
                    <h2 className="text-[14px]">Амплификаторы</h2>
                    <h2 className="text-[14px]">Аспираторы</h2>
                  </div>
                </div>
                <div className="">
                  <h2 className="border-b text-[#7A7687] text-[12px] py-1">
                    Бренд
                  </h2>
                  <div className="py-[10px] flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <img src={img} alt="as" />
                      <h2 className="text-[14px]">Amedetron Dynamic Proxima</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img src={img} alt="as" />
                      <h2 className="text-[14px]">Amedetron Dynamic Mini</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img src={img} alt="as" />
                      <h2 className="text-[14px]">Amindray HD3 FULL HD</h2>
                    </div>
                  </div>
                </div> */}
              </div>
            )}
          </div>
          <div className="hidden xl:block">
            <p className="text-[#8a8694] text-[14px] font-medium">
              Пн-Пт с 09:00-19:00
            </p>
            <p className="text-[#8a8694] text-[14px] font-medium">
              {" "}
              Сб-Вс - выходной
            </p>
          </div>
        </div>
        <div className="hidden sm:flex gap-3 lg:gap-6 items-center">
          <span
            onClick={() => setRegModal(!regModal)}
            className="flex flex-col gap-1 cursor-pointer items-center"
          >
            <HeaderIcon1 />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">Войти</p>
          </span>
          {/* {regModal && <Modal />} */}
          {/* <LoginModal /> */}
          {/* <SbrosModal /> */}
          {/* <Modal /> */}
          <NavLink
            to={"/wishlist"}
            className="flex flex-col gap-1 items-center"
          >
            <HeaderIcon2 />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">
              Избранное
            </p>
          </NavLink>{" "}
          <NavLink
            to={"/sravnenie"}
            className="flex flex-col gap-1 items-center"
          >
            <HeaderIcon3 />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">
              Сравнить
            </p>
          </NavLink>{" "}
          <Link to={"/cart"} className="flex flex-col gap-1 items-center">
            <HeaderIcon4 />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">
              Корзина
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;
