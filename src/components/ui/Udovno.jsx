import React from "react";
import { CardIcon5, CardIcon6, CardIcon7, CardIcon8 } from "../../assets/HomeSvg";
const Udovno = () => {
  return (
    <div className="bg-[#f8f7f3] py-[80px]">
      <div className="max-w-[1350px] mx-auto px-5">
        <div className="">
          <div className="flex justify-between items-center pb-[20px]">
            <h2 className="text-[30px] text-[#202020] pb-[30px]">
              С нами выгодно и удобно
            </h2>
            <button className="px-5 py-3 rounded-full border text-[14px] text-[#fff] bg-[#088269]">
              Проверить статус доставки
            </button>
          </div>
          <div className=" flex flex-wrap gap-2 ">
            <div className="w-[320px] h-[320px] border rounded-lg flex-col gap-2 text-center  flex justify-center items-center">
              <CardIcon5 />
              <h2 className="text-[#202020] pt-[10px]">
                Доставка <br /> по всей России
              </h2>
            </div>
            <div className="w-[320px] h-[320px] rounded-lg border flex-col text-center flex gap-2 justify-center items-center">
              <CardIcon6 />
              <h2 className="text-[#202020] pt-[15px]">
                Собственный склад <br /> с продукцией
              </h2>
            </div>
            <div className="w-[320px] h-[320px] rounded-lg border flex-col text-center flex gap-2 justify-center items-center">
              <CardIcon7 />
              <h2 className="text-[#202020] pt-[10px]">
                Весь товар <br /> сертифицирован
              </h2>
            </div>
            <div className="w-[320px] h-[320px] rounded-lg border text-center  flex flex-col  gap-2 justify-center items-center">
              <CardIcon8 />
              <h2 className="text-[#202020]  pt-[10px]">
                Безопасные <br /> способы оплаты
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 py-[80px]">
          <div className="">
            <h2 className="text-[30px] pb-[15px] leading-[36px]">
              Правила получения <br /> товара в пункте выдачи
            </h2>
            <p className="text-[14px] w-[70%]">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим обновления приборов.
            </p>
          </div>
          <div className="">
            <div className="">
              <h1 className="text-[18px] py-[20px] border-t">
                Подготовить документы
              </h1>
              <p className="text-[16px] text-[#7A7687]">
                Предварительно ознакомиться с условиями выдачи грузов на сайте и
                подготовьте нужные документы
              </p>
            </div>
            <div className="py-[20px]">
              <h1 className="text-[18px] py-[20px] border-t">
                Подготовить документы
              </h1>
              <p className="text-[16px] text-[#7A7687]">
                Предварительно ознакомиться с условиями выдачи грузов на сайте и
                подготовьте нужные документы
              </p>
            </div>
            <div className="">
              <h1 className="text-[18px] py-[20px] border-t">
                Подготовить документы
              </h1>
              <p className="text-[16px] text-[#7A7687]">
                Предварительно ознакомиться с условиями выдачи грузов на сайте и
                подготовьте нужные документы
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Udovno;
