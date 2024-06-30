import React from "react";
import img1 from "../../assets/countryBrend.png";
import img2 from "../../assets/countryBrend2.png";
// import img2 from "../../assets/statya2.png";

const CountryBrend = () => {
  return (
    <div className="bg-[]">
      <div className="max-w-[1350px] mx-auto px-5">
        <h2 className="text-[48px] leading-[52.8px] pt-[30px]">
          Медецинское оборудование Draeger
        </h2>

        <div className="grid grid-cols-2 py-[50px] gap-[20px]">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
        <div className="grid grid-cols-2 py-[50px] gap-[20px]">
          <h1></h1>
          <div className="">
            <p>
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров
              и ЛОР комбайнов. Переход на полностью цифровую платформу
              при диагностике и лечении заболеваний также стал серьёзным
              испытанием для большинства больниц и частных клиник.{" "}
            </p>
            <p className="pt-[15px]">
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
    </div>
  );
};

export default CountryBrend;
