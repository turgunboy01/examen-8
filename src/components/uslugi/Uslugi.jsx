import React from "react";
import img1 from "../../assets/uslugi/uslug1.png";
import img2 from "../../assets/uslugi/uslug2.png";
import img3 from "../../assets/uslugi/uslug3.png";
import img4 from "../../assets/uslugi/uslug4.png";
import img5 from "../../assets/uslugi/uslug5.png";
import img6 from "../../assets/uslugi/uslug6.png";
import img7 from "../../assets/uslugi/uslug7.png";
import img8 from "../../assets/uslugi/uslug8.png";

const Uslugi = () => {
  const data = [
    {
      name: "Апробация",
      title: "Описание услуги",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. ",
      img: img1,
    },
    {
      name: "Помощь в подборе оборудования",
      title: "Описание услуги",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. ",
      img: img2,
    },
    {
      name: "Помощь инженеров в настройке",
      title: "Описание услуги",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. ",
      img: img3,
    },
    {
      name: "Пуско-наладочные работы",
      title: "Описание услуги",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. ",
      img: img4,
    },
    {
      name: "Обучение работе с оборудованием",
      title: "Описание услуги",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. ",
      img: img5,
    },
    {
      name: "Подменный аппарат",
      title: "Описание услуги",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. ",
      img: img6,
    },
    {
      name: "Работа с учебными центрами повышения квалификации медицинского персонала",
      title: "Описание услуги",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения. ",
      img: img7,
    },
    {
      name: "Организация обучения врачей на собственной территории",
      title: "Описание услуги",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних. ",
      img: img8,
    },
  ];
  return (
    <div className="bg-[#f8f7f3] py-[70px]">
      <div className="max-w-[1350px] mx-auto px-5">
        <h1 className="text-[48px] leading-[56px] py-[30px]">Услуги</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          {data.map((item) => (
            <div className="flex flex-col md:flex-row  rounded-lg bg-[#fff]">
              <div className="p-[20px] w-full md:w-[55%] md:order-first order-last flex flex-col justify-between">
                <div className="">
                  <h2 className="text-[18px] font-medium">{item.name}</h2>
                  <p className="text-[#7A7687] text-[12px] py-2">
                    {item.title}
                  </p>
                  <p className="text-[15px]">{item.desc}</p>
                </div>
                <span>
                  {" "}
                  <button className="text-[#088269] py-2 px-5 m border rounded-full">
                    Заказать
                  </button>
                </span>
              </div>
              <div className="w-full md:w-[45%]">
                <img src={item.img} className="w-full h-full" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uslugi;
