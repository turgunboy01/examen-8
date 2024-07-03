import React from "react";

const PodkluchCom = () => {
  return (
    <div className="bg-[#f8f7f3]">
      <div className="mx-auto max-w-[1350px] py-[60px] px-5">
        <div className="bg-[#fff] rounded-lg border p-5 grid grid-cols-2 ">
          <div className="">
            <h2 className="text-[30px] leading-[36px]">
              Закажите у нас комплеское <br /> оснащение
            </h2>
          </div>
          <div className="">
            <input
              type="number"
              placeholder="Ваш телефон"
              className="border-b py-2 outline-none resize-none w-full"
            />
            <div className="flex gap-3 pt-[20px]">
              <button className="px-4 py-1 text-[15px] bg-[#088269] text-white rounded-full border ">
                Заказать
              </button>
              <p className="text-[12px]">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях{" "}
                <span className="text-[#088269]">
                  Политики конфиденциальности.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodkluchCom;
