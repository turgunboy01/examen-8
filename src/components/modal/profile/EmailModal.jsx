import React, { useContext, useState } from "react";
import { ModalContext } from "../../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";

const EmailModal = () => {
  const { emailModal, setEmailModal } = useContext(ModalContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSave = () => {
    if (!validateEmail(email)) {
      setError("Пожалуйста, введите действительный адрес электронной почты.");
      return;
    }
    localStorage.setItem("userEmailProfile", email);
    setEmailModal(false);
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setEmailModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] flex flex-col relative sm:grid-cols-2 gap-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setEmailModal(false)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3>Введите вашу электронную почту</h3>
        <span>
          <input
            type="text"
            placeholder="Ваш email*"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            className="border-b p-2 outline-none w-full"
          />
        </span>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          className="w-full capitalize py-3 bg-[#088269] text-[#fff] rounded-full"
          onClick={handleSave}
        >
          сохранять
        </button>
      </div>
    </div>
  );
};

export default EmailModal;
