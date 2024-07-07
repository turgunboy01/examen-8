import React, { useContext } from "react";
import { ModalContext } from "../../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";

const Konsultatsiya = () => {
  const { konsultatsiyaModal, setKonsultatsiyaModal } =
    useContext(ModalContext);
  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75  z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setKonsultatsiyaModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] flex flex-col  relative sm:grid-cols-2 gap-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setKonsultatsiyaModal(false)}
          className=" absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3 className="text-[18px] font-semibold">Получить консультацию</h3>{" "}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src=""
              className="w-[50px] h-[50px] rounded-full bg-[#088269]"
              alt=""
            />
            <span className="absolute top-0 left-[35px] rounded-full bg-[#3EA148] w-[10px] h-[10px]" />
          </div>
          <span>
            <h2 className="text-[16px] font-medium">Олег Сергеевич</h2>
            <p className="text-[12px] text-[#7A7687]">Менеджер по продажам</p>
          </span>
        </div>
        <span>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Ваше имя*"
              className="border-b p-2 outline-none  w-full"
            />{" "}
            <input
              type="text"
              placeholder="Ваш телефон *"
              className="border-b p-2 outline-none  w-full"
            />
          </div>
          <input
            type="email"
            required
            placeholder="Название вашей организации*"
            className="border-b pt-5 p-2 outline-none  w-full"
          />

          <textarea
            type="text"
            required
            placeholder="Ваше сообщение*"
            className="border-b h-[150px] pt-5 p-2 outline-none  resize-none  w-full"
          />
        </span>
        <span className="flex gap-3">
          <button className="w-[130px] px-5 text-[14px] py-3 bg-[#088269] text-[#fff] rounded-full ">
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

export default Konsultatsiya;