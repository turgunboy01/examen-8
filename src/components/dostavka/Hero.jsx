import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5">
        <h2 className="text-[38px] leading-[52.8px] py-7 pt-[40px]">
          Информация о доставке
        </h2>
        <div className="border h-[312px] my-[30px] relative  rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23985.317776691176!2d69.20951579999999!3d41.283519350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a4758a84dc7%3A0xd5e59538910cd043!2sGafur%20Gulyam%20Recreation%20Park!5e0!3m2!1sen!2s!4v1719390343527!5m2!1sen!2s"
            width="600"
            //   height="450"
            style={{ width: "100%", height: "100%" }}
            //   style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <button className="absolute bottom-3 right-6 border px-5 py-2 rounded-full text-[#fff] bg-[#088269]">
            Пункт выдачи
          </button>
        </div>
        <div className="grid py-[30px] md:grid-cols-2">
          <h1 className="hidden md:block"></h1>
          <p className="text-[16px] text-[#202020] ">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии до ультразвуковых сканеров
            и ЛОР комбайнов. Переход на полностью цифровую платформу
            при диагностике и лечении заболеваний также стал серьёзным
            испытанием для большинства больниц и частных клиник.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
