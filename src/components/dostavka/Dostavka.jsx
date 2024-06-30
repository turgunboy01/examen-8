import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import KonsulTatsiya from "../ui/KonsulTatsiya";

const Dostavka = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Юридические лица",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
    {
      title: "Индивидуальные предприниматели",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
    {
      title: "Физические лица",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
  ];

  return (
    <div className="">
      <div className="bg-[]">
        <div className="max-w-[1350px] mx-auto px-5 py-[80px]">
          <div className="grid  grid-cols-2 ">
            <h1 className="text-[30px] leading-[36px] ">
              {" "}
              Вы сможете забрать оборудование{" "}
              <span className="text-[#088269]">самостоятельно</span> из нашего
              офиса
            </h1>
            <div className="grid grid-cols-2  gap-5">
              <div className="border rounded-lg p-4">
                <h2 className="pb-[10px] text-[19px] font-medium">Контакты</h2>
                <p className="text-[#7A7687] text-[14px]">+7 (000) 000-00-00</p>
                <p className="text-[#7A7687] text-[14px]">info@mail.ru</p>
              </div>{" "}
              <div className="border rounded-lg p-4">
                <h2 className="pb-[10px] text-[19px] font-medium">Контакты</h2>
                <p className="text-[#7A7687] text-[14px]">+7 (000) 000-00-00</p>
                <p className="text-[#7A7687] text-[14px]">info@mail.ru</p>
              </div>
            </div>
          </div>
          <div className="">
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
                Построить маршрут
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[80px] bg-[#e5e4ed]">
        <div className="mx-auto max-w-[1350px] flex gap-5 px-5">
          <div className="w-1/2 h-[300px]">
            <h3 className="text-[30px] text-[#222]">
              Документы, необходимые <br /> для получения груза
            </h3>
            <p className="text-[15px] w-[70%] pt-[20px]">
              По копиям доверенностей и доверенностям с незаполненными
              обязательными реквизитами отгрузка не производится
            </p>
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-t">
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex pt-[20px] items-center pb-[15px] justify-between"
                >
                  <h2 className="text-[18px] font-semibold text-[#333]">
                    {item.title}
                  </h2>
                  <button
                    className={`w-[40px] h-[40px] ${
                      activeIndex === index
                        ? "bg-[#088269] text-[#fff] rotate-45"
                        : "text-[#333] bg-transparent rotate-0"
                    } rounded-full border flex justify-center duration-300 items-center`}
                  >
                    <AiOutlinePlus size={20} />
                  </button>
                </div>
                <div
                  className={`${
                    activeIndex === index ? "h-[150px]" : "h-0"
                  } overflow-hidden duration-300`}
                >
                  <p className="text-[#222]">{item.content}</p>
                  <button className="flex mt-[20px] text-[#222] gap-1 items-center">
                    Подробнее <MdOutlineArrowOutward />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <KonsulTatsiya />
    </div>
  );
};

export default Dostavka;
