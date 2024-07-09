import KonsulTatsiya from "../ui/KonsulTatsiya";
import AccardionWhite from "../ui/AccardionWhite";

const Dostavka = () => {
  return (
    <div className="">
      <div className="max-w-[1350px] mx-auto px-5 py-[80px]">
        <div className="grid  md:grid-cols-2 ">
          <h1 className="text-[25px] xl:text-[30px] leading-[36px] ">
            Вы сможете забрать оборудование{" "}
            <span className="text-[#088269]">самостоятельно</span> из нашего
            офиса
          </h1>
          <div className=" hidden md:grid grid-cols-2  gap-5">
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
        <div className=" grid md:hidden grid-cols-1 sm:grid-cols-2  gap-5">
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
      <AccardionWhite />

      <KonsulTatsiya />
    </div>
  );
};

export default Dostavka;
