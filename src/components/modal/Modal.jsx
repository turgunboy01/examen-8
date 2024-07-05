import React, { useContext } from "react";
import { ModalContext } from "../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";

const Modal = () => {
  const { loginModal, setLoginModal, regModal, setRegModal } =
    useContext(ModalContext);
  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75  z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setRegModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] flex flex-col  relative sm:grid-cols-2 gap-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className=" absolute right-5 top-5">
          <CgClose />
        </div>
        <h3>Регистрация</h3>{" "}
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
          Регистрация
        </button>
        <div className="flex gap-4">
          <input type="checkbox" id="check" className="w-[30px] h-[30px] " />
          <label htmlFor="check">
            Я соглашаюсь c обработкой персональных данных на условиях{" "}
            <span className="text-[#088269]">Политики конфиденциальности.</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Modal;
