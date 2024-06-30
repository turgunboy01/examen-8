import React from "react";
import img from "../../assets/podKluch.png";
const KobinetPodKluch = () => {
  return (
    <div className="bg-[#f8f7f3] py-[80px]">
      <div className="max-w-[1350px] mx-auto px-5">
        <h2 className="text-[48px] leading-[52.6px] py-[20px] pt-[60px]">
          Комплексное оснащение палаты реанимации и интенсивной терапии
        </h2>
        <img src={img} alt="" />
        <div className="grid grid-cols-2 gap-3 py-[20px]">
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
            <button className="text-[14px] py-[10px]  border-b-[2px] border-b-[#07745e]">
              Стандарты оснащения
            </button>
            <button className="text-[14px] py-[10px]   text-[#7A7687]">
              Список товаров
            </button>
          </div>
          <div className=" bg-[#fff] px-4  border-t">
            <div className="grid grid-cols-2 py-4">
              <div className="flex flex-col gap-1">
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">1.</span> Аппарат
                  искусственной вентиляции лёгких
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">2.</span> Аппарат
                  искусственной вентиляции легких транспортный
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">3.</span> Дыхательный
                  мешок для ручной искусственной вентиляции легких
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">4.</span> Монитор
                  пациента на 5 параметров
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">5.</span> Монитор
                  пациента на 8 параметров
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">6.</span> Шприцевой
                  насос
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">7.</span> Инфузионный
                  насос
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">8.</span> Набор для
                  интубации трахеи
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">9.</span> Дефибриллятор
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">10.</span> Матрац
                  термостабилизирующий
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">11.</span>{" "}
                  Автоматический анализатор газов крови
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">12.</span>{" "}
                  Электрокардиограф
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">13.</span>{" "}
                  Транспортируемый рентгеновский аппарат
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">14.</span> Портативный
                  ультразвуковой диагностический аппарат
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">15.</span> Кровать
                  трёхсекционная с ограждением
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">16.</span> Кровать-вес
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">17.</span>{" "}
                  Электроэнцефалограф 8-канальный
                </p>{" "}
                <p className="text-[12px] text-[#202020]">
                  <span className="text-[#7A7687] pr-1">18.</span>{" "}
                  Пневмокомпрессорная профилактика тромбоэмболических осложнений
                  и лимфостаза
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1350px] pt-[60px] px-5">
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
            <div className="flex gap-3 pt-[10px]">
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

export default KobinetPodKluch;
