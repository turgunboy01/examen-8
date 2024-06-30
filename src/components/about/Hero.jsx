import React from "react";
import img from "../../assets/about.png";
const Hero = () => {
  return (
    <div className="max-w-[1350px] mx-auto px-5 ">
      <div className="my-[30px]">
        <img src={img} alt="" />
      </div>
      <div className="grid grid-cols-2 my-[30px] pb-[50px] gap-[30px]">
        <h1 className="text-[48px]">Глобал медикал трейд</h1>
        <span>
          <p>
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии до ультразвуковых сканеров
            и ЛОР комбайнов. Переход на полностью цифровую платформу
            при диагностике и лечении заболеваний также стал серьёзным
            испытанием для большинства больниц и частных клиник.
          </p>
          <p>
            Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать
            специалистам всю необходимую помощь в деле поставок медицинского
            оборудования. Наш каталог включает передовое оборудование от лучших
            производителей России, Европы, Азии и США.
          </p>
        </span>
      </div>
      <div className="grid grid-cols-2 my-[30px] pb-[50px] gap-[30px]">
        <div className="">
          <h1 className="text-[30px] leading-[32px]">Цифры и факты</h1>
          <p className="text-[#20202078] text-[15px] pt-[20px]">
            Мы работаем на результат и продаём <br /> только качественную
            продукцию
          </p>
        </div>
        <div className="">
          <div className="flex items-center border-b py-3">
            <h1 className="w-1/3 text-[50px] text-[#088269]">7 лет</h1>
            <p className="w-2/3 text-[16px]">на рынке</p>
          </div>{" "}
          <div className="flex items-center border-b py-3">
            <h1 className="w-1/3 text-[50px] text-[#088269]">964+</h1>
            <p className="w-2/3 text-[16px]">
              оригинальной продукции со всего мира
            </p>
          </div>{" "}
          <div className="flex items-center border-b py-3">
            <h1 className="w-1/3 text-[50px] text-[#088269]">23+</h1>
            <p className="w-2/3 text-[16px]">
              международных сертификатов качества
            </p>
          </div>{" "}
          <div className="flex items-center  py-3">
            <h1 className="w-1/3 text-[50px] text-[#088269]">2452+</h1>
            <p className="w-2/3 text-[16px]">товаров всегда в наличии</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
