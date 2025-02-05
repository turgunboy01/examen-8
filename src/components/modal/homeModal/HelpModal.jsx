import React, { useContext } from "react";
import { ModalContext } from "../../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";

const HelpModal = () => {
  const { helpModal, setHelpModal } = useContext(ModalContext);
  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75  px-5 z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setHelpModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] flex flex-col  relative sm:grid-cols-2 gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setHelpModal(false)}
          className=" absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3 className="text-[18px] font-semibold">Вам нужна помощь?</h3>{" "}
        <p className="text-[14px] text-[#7A7687] w-[50%]">
          Наши менеджеры всегда готовы помочь. Напишите нам сообщение
        </p>
        <span>
          <div className="grid grid-cols-2 gap-[30px]">
            <input
              type="text"
              placeholder="Ваше имя*"
              className="border-b p-2 outline-none  text-[14px] w-full"
            />{" "}
            <input
              type="number"
              placeholder="Ваш телефон *"
              className="border-b p-2 outline-none text-[14px] w-full"
            />
          </div>

          <textarea
            type="text"
            required
            placeholder="Ваше сообщение*"
            className="border-b h-[150px] pt-5 p-2 outline-none  text-[14px] resize-none  w-full"
          />
        </span>
        <span className="flex gap-3">
          <button className="w-[130px] px-5 h-[50px] text-[14px] py-3 hover:bg-[#07745E] bg-[#088269] text-[#fff] rounded-full ">
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

export default HelpModal;
