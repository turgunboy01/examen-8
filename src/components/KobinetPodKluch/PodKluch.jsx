import { Link } from "react-router-dom";
import { PodKluchData } from "../../data/SlidesData";
const PodKluch = () => {
  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] mx-auto px-5 pt-[60px]">
        <h2 className="text-[48px] leading-[52px] py-5">Кабинеты под ключ</h2>
        <div className="grid sm:grid-cols-2 gap-5 ">
          {PodKluchData.map((item) => (
            <Link
              to={`/kabinetPodKluch/${item.id}`}
              key={item.id}
              className="border bg-[#fff]"
            >
              <img
                src={item.img}
                alt=""
                className="h-[300px]  w-full"
              />
              <h2 className="p-3 px-5">Реанимация</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodKluch;
