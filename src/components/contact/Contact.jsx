import React from "react";
import {
  KontactIcon1,
  KontactIcon2,
  KontactIcon3,
  KontactIcon4,
  KontactIcon5,
  KontactIcon6,
  KontactIcon7,
} from "../../assets/Contact";
const Contact = () => {
  return (
    <div>
      <div className="bg-[#f8f7f3]">
        <div className="max-w-[1350px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-[20px]">
            <div className="bg-[#fff] p-[30px]  rounded-lg">
              <h3 className="text-[30px] leading-[36px] pb-2">
                ООО Глобал Медикал Трейд
              </h3>
              <span className="flex gap-3.5">
                <div className="pt-1">
                  <KontactIcon1 />
                </div>
                <div className="">
                  <h3 className="text-[#7A7687] text-[16px]">
                    Юридический адрес:
                  </h3>
                  <p>Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
                </div>
              </span>{" "}
              <span className="flex gap-3.5 py-2">
                <div className="pt-1">
                  <KontactIcon1 />
                </div>
                <div className="">
                  <h3 className="text-[#7A7687] text-[16px]">
                    Фактический адрес:
                  </h3>
                  <p>Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
                </div>
              </span>{" "}
              <span className="flex gap-2">
                <div className="pt-1">
                  <KontactIcon2 />
                </div>
                <div className="">
                  <h3 className="text-[#7A7687] text-[16px]">Режим работы:</h3>
                  <p>Пн-Пт с 09:00-19:00</p>
                  <p> Сб-Вс - выходной</p>
                </div>
              </span>
              <h3 className="text-[18px] pt-[20px] pb-2">
                Звоните. Звонки по России бесплатны:
              </h3>
              <span className="flex gap-3.5">
                <div className="pt-1">
                  <KontactIcon3 />
                </div>
                <div className="">
                  <h3 className="text-[#7A7687] text-[16px]">Телефоны:</h3>
                  <span className="flex md:gap-4 xl:gap-6 flex-wrap">
                    <p> 8-800-000-00-00 </p>
                    <p>+7-000-000-00-00</p>
                    <p>+7-495-000-00-00</p>
                  </span>
                </div>
              </span>{" "}
              <span className="flex gap-3.5 py-2">
                <div className="pt-1">
                  <KontactIcon4 />
                </div>
                <div className="">
                  <h3 className="text-[#7A7687] text-[16px]">Пишиовые знания JavaScript и React;те:</h3>
                  <p>info@mail.ru</p>
                </div>
              </span>
              <div className="grid sm:grid-cols-2 gap-[30px] py-[20px]">
                <div className="flex justify-between  flex-col">
                  <h2>Реквизиты: </h2>
                  <div className="grid grid-cols-2 gap-4 pt-[20px]">
                    <div className="">
                      <h2 className="text-[#7A7687] text-[16px]">ИНН </h2>
                      <p>9717039181</p>
                    </div>
                    <div>
                      <h2 className="text-[#7A7687] text-[16px]">ОГРН </h2>
                      <p>1167746796986</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h2>Мы в соцсетях</h2>
                  <div className="flex gap-2 pt-[20px]">
                    <a href="#">
                      <KontactIcon5 />
                    </a>
                    <a href="#">
                      <KontactIcon6 />
                    </a>
                    <a href="#">
                      <KontactIcon7 />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fff] p-[30px] lg:p-[50px] hidden md:flex flex-col justify-between order-first sm:order-last rounded-xl">
              <div className="">
                <h3 className="text-[30px] text-[#202020]">
                  Остались вопросы?
                </h3>
                <p className=" text-[13px] md:text-[16px] text-[#7A7687] py-[20px]">
                  Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте
                  свои координаты и наш менеджер перезвонит вам через 10 минут
                </p>
                <div className=" flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="border-b py-2 outline-none w-full"
                  />
                  <input
                    type="text"
                    placeholder="Ваш телефон"
                    className="border-b py-2 outline-none w-full"
                  />
                  <input
                    type="text"
                    placeholder="Ваш email"
                    className="border-b py-2 outline-none w-full"
                  />
                  <textarea
                    type="text"
                    placeholder="Ваш вопрос"
                    className="border-b py-2 outline-none w-full resize-none h-[100px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6  pt-[20px]">
                <span>
                  <button className="text-[#fff] px-4 py-2 bg-[#088269] rounded-full">
                    Отправить
                  </button>
                </span>
                <p className="text-[12px] text-[#202020]">
                  Нажимая «Отправить», я соглашаюсь c обработкой персональных
                  данных на условиях Политики конфиденциальности.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f7f3]">
        <div className="max-w-[1350px] mx-auto py-[80px] px-5 grid sm:grid-cols-2  md:grid-cols-1 gap-3">
          <div className="border h-[612px]  rounded-xl overflow-hidden ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23985.317776691176!2d69.20951579999999!3d41.283519350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a4758a84dc7%3A0xd5e59538910cd043!2sGafur%20Gulyam%20Recreation%20Park!5e0!3m2!1sen!2s!4v1719390343527!5m2!1sen!2s"
              //   width="600"
              //   height="450"
              style={{ width: "100%", height: "100%" }}
              //   style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-[#fff] p-[30px] lg:p-[50px] flex md:hidden flex-col justify-between order-first sm:order-last rounded-xl">
            <div className="">
              <h3 className="text-[30px] text-[#202020]">Остались вопросы?</h3>
              <p className=" text-[13px] md:text-[16px] text-[#7A7687] py-[20px]">
                Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте
                свои координаты и наш менеджер перезвонит вам через 10 минут
              </p>
              <div className=" flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="border-b py-2 outline-none w-full"
                />
                <input
                  type="text"
                  placeholder="Ваш телефон"
                  className="border-b py-2 outline-none w-full"
                />
                <input
                  type="text"
                  placeholder="Ваш email"
                  className="border-b py-2 outline-none w-full"
                />
                <textarea
                  type="text"
                  placeholder="Ваш вопрос"
                  className="border-b py-2 outline-none w-full resize-none h-[100px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6  pt-[20px]">
              <span>
                <button className="text-[#fff] px-4 py-2 bg-[#088269] rounded-full">
                  Отправить
                </button>
              </span>
              <p className="text-[12px] text-[#202020]">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях Политики конфиденциальности.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
