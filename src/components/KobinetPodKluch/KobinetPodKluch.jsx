import React, { useState } from "react";
import img from "../../assets/podKluch.png";
import Standart from "./Standart";
import ProductArray from "./ProductArray";
import { useParams } from "react-router-dom";
import { PodKluchData } from "../../data/SlidesData";
const KobinetPodKluch = () => {
  const { id } = useParams();
  const product = PodKluchData.find((item) => item.id == id);
  console.log(product);

  const [standart, setStandart] = useState(true);
  return (
    <div className="bg-[#f8f7f3] py-[20px]">
      <div className="max-w-[1350px] mx-auto px-5">
        <h2 className="text-[48px] leading-[52.6px] py-[20px] pt-[60px]">
          Комплексное оснащение палаты реанимации и интенсивной терапии
        </h2>
        <img src={product.img} alt="" className="w-full" />
        <div className="grid lg:grid-cols-2 gap-3 py-[20px]">
          <h1></h1>
          <div className="">
            <p className="pb-[20px] text-[14px]">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров
              и ЛОР комбайнов. Переход на полностью цифровую платформу
              при диагностике и лечении заболеваний также стал серьёзным
              испытанием для большинства больниц и частных клиник.{" "}
            </p>
            <a href="#" className="text-[#07745E] pt-[10px] text-[12px]">
              Скачать каталог "Стандарты оснащения отделений"
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1350px] mx-auto px-5">
        <div className=" border rounded-lg ">
          <div className="flex gap-5 px-4 ">
            <button
              onClick={() => setStandart(true)}
              className={`text-[14px] py-[10px] ${
                standart
                  ? "border-b-[2px] border-b-[#07745e]"
                  : "text-[#7A7687]"
              }  `}
            >
              Стандарты оснащения
            </button>
            <button
              onClick={() => setStandart(false)}
              className={`text-[14px] py-[10px] ${
                standart
                  ? "text-[#7A7687]"
                  : "border-b-[2px] border-b-[#07745e]"
              }  `}
            >
              Список товаров
            </button>
          </div>

          {standart ? <Standart /> : <ProductArray />}
        </div>
      </div>
      <div className="mx-auto max-w-[1350px] pt-[60px] px-5">
        <div className="bg-[#fff] rounded-lg border p-5 grid sm:grid-cols-2 ">
          <div className="">
            <h2 className="text-[20px] md:text-[30px] pb-[15px]  leading-[22px] md:leading-[36px]">
              Закажите у нас комплеское <br /> оснащение
            </h2>
          </div>
          <div className="">
            <input
              type="number"
              placeholder="Ваш телефон"
              className="border-b py-2 outline-none resize-none w-full"
            />
            <div className="flex gap-3 pt-[10px]">
              <button className="px-4 py-1 h-[40px] text-[15px] bg-[#088269] text-white rounded-full border ">
                Заказать
              </button>
              <p className="text-[12px] text-[#7A7687]">
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

export default KobinetPodKluch;
