import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let isValid = true;
    let errors = {};

    if (!formData.name) {
      isValid = false;
      errors.name = "Имя обязательно.";
    }

    if (!formData.phone) {
      isValid = false;
      errors.phone = "Телефон обязателен.";
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
      isValid = false;
      errors.phone = "Введите действительный номер телефона.";
    }

    if (!formData.email) {
      isValid = false;
      errors.email = "Email обязателен.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errors.email = "Введите действительный email.";
    }

    if (!formData.question) {
      isValid = false;
      errors.question = "Вопрос обязателен.";
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data submitted:", formData);
      // Here you can handle the form submission, e.g., send the data to a server
    }
  };

  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto py-[80px] px-5 grid grid-cols-1  md:grid-cols-2 gap-3">
        <div className="border h-[612px]  rounded-xl overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23985.317776691176!2d69.20951579999999!3d41.283519350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a4758a84dc7%3A0xd5e59538910cd043!2sGafur%20Gulyam%20Recreation%20Park!5e0!3m2!1sen!2s!4v1719390343527!5m2!1sen!2s"
            style={{ width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-[#fff] p-[30px] lg:p-[50px] flex flex-col justify-between order-first md:order-last rounded-xl">
          <form onSubmit={handleSubmit}>
            <div>
              <h3 className="text-[30px] text-[#202020]">Остались вопросы?</h3>
              <p className="text-[16px] text-[#7A7687] py-[20px]">
                Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте
                свои координаты и наш менеджер перезвонит вам через 10 минут
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  className="border-b py-2 outline-none w-full"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ваш телефон"
                  className="border-b py-2 outline-none w-full"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ваш email"
                  className="border-b py-2 outline-none w-full"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  placeholder="Ваш вопрос"
                  className="border-b py-2 outline-none w-full resize-none h-[100px]"
                />
                {errors.question && (
                  <p className="text-red-500">{errors.question}</p>
                )}
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <button
                type="submit"
                className="text-[#fff] px-4 py-2 bg-[#088269] rounded-full"
              >
                Отправить
              </button>
              <p className="text-[12px] text-[#202020]">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях Политики конфиденциальности.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
