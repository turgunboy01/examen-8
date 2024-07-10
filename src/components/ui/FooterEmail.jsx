import React, { useState } from "react";
import { EmailIcons } from "../../assets/FooterSvg";

const FooterEmail = () => {
  const [email, setEmail] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Введите email");
    } else if (!validateEmail(email)) {
      setError("Некорректный email");
    } else if (!checkbox) {
      setError("Необходимо дать согласие на обработку персональных данных");
    } else {
      setError("");
      // Handle successful form submission here (e.g., send the data to an API)
      console.log("Form submitted successfully:", { email, checkbox });
      // Reset form fields
      setEmail("");
      setCheckbox(false);
    }
  };

  return (
    <div className="bg-[#e5e4ed]">
      <div className="max-w-[1350px] mx-auto px-5 grid py-[40px] grid-cols-2 gap-10">
        <EmailIcons />
        <div className="py-[30px] relative">
          <h2 className="text-[30px] font-medium leading-[36px]">
            Подпишитесь и будьте в курсе!
          </h2>
          <p className="text-[16px] pt-[15px] pb-[25px] text-[#7A7687]">
            Акции, скидки, распродажи ждут!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="bg-[#fff] w-full flex justify-between rounded-full">
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="Введите email"
                className="px-4 py-3 border-none w-full rounded-full outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-full hover:bg-[#07745E] bg-[#088269] text-white"
              >
                Подписаться
              </button>
            </div>
            {error && <p className="text-red-500 text-[14px] pt-2">{error}</p>}
            <span className="flex gap-3 pt-[15px] items-center">
              <input
                type="checkbox"
                checked={checkbox}
                onChange={handleCheckboxChange}
              />
              <p>Я даю согласие на обработку своих персональных данных.</p>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterEmail;
