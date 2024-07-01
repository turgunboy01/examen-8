import React from "react";
import Contact from "../../components/home/Contact";
import Sertificat from "../../components/ui/Sertificat";
import Uslugi from "../../components/uslugi/Uslugi";

const UslugiPage = () => {
  return (
    <div>
      <Uslugi />
      <div className="bg-[#f8f7f3] py-[70px]">
        <div className="max-w-[1350px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 my-[30px] pb-[50px] gap-[30px]">
            <div className="">
              <h1 className="text-[30px] leading-[32px]">Цифры и факты</h1>
              <p className="text-[#20202078] text-[15px] pt-[20px]">
                Мы работаем на результат и продаём <br /> только качественную
                продукцию
              </p>
            </div>
            <div className="">
              <div className="flex items-center  border-b py-3">
                <h1 className="w-[45%] text-[34px] md:text-[50px] text-[#088269]">
                  7 лет
                </h1>
                <p className="w-[55%] text-[14px] md:text-[16px]">на рынке</p>
              </div>{" "}
              <div className="flex items-center border-b py-3">
                <h1 className="w-[45%] text-[34px] md:text-[50px] text-[#088269]">
                  964+
                </h1>
                <p className="w-[55%] text-[14px] md:text-[16px]">
                  оригинальной продукции со всего мира
                </p>
              </div>{" "}
              <div className="flex items-center border-b py-3">
                <h1 className="w-[45%] text-[34px] md:text-[50px] text-[#088269]">
                  23+
                </h1>
                <p className="w-[55%] text-[14px] md:text-[16px]">
                  международных сертификатов качества
                </p>
              </div>{" "}
              <div className="flex items-center   py-3">
                <h1 className="w-[45%] text-[34px] md:text-[50px] text-[#088269]">
                  2452+
                </h1>
                <p className="w-[55%] text-[14px] md:text-[16px]">
                  товаров всегда в наличии
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sertificat />
      <Contact />
    </div>
  );
};

export default UslugiPage;
