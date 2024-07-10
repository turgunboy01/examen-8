import React, { useContext, useState } from "react";
import { ModalContext } from "../../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";

const EditProfileModal = () => {
  const { platelModal, setPlatelModal } = useContext(ModalContext);
  const [editPlatel, setEditPlatel] = useState({
    inn: "",
    name: "",
    address: "",
    website: "",
    email: "",
    position: "",
    organizationType: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditPlatel((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!editPlatel.inn) newErrors.inn = "ИНН обязателен";
    if (!editPlatel.name) newErrors.name = "Название обязательно";
    if (!editPlatel.address) newErrors.address = "Адрес доставки обязателен";
    if (!editPlatel.website) newErrors.website = "Сайт обязателен";
    if (!editPlatel.email) newErrors.email = "Контактный Email обязателен";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editPlatel.email))
      newErrors.email = "Некорректный Email";
    if (!editPlatel.position) newErrors.position = "Должность обязательна";
    if (!editPlatel.organizationType)
      newErrors.organizationType = "Тип организации обязателен";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // No errors, proceed with saving
      localStorage.setItem("userPlatel", JSON.stringify(editPlatel));
      setPlatelModal(false);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 px-5 bg-opacity-75 z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setPlatelModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] flex flex-col relative sm:grid-cols-2 gap-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setPlatelModal(false)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3>Добавление плательщика</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
          <select
            name="organizationType"
            value={editPlatel.organizationType}
            onChange={handleChange}
            className="border-b p-2 bg-[#fff] outline-none text-[14px] w-full"
          >
            <option value="" disabled>
              Тип организации
            </option>
            <option value="ООО">ООО</option>
            <option value="АО">АО</option>
            <option value="ИП">ИП</option>
          </select>
          {errors.organizationType && (
            <p className="text-red-500 text-sm">{errors.organizationType}</p>
          )}
          <input
            type="number"
            name="inn"
            placeholder="ИНН*"
            value={editPlatel.inn}
            onChange={handleChange}
            className="border-b p-2 text-[14px] outline-none w-full"
          />
          {errors.inn && <p className="text-red-500 text-sm">{errors.inn}</p>}
          <input
            type="text"
            name="name"
            placeholder="Название*"
            value={editPlatel.name}
            onChange={handleChange}
            className="border-b pt-5 p-2 text-[14px] outline-none w-full"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <input
            type="text"
            name="address"
            placeholder="Адрес доставки*"
            value={editPlatel.address}
            onChange={handleChange}
            className="border-b p-2 outline-none text-[14px] w-full"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
          <input
            type="text"
            name="website"
            placeholder="Сайт*"
            value={editPlatel.website}
            onChange={handleChange}
            className="border-b p-2 outline-none text-[14px] w-full"
          />
          {errors.website && (
            <p className="text-red-500 text-sm">{errors.website}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="Контактный Email*"
            value={editPlatel.email}
            onChange={handleChange}
            className="border-b p-2 outline-none text-[14px] w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
          <input
            type="text"
            name="position"
            placeholder="Должность*"
            value={editPlatel.position}
            onChange={handleChange}
            className="border-b p-2 outline-none text-[14px] w-full"
          />
          {errors.position && (
            <p className="text-red-500 text-sm">{errors.position}</p>
          )}

          <span className="flex gap-3 mt-4">
            <button
              type="submit"
              className="w-[130px] px-5 h-[50px] text-[14px] py-3 hover:bg-[#07745E] bg-[#088269] text-[#fff] rounded-full"
            >
              Добавить
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

export default EditProfileModal;
