import React, { useContext, useState } from "react";
import { ModalContext } from "../../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";

const RequesModal = () => {
  const { requestModal, setRequestModal } = useContext(ModalContext);

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
    localStorage.setItem("requestFormData", JSON.stringify(formData));
    setRequestModal(false);
  };

  return (
    <div
      className="fixed inset-0 px-5 bg-gray-800 bg-opacity-75 z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setRequestModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-[711px] w-full mx-5 flex flex-col relative sm:grid-cols-2 gap-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setRequestModal(false)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3>Запросить цену</h3>
        <span>
          <div className="grid grid-cols-2 gap-5">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя*"
                className="border-b py-2 text-[14px] outline-none w-full"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="text-red-500  absolute bottom-8 text-[12px] left-0">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                name="phone"
                placeholder="Ваш телефон *"
                className="border-b py-2 text-[14px] outline-none w-full"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="text-red-500 text-[12px] absolute bottom-8 left-0">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>
          <div className="relative pt-5">
            <input
              type="email"
              name="email"
              required
              placeholder="Ваш email*"
              className="border-b py-2 outline-none text-[14px] w-full"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-red-500 text-[12px] absolute bottom-8 left-0">
                {errors.email}
              </span>
            )}
          </div>
          <div className="relative pt-5">
            <input
              type="text"
              name="organization"
              required
              placeholder="Название вашей организации**"
              className="border-b py-2 text-[14px] outline-none w-full"
              value={formData.organization}
              onChange={handleChange}
            />
            {errors.organization && (
              <span className="text-red-500 text-[12px] absolute bottom-8 left-0">
                {errors.organization}
              </span>
            )}
          </div>
          <div className="relative pt-5">
            <textarea
              type="text"
              name="message"
              required
              placeholder="Ваше сообщение*"
              className="border-b h-[150px] py-2 text-[14px] outline-none resize-none w-full"
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
            className="w-[130px] px-5 text-[14px] py-3 hover:bg-[#07745E] bg-[#088269] text-[#fff] rounded-full"
            onClick={handleSubmit}
          >
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

export default RequesModal;
