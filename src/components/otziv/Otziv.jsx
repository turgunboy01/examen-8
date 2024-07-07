import React from "react";
import { OtzivIcons } from "../../assets/HomeSvg";
import img from "../../assets/otziv.png";

const Otziv = () => {
  const slide = [
    {
      id: 1,
      name: "ООО Название компании",
      title: "Михаил Булич Андреевич, Директор",
      desc: "Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в  производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования   материально-технической и кадровой базы. Господа, повышение уровня    гражданского сознания играет определяющее значение для стандартных   подходов. План целого ряда внеочередных мероприятий с учётом   комплекса.",
      time: "14.03.2023",
    },
    {
      id: 2,
      name: "ООО Название компании",
      title: "Михаил Булич Андреевич, Директор",
      desc: "Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в  производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования   материально-технической и кадровой базы. Господа, повышение уровня    гражданского сознания играет определяющее значение для стандартных   подходов. План целого ряда внеочередных мероприятий с учётом   комплекса.",
      time: "14.03.2023",
    },
    {
      id: 3,
      name: "ООО Название компании",
      title: "Михаил Булич Андреевич, Директор",
      desc: "Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в  производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования   материально-технической и кадровой базы. Господа, повышение уровня    гражданского сознания играет определяющее значение для стандартных   подходов. План целого ряда внеочередных мероприятий с учётом   комплекса.",
      time: "14.03.2023",
    },
    {
      id: 4,
      name: "ООО Название компании",
      title: "Михаил Булич Андреевич, Директор",
      desc: "Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в  производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования   материально-технической и кадровой базы. Господа, повышение уровня    гражданского сознания играет определяющее значение для стандартных   подходов. План целого ряда внеочередных мероприятий с учётом   комплекса.",
      time: "14.03.2023",
    },
    {
      id: 5,
      name: "ООО Название компании",
      title: "Михаил Булич Андреевич, Директор",
      desc: "Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в  производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования   материально-технической и кадровой базы. Господа, повышение уровня    гражданского сознания играет определяющее значение для стандартных   подходов. План целого ряда внеочередных мероприятий с учётом   комплекса.",
      time: "14.03.2023",
    },
    {
      id: 6,
      name: "ООО Название компании",
      title: "Михаил Булич Андреевич, Директор",
      desc: "Каждый из нас понимает очевидную вещь: понимание сути ресурсосберегающих технологий создаёт необходимость включения в  производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов формирования   материально-технической и кадровой базы. Господа, повышение уровня    гражданского сознания играет определяющее значение для стандартных   подходов. План целого ряда внеочередных мероприятий с учётом   комплекса.",
      time: "14.03.2023",
    },
  ];

  return (
    <div className="bg-[#f8f7f3] py-[50px]">
      <div className="max-w-[1350px] mx-auto px-5">
        <h2 className=" text-[30px] md:text-[48px] md:leading-[52px] pb-[20px]">Отзывы</h2>
        <div className="grid sm:grid-cols-2 gap-5 ">
          {slide.map((item) => (
            <div key={item.id} className="bg-[#fff] rounded-lg p-6 border">
              <div className="flex justify-between">
                <div className="flex  items-center gap-3">
                  <img src={img} alt="" />
                  <span>
                    <h2>{item.name}</h2>
                    <p className="text-[12px] text-[#7A7687]">{item.title}</p>
                    <p></p>
                  </span>
                </div>
                <p className="text-[12px]">{item.time}</p>
              </div>
              <p className="text-[#7A7687] pt-[10px] text-[12px] sm:text-[14px] md:text-[16px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Otziv;
