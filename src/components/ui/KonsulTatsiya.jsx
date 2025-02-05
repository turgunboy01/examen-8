import React from "react";

const KonsulTatsiya = () => {
  return (
    <div className="bg-[#f8f7f3] py-[80px]">
      <div className="mx-auto max-w-[1350px] px-5 grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <div className="hidden sm:block">
          <h2 className="text-[30px] leading-[36px] pb-5">
            Вам нужна консультация?
          </h2>
          <p className="w-[80%]">
            Задайте их по номеру телефона{" "}
            <span className="text-[#088269]">+7 (495) 000-00-00</span> или
            оставьте свои координаты и наш менеджер перезвонит вам через 10
            минут
          </p>
        </div>
        <div className="bg-[#fff] p-[30px] border rounded-lg">
          <div className="pb-[10px] block sm:hidden">
            <h2 className="text-[30px] leading-[36px] pb-5">
              Вам нужна консультация?
            </h2>
            <p className="w-[80%]">
              Задайте их по номеру телефона{" "}
              <span className="text-[#088269]">+7 (495) 000-00-00</span> или
              оставьте свои координаты и наш менеджер перезвонит вам через 10
              минут
            </p>
          </div>
          <input
            type="text"
            className="w-full border-b py-2 outline-none"
            placeholder="Ваше имя"
          />{" "}
          <input
            type="text"
            className="w-full border-b py-2 outline-none"
            placeholder="Ваш телефон"
          />{" "}
          <input
            type="text"
            className="w-full border-b py-2 outline-none"
            placeholder="Ваш email"
          />{" "}
          <textarea
            type="text"
            className="w-full border-b py-2 h-[100px] resize-none outline-none"
            placeholder="Ваш вопрос"
          />
          <div className="flex gap-5 sm:flex-row flex-col  pt-5">
            <button className="px-3 text-[14px] py-1 h-[40px] w-[105px]  rounded-full hover:bg-[#07745E] bg-[#088269] text-[#fff]">
              Отправить
            </button>{" "}
            <p className="text-[12px] md:text-[13px]">
              Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
              на условиях{" "}
              <span className="text-[#088269]">
                Политики конфиденциальности.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KonsulTatsiya;
