import React, { useContext } from "react";
import { ModalContext } from "../../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";

const LoginModal = () => {
  const { loginModal, setLoginModal, regModal, setRegModal } =
    useContext(ModalContext);
  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75  z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setLoginModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] flex flex-col  relative sm:grid-cols-2 gap-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setLoginModal(false)}
          className=" absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3>Авторизация</h3>{" "}
        <span>
          <input
            type="text"
            placeholder="Ваш email*"
            className="border-b p-2 outline-none  w-full"
          />
          <input
            type="password"
            placeholder="Пароль*"
            className="border-b pt-5 p-2 outline-none  w-full"
          />
        </span>
        <button className="w-full py-3 bg-[#088269] text-[#fff] rounded-full ">
          Войти
        </button>
        <div className="flex justify-between gap-4">
          <span className="flex gap-3 items-center">
            <input type="checkbox" id="check" className="w-[20px] h-[20px] " />
            <label className="text-[12px] text-[#2020208c]" htmlFor="check">Запомнить</label>
          </span>
          <a href="#" className="text-[13px] font-semibold">Забыли пароль?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
