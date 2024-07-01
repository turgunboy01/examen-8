import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";

const AccardionWhite = () => {
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
    <>
      <div className="py-[80px] bg-[#e5e4ed]">
        <div className="mx-auto max-w-[1350px] flex sm:flex-row flex-col gap-5 px-5">
          <div className="sm:w-1/2 w-full ">
            <h3 className="text-[30px] text-[#222]">
              Документы, необходимые для получения груза
            </h3>
            <p className="text-[15px] w-[70%] pt-[20px]">
              По копиям доверенностей и доверенностям с незаполненными
              обязательными реквизитами отгрузка не производится
            </p>
          </div>
          <div className="sm:w-1/2 w-full flex flex-col gap-5">
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
                    activeIndex === index ? "h-[200px]" : "h-0"
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
    </>
  );
};

export default AccardionWhite;
