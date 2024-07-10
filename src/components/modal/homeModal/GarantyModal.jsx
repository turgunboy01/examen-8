import React, { useContext } from "react";
import { ModalContext } from "../../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";
import { CameraSvg } from "../../../assets/HomeSvg";

const GarantyModal = () => {
  const { garantyModal, setGarantyModal } = useContext(ModalContext);
  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 px-5 z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setGarantyModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] flex flex-col  relative sm:grid-cols-2 gap-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setGarantyModal(false)}
          className=" absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3 className="text-[18px] font-semibold">Гарантийный случай</h3>{" "}
        <span>
          <input
            type="text"
            placeholder="ИНН*"
            className="border-b p-2 outline-none  w-full"
          />
          <input
            type="password"
            placeholder="Ваш email*"
            className="border-b pt-5 p-2 outline-none  w-full"
          />{" "}
          <input
            type="text"
            placeholder="Контактное лицо*"
            className="border-b p-2 pt-5 outline-none  w-full"
          />
          <textarea
            type="password"
            placeholder="Ваша претензия"
            className="border-b pt-5 p-2 outline-none resize-none  h-[150px] w-full"
          />
        </span>
        <div className="flex gap-2 text-[14px]  font-semibold text-[#088269] items-center ">
          <label
            htmlFor="file"
            className="cursor-pointer flex gap-2 items-center"
          >
            {" "}
            <CameraSvg /> <p>Выберите файл</p>
          </label>
          <input type="file" id="file" className="hidden" />
        </div>
        <span className="flex gap-3">
          <button className="w-[130px] px-5 text-[14px] py-3 hover:bg-[#07745E] bg-[#088269] text-[#fff] rounded-full ">
            Отправить
          </button>
          <p className="text-[12px] text-[#7A7687]">
            Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
            на условиях{" "}
            <span className="text-[#088269]">Политики конфиденциальности.</span>
          </p>
        </span>
      </div>
    </div>
  );
};

export default GarantyModal;
