import React, { useContext, useState } from "react";
import { ModalContext } from "../../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";
import img from "../../../assets/konsultatsiyaModal.png";
const ZakazatTovar = () => {
  const { zakazModal, setZakazModal } = useContext(ModalContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Имя обязательно";
    if (!formData.phone) newErrors.phone = "Телефон обязателен";
    if (!formData.email) {
      newErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email недействителен";
    }
    if (!formData.organization)
      newErrors.organization = "Организация обязательна";
    if (!formData.message) newErrors.message = "Сообщение обязательно";

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Handle form submission
    console.log(formData);
    localStorage.setItem("ZakazatData", JSON.stringify(formData));
    setZakazModal(false);
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setZakazModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] flex flex-col relative sm:grid-cols-2 gap-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setZakazModal(false)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3 className="text-[18px] font-semibold">Заказать звонок</h3>
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={img} className="w-[50px] h-[50px] rounded-full " alt="" />
            <span className="absolute top-0 left-[35px] rounded-full bg-[#3EA148] w-[10px] h-[10px]" />
          </div>
          <span>
            <h2 className="text-[16px] font-medium">Олег Сергеевич</h2>
            <p className="text-[12px] text-[#7A7687]">Менеджер по продажам</p>
          </span>
        </div>
        <span>
          <div className="relative">
            <input
              type="text"
              name="phone"
              placeholder="Ваш телефон *"
              className="border-b py-2 outline-none w-full"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className="text-red-500 text-[12px] absolute -top-3 left-0">
                {errors.phone}
              </span>
            )}
          </div>

          <div className="relative pt-5">
            <textarea
              type="text"
              name="message"
              required
              placeholder="Ваше сообщение*"
              className="border-b h-[150px] py-2  outline-none resize-none w-full"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span className="text-red-500 text-[12px] absolute top-2 left-0">
                {errors.message}
              </span>
            )}
          </div>
        </span>
        <span className="flex gap-3">
          <button
            className="w-[200px] px-5 text-[14px] py-3 hover:bg-[#07745E] bg-[#088269] text-[#fff] rounded-full"
            onClick={handleSubmit}
          >
            Оставить заявку
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

export default ZakazatTovar;
