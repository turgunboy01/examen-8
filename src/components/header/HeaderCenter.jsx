import React, { useContext, useEffect, useState } from "react";
import {
  HeaderIcon1,
  HeaderIcon2,
  HeaderIcon3,
  HeaderIcon4,
  HeaderLogo,
} from "../../assets/HeaderSvg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { Products } from "../../data/ProductsData";
import { ModalContext } from "../../context/modal/ModalContext";
import Modal from "../modal/auth/Modal";
import { useSelector } from "react-redux";
import { SelectSrav } from "../../redux/SravSlice";
import { selectCard } from "../../redux/CartSlice";
import { SelectWishList } from "../../redux/WishlistSlice";

const HeaderCenter = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const { regModal, setRegModal } = useContext(ModalContext);
  const [dropdown, setDropdown] = useState(false);
  const [categories, setCategories] = useState([]);
  const SravList = useSelector(SelectSrav);
  const CartList = useSelector(selectCard);
  const WishList = useSelector(SelectWishList);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchProduct(e.target.value);
    setDropdown(false);
  };

  const searchProducts = Products.filter((fil) =>
    fil?.title.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const handleClickProduct = (id) => {
    navigate(`/product/${id}`);
    setSearchProduct("");
  };
  const handleClickProfile = () => {
    const registrationData = localStorage.getItem("registrationData");
    if (registrationData) {
      navigate(`/profile`);
    } else {
      setRegModal(true);
    }
  };

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(Products.map((cat) => cat.category))];
    setCategories(uniqueCategories);
  };

  const handleClickCategory = (item) => {
    navigate(`/kategory/${item}`);
    setDropdown(false);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="max-w-[1350px] w-full mx-auto px-5">
      <div className="py-[20px] flex justify-between gap-4">
        {regModal && <Modal />}
        <div className="flex gap-[30px] w-full md:gap-[40px]">
          <Link to={"/"} className="hidden sm:block">
            <HeaderLogo />
          </Link>
          <div className="max-w-[500px] w-full relative h-[40px] flex items-center">
            <div className="flex items-center justify-between h-[37px] rounded-full bg-[#d5d1e1]">
              <div className="flex-1 relative flex bg-white rounded-full">
                <div
                  onClick={() => setDropdown(!dropdown)}
                  className="px-3 w-[260px] flex justify-between items-center lg:px-4 py-2 bg-[#efefef] rounded-full text-[14px] font-medium"
                >
                  <p>Все категории </p>
                  <IoMdArrowDropdown
                    className={`${
                      dropdown ? "rotate-180" : "rotate-0"
                    } duration-300`}
                  />
                </div>
                {dropdown && (
                  <div className="absolute top-[35px] z-50  flex flex-col gap-2 left-0 bg-[#fff] px-[15px] py-[10px] rounded-lg border">
                    {/* Categories list */}
                    {categories.map((item, index) => (
                      <button
                        onClick={() => handleClickCategory(item)}
                        key={index}
                        className="text-[12px] cursor-pointer text-start"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
                <input
                  type="text"
                  value={searchProduct}
                  onChange={(e) => handleInputChange(e)}
                  className="w-[100%] md:w-full px-4 py-1 outline-none text-[14px] rounded-full"
                  placeholder="Поиск"
                />
              </div>
              <div className="py-2 px-2 bg-[#d5d1e1] rounded-r-full">
                <IoIosSearch size={20} className="" />
              </div>
            </div>
            {searchProduct && (
              <div className="absolute top-[45px] z-[999] border rounded-lg bg-[#fff] p-[20px] w-[100%]">
                <div className="py-[10px] flex flex-col gap-2">
                  {searchProducts.length > 0 ? (
                    searchProducts.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleClickProduct(item.id)}
                        className="cursor-pointer flex gap-2 items-center"
                      >
                        <img
                          src={item.img}
                          className="w-[50px] object-contain h-[50px]"
                          alt={item.title}
                        />
                        <h2 className="text-[14px]">{item.title}</h2>
                      </div>
                    ))
                  ) : (
                    <p className="text-center">Products not found</p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="hidden xl:block">
            <p className="text-[#8a8694] text-[14px] font-medium">
              Пн-Пт с 09:00-19:00
            </p>
            <p className="text-[#8a8694] text-[14px] font-medium">
              Сб-Вс - выходной
            </p>
          </div>
        </div>
        <div className="hidden sm:flex gap-3 lg:gap-6 items-center">
          <button
            onClick={handleClickProfile}
            className="flex flex-col gap-1 cursor-pointer items-center"
          >
            <HeaderIcon1 />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">Войти</p>
          </button>
          <NavLink
            to={"/wishlist"}
            className="flex flex-col gap-1 items-center relative"
          >
            <HeaderIcon2 />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">
              Избранное
            </p>{" "}
            {WishList.length > 0 && (
              <div className="absolute -top-1 right-4  w-[15px] h-[15px] rounded-full text-[#fff] font-semibold text-[12px] flex justify-center items-center bg-[#088269]">
                {WishList.length}
              </div>
            )}
          </NavLink>
          <NavLink
            to={"/sravnenie"}
            className="flex flex-col gap-1 items-center relative"
          >
            <HeaderIcon3 />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">
              Сравнить
            </p>
            {SravList > 0 && (
              <div className="absolute -top-1 right-2  w-[15px] h-[15px] rounded-full text-[#fff] font-semibold text-[12px] flex justify-center items-center bg-[#088269]">
                {SravList.length}
              </div>
            )}
          </NavLink>
          <Link
            to={"/cart"}
            className="flex flex-col gap-1 items-center relative"
          >
            <HeaderIcon4 />
            <p className="text-[#8a8694] text-[14px] hidden lg:block">
              Корзина
            </p>
            {CartList.length > 0 && (
              <div className="absolute -top-1 right-2  w-[15px] h-[15px] rounded-full text-[#fff] font-semibold text-[12px] flex justify-center items-center bg-[#088269] ">
                {CartList.length}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;
