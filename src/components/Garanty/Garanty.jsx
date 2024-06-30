import React from "react";

import {
  CardIcon1,
  CardIcon2,
  CardIcon3,
  CardIcon4,
  CardIcon8,
  CartIcon9,
  CartIcon10,
  CardIcon7,
  CardIcon6,
} from "../../assets/HomeSvg";

const Garanty = () => {
  return (
    <div className="bg-[#f8f7f3] py-[60px]">
      <div className="max-w-[1350px] mx-auto px-5">
        <h2 className="text-[48px] leading-[52px]">Гарантии</h2>
        <p className="w-[50%] text-[16px] pt-[30px]">
          Регулярное сервисное обслуживание медицинской техники – залог ее
          надежной, беспроблемной эксплуатации, а также продолжительного срока
          службы. Периодическая диагностика позволяет выявить любые
          неисправности, отклонения от нормального рабочего режима на самых
          ранних сроках. Это предотвратит серьезные поломки, приводящие к
          дорогостоящим ремонтам.{" "}
        </p>
        <p className="py-[15px]">
          Являясь авторизованным дилером брендов, продукция которых представлена
          в каталоге, компания:
        </p>
        <div className="pl-3">
          <p>
            <span>1. </span> Предоставляет услуги сервисного и гарантийного
            обслуживания.
          </p>
          <p>
            <span>2. </span> Осуществляет поставку оригинальных запчастей и
            комплектующих.
          </p>
          <p>
            <span>3. </span>
            Обучает медицинский персонал работе с современным
            высокотехнологичным оборудованием.
          </p>
        </div>
        <p className="pt-[15px]">
          Глобал Медикал Трейд является надежным поставщиком медицинского
          оборудовани, предлагая своим клиентам качественную продукцию по лучшей
          цене. Наша компания гарантирует всем клиентам возможность
          воспользоваться услугами квалифицированных мастеров в установке,
          пуско-наладке, сервисном и техническом обслуживании приобретенного
          оборудования.
        </p>
      </div>
      <div className="max-w-[1350px] mx-auto px-5 py-[50px]">
        <h2 className="text-[30px] text-[#202020] pb-[30px]">
          Перечень гарантийных услуг
        </h2>
        <div className=" flex flex-wrap gap-2 ">
          <div className="w-[320px] h-[320px] border rounded-lg flex-col gap-2  flex justify-center items-center">
            <CartIcon9 />
            <h2 className="text-[#202020]">Быстрая доставка</h2>
          </div>
          <div className="w-[320px] h-[320px] rounded-lg border flex-col flex gap-2 justify-center items-center">
            <CardIcon6 />
            <h2 className="text-[#202020]">Весь товар сертифицирован</h2>
          </div>
          <div className="w-[320px] h-[320px] rounded-lg border flex-col flex gap-2 justify-center items-center">
            <CardIcon8 />
            <h2 className="text-[#202020]">Гибкая система скидок</h2>
          </div>
          <div className="w-[320px] h-[320px] rounded-lg border flex flex-col  gap-2 justify-center items-center">
            <CardIcon3 />
            <h2 className="text-[#202020]">Лет на рынке</h2>
          </div>
        </div>
      </div>
      <div className="max-w-[1350px] my-[30px] mx-auto px-5 py-[30px] rounded-lg bg-[#088269] grid grid-cols-2">
        <h2 className="text-[30px] text-[#fff] px-3 leading-[36px]">
          Внимание
        </h2>
        <div className="">
          <p className="text-[#fff]">
            Рассмотрение заявки на замену товара осуществляется в срок до 30
            дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при
            условии предоставления документов, перечисленных в договоре.
          </p>
          <p className="text-[#fff] pt-[15px]">
            Оформление гарантийного случая осуществляется согласно Гражданскому
            кодексу РФ, при условии предоставления документов, перечисленных в
            договоре и при наличии заявления с указанием причины возврата,
            оформленного надлежащим образом.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Garanty;
