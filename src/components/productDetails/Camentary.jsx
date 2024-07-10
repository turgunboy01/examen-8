import React, { useState } from "react";
import img1 from "../../assets/uslugi/uslugi9.png";

import img2 from "../../assets/uslugi/uslugi10.png";
import img3 from "../../assets/uslugi/uslugi11.png";
import img4 from "../../assets/uslugi/uslugi12.png";
const Camentary = () => {
  const [state, setState] = useState("1");
  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5  hidden lg:block  ">
        <div className="border rounded-xl overflow-hidden  ">
          <div className="flex gap-3 border-b px-5 ">
            <button
              onClick={() => setState("1")}
              className={`py-3 text-[12px] lg:text-[14px] px-2 lg:px-5 ${
                state == "1"
                  ? "border-b-[2px] text-[] border-b-[#07745e]"
                  : "text-[#7A7687]"
              }`}
            >
              Описание оборудования
            </button>
            <button
              className={`py-3 text-[12px] lg:text-[14px]  px-2 lg:px-5 ${
                state == "2"
                  ? "border-b-[2px] text-[] border-b-[#07745e]"
                  : "text-[#7A7687]"
              }`}
              onClick={() => setState("2")}
            >
              Характеристики и документы
            </button>
            <button
              onClick={() => setState("3")}
              className={`py-3 text-[12px] lg:text-[14px] px-2 lg:px-5 ${
                state == "3"
                  ? "border-b-[2px]  border-b-[#07745e]"
                  : "text-[#7A7687]"
              }`}
            >
              Услуги и сервис
            </button>
            <button
              onClick={() => setState("4")}
              className={`py-3 text-[12px] lg:text-[14px]  px-2 lg:px-5 ${
                state == "4"
                  ? "border-b-[2px] text-[] border-b-[#07745e]"
                  : "text-[#7A7687]"
              }`}
            >
              Оптовым покупателям
            </button>
          </div>
          <div className=" border-b">
            {state == "1" && (
              <div className="bg-[#fff] p-[20px]">
                <h1>Описание оборудования</h1>
                <p className="text-[12px] pb-1 pt-[10px]  text-[#7A7687]">
                  Биохимический анализатор Mindr UA-66 оснащен открытой
                  платформой для загрузки образцов и отлично размещается на
                  столе в кабинете врача. Функциональная сочетаемость с
                  дополнительным модулем ISE обеспечивает увеличение
                  «скорострельности» прибора от 100 до 300 обработанных пробирок
                  с биоматериалом в час, а также позволит замерять показатели K,
                  Na, Cl и Li в плазме, моче, цереброспинальной жидкости вместе
                  с другими важными параметрами исследования.
                </p>
                <p className="text-[12px] pb-1 pt-[10px]  text-[#7A7687]">
                  Прибор интуитивно понятен в использовании и техобслуживании,
                  экономен в части финансовых затрат не реагенты. Что важно,
                  калибровка системы аналогична той, что установлена на более
                  современной аппаратуре, и это – идеальный вариант для
                  небольших лабораторий, поскольку емкость погрузчика для проб
                  меньше, чем у мощного оборудования.
                </p>
                <p className="text-[12px] pb-1 pt-[10px]  text-[#7A7687]">
                  Только небольшая загрузочная емкость для образцов и химических
                  компонентов, если сравнивать с передовой аналогичной техникой,
                  не позволяет этой системе претендовать на принятие в ряды
                  аппаратуры, которой оснащены крупномасштабные лаборатории.
                </p>
              </div>
            )}
            {state == "2" && (
              <div className="bg-[#fff] p-[20px]">
                <div className="">
                  <h2 className="">Технические характеристики</h2>
                  <div className="grid grid-cols-2">
                    <div className="">
                      <p className="text-[12px] pb-1 pt-[10px]  text-[#7A7687]">
                        Вес оборудования . . . . . . . . . . .{" "}
                        <span className="text-[#000] pl-1">90 кг</span>
                      </p>{" "}
                      <p className="text-[12px] py-1 text-[#7A7687]">
                        Детектор . . . . . . . . . . . . . . . . . . . .{" "}
                        <span className="text-[#000] pl-1">
                          CsI - на основе аморфного кремния
                        </span>
                      </p>{" "}
                      <p className="text-[12px] py-1 text-[#7A7687]">
                        Время сканирования . . . . . . . . .{" "}
                        <span className="text-[#000] pl-1">
                          PAN стандарт - 12 сек
                        </span>
                      </p>{" "}
                      <p className="text-[12px] py-1 text-[#7A7687]">
                        Размер фокусного пятна . . . . . .
                        <span className="text-[#000] pl-1">0.6</span>
                      </p>{" "}
                      <p className="text-[12px] py-1 text-[#7A7687]">
                        Динамический диапазон . . . . . .
                        <span className="text-[#000] pl-1">
                          16 бит (65 536 градации серого)
                        </span>
                      </p>
                    </div>
                    <div className="">
                      <p className="text-[12px] py-1 text-[#7A7687]">
                        Рабочее напряжение . . . . . . . . .
                        <span className="text-[#000] pl-1">90 кг</span>
                      </p>{" "}
                      <p className="text-[12px] py-1  text-[#7A7687]">
                        Максимальный ток . . . . . . . . . . .
                        <span className="text-[#000] pl-1">
                          CsI - на основе аморфного кремния
                        </span>
                      </p>{" "}
                      <p className="text-[12px] py-1  text-[#7A7687]">
                        Гарантия . . . . . . . . . . . . . . . . . . . . .
                        <span className="text-[#000] pl-1">
                          PAN стандарт - 12 сек
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {state == "3" && (
              <div className="bg-[#fff] p-[20px]">
                <h1 className="text-[18px] text-[#202020] pb-5">
                  Услуги и сервис
                </h1>
                <div className="overflow-x-scroll scrollNotFound">
                  <div className="grid grid-cols-4 gap-4 min-w-max">
                    <div className="border rounded-md overflow-hidden">
                      <img src={img1} alt="" className="w-full" />
                      <p className="p-4">Апробация</p>
                    </div>
                    <div className="border rounded-md overflow-hidden">
                      <img src={img2} alt="" className="w-full" />
                      <p className="p-4">Помощь в подборе оборудования</p>
                    </div>
                    <div className="border rounded-md overflow-hidden">
                      <img src={img3} alt="" className="w-full" />
                      <p className="p-4">Помощь инженеров в настройке</p>
                    </div>
                    <div className="border rounded-md overflow-hidden">
                      <img src={img4} alt="" className="w-full" />
                      <p className="p-4">Пуско-наладочные работы</p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center pt-[20px]">
                  <button className="text-[#fff] text-[15px] font-semibold bg-[#088269] py-2 px-5 rounded-full">
                    Все услуги
                  </button>
                </div>
              </div>
            )}
            {state == "4" && (
              <div className="bg-[#fff] p-[20px]">
                <h1>Оптовым покупателям</h1>
                <p className="text-[12px] pb-1 pt-[10px]  text-[#7A7687]">
                  Только небольшая загрузочная емкость для образцов и химических
                  компонентов, если сравнивать с передовой аналогичной техникой,
                  не позволяет этой системе претендовать на принятие в ряды
                  аппаратуры, которой оснащены крупномасштабные лаборатории.
                </p>
                <h2 className="pt-3">Заголовок</h2>
                <p className="text-[12px] pb-1 pt-[10px]  text-[#7A7687]">
                  Только небольшая загрузочная емкость для образцов и химических
                  компонентов, если сравнивать с передовой аналогичной техникой,
                  не позволяет этой системе претендовать на принятие в ряды
                  аппаратуры, которой оснащены крупномасштабные лаборатории.
                </p>
                <p className="text-[12px] pb-1 pt-[10px]  text-[#088269]">
                  Реквизиты для оформеления заказа
                </p>
              </div>
            )}
          </div>
          <div className="flex gap-7 border-b px-5 text-[#07745E] py-2 overflow-hidden ">
            <button className={` text-[12px]  `}>Новинки</button>
            <button className={`text-[12px]  `}>Получить прайс</button>
            <button className={` text-[12px] `}>Условия доставки</button>
            <button className={` text-[12px]  `}>Оптовым покупателям</button>
            <button className={` text-[12px] `}>Способы оплаты</button>
          </div>
        </div>
      </div>
      <div className="max-w-[1350px] mx-auto px-5  ">
        <div className="bg-[#fff]  mt-[30px] border rounded-xl ">
          <h1 className="border-b px-[20px] py-[10px] w-full border-b-[#E5E2EE]">
            Описание оборудования
          </h1>
          <div className="px-[20px] py-[10px]">
            <p className="text-[12px]  pb-1 pt-[10px]  text-[#7A7687]">
              Биохимический анализатор Mindr UA-66 оснащен открытой платформой
              для загрузки образцов и отлично размещается на столе в кабинете
              врача. Функциональная сочетаемость с дополнительным модулем ISE
              обеспечивает увеличение «скорострельности» прибора от 100 до 300
              обработанных пробирок с биоматериалом в час, а также позволит
              замерять показатели K, Na, Cl и Li в плазме, моче,
              цереброспинальной жидкости вместе с другими важными параметрами
              исследования.
            </p>
            <p className="text-[12px] pb-1 pt-[10px]  text-[#7A7687]">
              Прибор интуитивно понятен в использовании и техобслуживании,
              экономен в части финансовых затрат не реагенты. Что важно,
              калибровка системы аналогична той, что установлена на более
              современной аппаратуре, и это – идеальный вариант для небольших
              лабораторий, поскольку емкость погрузчика для проб меньше, чем у
              мощного оборудования.
            </p>
            <p className="text-[12px] pb-1 pt-[10px]  text-[#7A7687]">
              Только небольшая загрузочная емкость для образцов и химических
              компонентов, если сравнивать с передовой аналогичной техникой, не
              позволяет этой системе претендовать на принятие в ряды аппаратуры,
              которой оснащены крупномасштабные лаборатории.
            </p>
          </div>
        </div>
        <div className="bg-[#fff] mt-[30px] rounded-xl border">
          <div className="">
            <h2 className=" border-b py-[10px] px-5">
              Технические характеристики
            </h2>
            <div className="grid md:grid-cols-2 px-5 py-[10px]">
              <div className="">
                <p className="text-[12px] flex flex-col sm:flex-row  pb-1 pt-[10px]  text-[#7A7687]">
                  Вес оборудования <p className="hidden md:block">. . . . . . . . . . .</p>
                  <span className="text-[#000] pl-1">90 кг</span>
                </p>{" "}
                <p className="text-[12px] flex flex-col sm:flex-row py-1 text-[#7A7687]">
                  Детектор <p className="hidden md:block">. . . . . . . . . . . . . . . . . . . .</p>
                  <span className="text-[#000] pl-1">
                    CsI - на основе аморфного кремния
                  </span>
                </p>{" "}
                <p className="text-[12px] flex flex-col sm:flex-row  py-1 text-[#7A7687]">
                  Время сканирования <p className="hidden md:block">. . . . . . . . .</p>
                  <span className="text-[#000] pl-1">
                    PAN стандарт - 12 сек
                  </span>
                </p>{" "}
                <p className="text-[12px] flex flex-col sm:flex-row  py-1 text-[#7A7687]">
                  Размер фокусного пятна <p className="hidden md:block">. . . . . .</p>
                  <span className="text-[#000] pl-1">0.6</span>
                </p>{" "}
                <p className="text-[12px] py-1 flex flex-col sm:flex-row  text-[#7A7687]">
                  Динамический диапазон <p className="hidden md:block">. . . . . .</p>
                  <span className="text-[#000] pl-1">
                    16 бит (65 536 градации серого)
                  </span>
                </p>
              </div>
              <div className="">
                <p className="text-[12px] flex flex-col sm:flex-row  py-1 text-[#7A7687]">
                  Рабочее напряжение <p className="hidden md:block">. . . . . . . . .</p>
                  <span className="text-[#000] pl-1">90 кг</span>
                </p>{" "}
                <p className="text-[12px] py-1 flex  flex-col sm:flex-row   text-[#7A7687]">
                  Максимальный ток <p className="hidden md:block">. . . . . . . . . . .</p>
                  <span className="text-[#000] pl-1">
                    CsI - на основе аморфного кремния
                  </span>
                </p>{" "}
                <p className="text-[12px] py-1 flex  flex-col sm:flex-row  text-[#7A7687]">
                  Гарантия{" "}
                  <p className="hidden md:block">
                    . . . . . . . . . . . . . . . . . . . . .
                  </p>
                  <span className="text-[#000] pl-1">
                    PAN стандарт - 12 сек
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] mt-[30px] border rounded-lg ">
          <h1 className="text-[18px] text-[#202020] py-[10px] border-b px-5">
            Услуги и сервис
          </h1>
          <div className="py-[10px] pb-5 px-5 scrollNotFound overflow-x-scroll">
            <div className="flex gap-4">
              <div className="border rounded-md overflow-hidden flex-shrink-0">
                <img src={img1} alt="" className="w-full" />
                <p className="p-4">Апробация</p>
              </div>
              <div className="border rounded-md overflow-hidden flex-shrink-0">
                <img src={img2} alt="" className="w-full" />
                <p className="p-4">Помощь в подборе оборудования</p>
              </div>
              <div className="border rounded-md overflow-hidden flex-shrink-0">
                <img src={img3} alt="" className="w-full" />
                <p className="p-4">Помощь инженеров в настройке</p>
              </div>
              <div className="border rounded-md overflow-hidden flex-shrink-0">
                <img src={img4} alt="" className="w-full" />
                <p className="p-4">Пуско-наладочные работы</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] mt-[30px] rounded-lg border">
          <h1 className=" px-[20px] py-[10px] border-b ">
            Оптовым покупателям
          </h1>
          <div className="px-5 py-[10px]">
            <p className="text-[12px] pb-1 pt-[10px]  text-[#7A7687]">
              Только небольшая загрузочная емкость для образцов и химических
              компонентов, если сравнивать с передовой аналогичной техникой, не
              позволяет этой системе претендовать на принятие в ряды аппаратуры,
              которой оснащены крупномасштабные лаборатории.
            </p>
            <h2 className="pt-3">Заголовок</h2>
            <p className="text-[12px] pb-1 pt-[10px]  text-[#7A7687]">
              Только небольшая загрузочная емкость для образцов и химических
              компонентов, если сравнивать с передовой аналогичной техникой, не
              позволяет этой системе претендовать на принятие в ряды аппаратуры,
              которой оснащены крупномасштабные лаборатории.
            </p>
            <p className="text-[12px] pb-1 pt-[10px]  text-[#088269]">
              Реквизиты для оформеления заказа
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camentary;
