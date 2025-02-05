import React, { useContext, useState, useEffect } from "react";
import { ModalContext } from "../../../context/modal/ModalContext";
import { CgClose } from "react-icons/cg";

const Modal = () => {
  const { regModal, setRegModal } = useContext(ModalContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isChecked: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("registrationData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const validate = () => {
    let errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!formData.isChecked) {
      errors.isChecked = "You must agree to the privacy policy";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("registrationData", JSON.stringify(formData));
      // Handle successful registration logic here
      setRegModal(false);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div
      className="fixed inset-0 px-5 bg-gray-800 bg-opacity-75 z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setRegModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] flex flex-col relative sm:grid-cols-2 gap-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setRegModal(false)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3>Регистрация</h3>
        <form onSubmit={handleSubmit}>
          <span>
            {errors.email && (
              <p className="text-red-500 text-[12px] ">{errors.email}</p>
            )}
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ваш email*"
              className="border-b py-2 outline-none w-full"
            />

            {errors.password && (
              <p className="text-red-500 text-[12px] ">{errors.password}</p>
            )}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Пароль*"
              className="border-b  py-2 outline-none w-full"
            />
          </span>
          <button
            type="submit"
            className="w-full mt-[20px] py-3 bg-[#088269] text-[#fff] rounded-full"
          >
            Регистрация
          </button>
        </form>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="isChecked"
            checked={formData.isChecked}
            onChange={handleChange}
            id="check"
            className="w-[20px] h-[20px]"
          />
          <label htmlFor="check" className="text-[13px]">
            Я соглашаюсь c обработкой персональных данных на условиях{" "}
            <span className="text-[#088269]">Политики конфиденциальности.</span>
          </label>
          {errors.isChecked && (
            <p className="text-red-500 text-xs mt-1">{errors.isChecked}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
