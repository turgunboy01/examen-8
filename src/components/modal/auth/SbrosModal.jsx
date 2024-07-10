import React, { useContext } from "react";
import { ModalContext } from "../../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";

const SbrosModal = () => {
  const { setSborModal, sborModal } = useContext(ModalContext);
  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75  z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setSborModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] px-5 flex flex-col  relative sm:grid-cols-2 gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setSborModal(false)}
          className=" absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3 className="text-[18px] text-[#202020] font-semibold">
          Сброс пароля
        </h3>{" "}
        <p className="text-[14px] text-[#7A7687]">
          Введите свой адрес электронной почты, и мы вышлем вам инструкции о
          том, как сбросить ваш пароль.
        </p>
        <span>
          <input
            type="text"
            placeholder="Ваш email*"
            className="border-b mt-4 pb-2 outline-none  w-full"
          />
        </span>
        <button className="w-full mt-3 py-3 bg-[#088269] text-[#fff] rounded-full ">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default SbrosModal;
