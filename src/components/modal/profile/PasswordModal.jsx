import React, { useContext, useState } from "react";
import { ModalContext } from "../../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";

const PasswordModal = () => {
  const { phoneNumbermodal, setPhoneNumbermodal } = useContext(ModalContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSave = () => {
    localStorage.setItem("userPhoneNumberProfile", phoneNumber);
    setPhoneNumbermodal(false);
  };
  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setPhoneNumbermodal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] flex flex-col relative sm:grid-cols-2 gap-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setPhoneNumbermodal(false)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3>Введите номер телефона</h3>
        <span>
          <input
            type="text"
            placeholder="Ваш телефон*"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border-b p-2 outline-none w-full"
          />
        </span>
        <button
          className="w-full capitalize py-3 hover:bg-[#07745E] bg-[#088269] text-[#fff] rounded-full"
          onClick={handleSave}
        >
          сохранять
        </button>
      </div>
    </div>
  );
};

export default PasswordModal;
