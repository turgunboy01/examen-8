import React, { useContext, useState, useEffect } from "react";
import { ModalContext } from "../../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";

const ProfileInfo = ({}) => {
  const { profileInfoModal, setProfileInfoModal } = useContext(ModalContext);

  const initialState = {
    name: "",
    surname: "",
    vk: "",
    instagram: "",
    twitter: "",
    facebook: "",
    ok: "",
  };

  // Initialize state with data from localStorage if available
  const [personInfo, setPersonInfo] = useState(() => {
    const savedInfo = localStorage.getItem("profileInfo");
    return savedInfo ? JSON.parse(savedInfo) : initialState;
  });

  // Update state when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save data to localStorage when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profileInfo", JSON.stringify(personInfo));
    // Clear the form state after saving
    setPersonInfo(initialState);
    // Optionally, close the modal after saving
    setProfileInfoModal(false);
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setProfileInfoModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] flex flex-col relative sm:grid-cols-2 gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setProfileInfoModal(false)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3 className="text-[18px] font-semibold">Персональные данные</h3>
        <form onSubmit={handleSubmit}>
          <span className="flex gap-4 flex-col">
            <input
              type="text"
              name="name"
              value={personInfo.name}
              placeholder="Имя*"
              className="border-b py-2 outline-none text-[14px] w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="surname"
              value={personInfo.surname}
              placeholder="Фамилия*"
              className="border-b py-2 outline-none text-[14px] w-full"
              onChange={handleChange}
              required
            />
          </span>
          <h3 className="text-[18px] pt-[10px] font-semibold">
            Социальные сети
          </h3>
          <span className="flex gap-4 flex-col">
            <input
              type="text"
              name="vk"
              value={personInfo.vk}
              placeholder="Вконтакте"
              className="border-b py-2 outline-none text-[14px] w-full"
              onChange={handleChange}
            />
            <input
              type="text"
              name="instagram"
              value={personInfo.instagram}
              placeholder="Instagram"
              className="border-b py-2 outline-none text-[14px] w-full"
              onChange={handleChange}
            />
            <input
              type="text"
              name="facebook"
              value={personInfo.facebook}
              placeholder="Facebook"
              className="border-b py-2 outline-none text-[14px] w-full"
              onChange={handleChange}
            />
            <input
              type="text"
              name="ok"
              value={personInfo.ok}
              placeholder="Одноклассники"
              className="border-b py-2 outline-none text-[14px] w-full"
              onChange={handleChange}
            />
            <input
              type="text"
              name="telegram"
              value={personInfo.telegram}
              placeholder="Твиттер"
              className="border-b py-2 outline-none text-[14px] w-full"
              onChange={handleChange}
            />
          </span>
          <span className="flex gap-3 mt-4">
            <button
              type="submit"
              className="w-[130px] px-5 text-[14px] py-3 bg-[#088269] text-[#fff] rounded-full"
            >
              Отправить
            </button>
            <p className="text-[12px] text-[#7A7687]">
              Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
              на условиях{" "}
              <span className="text-[#088269]">
                Политики конфиденциальности.
              </span>
            </p>
          </span>
        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;
