import React, { useContext, useEffect, useState } from "react";
import {
  FaceBook,
  Instagram,
  Odno,
  PenIcon,
  PenIcon2,
  Twitter,
  Vkontakt,
} from "../../assets/ProfileSvg";
import { MdKeyboardArrowUp } from "react-icons/md";
import { selectCard } from "../../redux/CartSlice";
import { useSelector } from "react-redux";
import ProfileModal from "../modal/profile/ProfileModal";
import { ModalContext } from "../../context/modal/ModalContext";
import ProfileInfo from "../modal/profile/ProfileInfo";
import CompanyName from "./CompanyName";
import EmailModal from "../modal/profile/EmailModal";
import PasswordModal from "../modal/profile/PasswordModal";
import EditProfileModal from "../modal/profile/EditProfileModal";

const Profile = () => {
  const [profileClick, setProfileClick] = useState(false);
  const [preview, setPreview] = useState(
    localStorage.getItem("profileImage") || ""
  );
  const [localPreview, setLocalPreview] = useState(preview);

  const data = useSelector(selectCard);

  const {
    setProfileImgModal,
    profileImgModal,
    profileInfoModal,
    setProfileInfoModal,
    emailModal,
    setEmailModal,
    phoneNumbermodal,
    setPhoneNumbermodal,
    platelModal,
    setPlatelModal,
  } = useContext(ModalContext);

  const [emailProfile, setEmailProfile] = useState("");
  const [phoneNumberProfile, setPhoneNumberProfile] = useState("");
  const [platelProfile, setPlatelProfile] = useState({
    inn: "",
    name: "",
    address: "",
    website: "",
    email: "",
    position: "",
    organizationType: "",
  });

  const subtotal = data.reduce((sum, product) => {
    const price = parseFloat(product.price) || 0;
    const quantity = parseInt(product.amount, 10) || 0;
    return sum + price * quantity;
  }, 0);

  const [infoProfil, setInfoProfil] = useState(() => {
    try {
      const savedInfo = localStorage.getItem("profileInfo");
      return savedInfo
        ? JSON.parse(savedInfo)
        : { name: "Константин", surname: "Константинопольский" };
    } catch (e) {
      console.error("Error parsing profileInfo:", e);
      return { name: "Константин", surname: "Константинопольский" };
    }
  });

  const getEmail = () => {
    const userEmail = localStorage.getItem("userEmailProfile");
    return userEmail || "person@mail.ru";
  };

  const getPhoneNumber = () => {
    const userPhoneNumber = localStorage.getItem("userPhoneNumberProfile");
    return userPhoneNumber || "+7 911 564–86–86";
  };

  const getPlatel = () => {
    const userPlatel = localStorage.getItem("userPlatel");
    return userPlatel
      ? JSON.parse(userPlatel)
      : {
          inn: "",
          name: "",
          address: "",
          website: "",
          email: "",
          position: "",
          organizationType: "",
        };
  };

  useEffect(() => {
    const savedInfo = localStorage.getItem("profileInfo");
    if (savedInfo) {
      setInfoProfil(JSON.parse(savedInfo));
    }
  }, [profileInfoModal]);

  useEffect(() => {
    const savedEmail = getEmail();
    if (savedEmail) {
      setEmailProfile(savedEmail);
    }
  }, [emailModal]);

  useEffect(() => {
    const savedPhoneNumber = getPhoneNumber();
    if (savedPhoneNumber) {
      setPhoneNumberProfile(savedPhoneNumber);
    }
  }, [phoneNumbermodal]);

  useEffect(() => {
    const savedProfile = getPlatel();
    if (savedProfile) {
      setPlatelProfile(savedProfile);
    }
  }, [platelModal]);

  const handleRemove = () => {
    localStorage.removeItem("profileImage");
    setPreview(null);
  };

  console.log(emailProfile);
  return (
    <div className="max-w-[1350px] py-[60px] mx-auto px-5 ">
      <div className="flex flex-col gap-[40px] pb-[100px]">
        {profileImgModal && (
          <ProfileModal
            localPreview={localPreview}
            setLocalPreview={setLocalPreview}
            setPreview={setPreview}
          />
        )}
        {profileInfoModal && <ProfileInfo />}
        {emailModal && <EmailModal />}
        {phoneNumbermodal && <PasswordModal />}
        {platelModal && <EditProfileModal />}
        <div className="w-full flex lg:flex-row flex-col gap-6 md:gap-0 lg:items-center">
          <div className="w-[25%]">
            <span className="w-[210px] group h-[210px] relative font-medium text-[#23473b] text-[120px] flex justify-center items-center rounded-full bg-[#e1efe6]">
              {preview ? (
                <img
                  src={preview}
                  alt=""
                  className="w-full h-full rounded-full p-1"
                />
              ) : (
                <img
                  src="https://cdn-icons-png.freepik.com/512/3682/3682323.png"
                  className="w-full h-full rounded-full p-1"
                  alt=""
                />
              )}
              <div className="group-hover:block hidden p-1 absolute bottom-3">
                <div
                  onClick={() => setProfileClick(!profileClick)}
                  className="w-[30px] h-[30px] rounded-full cursor-pointer flex justify-center items-center bg-[#07745E]"
                >
                  <PenIcon2 />
                  {profileClick && (
                    <div className="absolute -bottom-[40px] bg-[#fff] p-2">
                      <h2
                        onClick={() => setProfileImgModal(true)}
                        className="text-[12px] hover:underline cursor-pointer"
                      >
                        Редактировать
                      </h2>
                      <h2
                        onClick={handleRemove}
                        className="text-[12px] text-[#C13515] hover:underline cursor-pointer"
                      >
                        Удалить фото
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </span>
          </div>
          <div className="">
            <h2 className="text-[18px] sm:text-[20px] md:text-[30px] text-[#202020] capitalize leading-[24px] md:leading-[36px]">
              {infoProfil.name} {infoProfil.surname}
            </h2>
            <div className="flex gap-2 pt-[15px] pb-[30px]">
              <a
                href={infoProfil.vk || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Vkontakt />
              </a>
              <a
                href={infoProfil.facebook || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaceBook />
              </a>
              <a
                href={infoProfil.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href={infoProfil.twitter || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                href={infoProfil.ok || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Odno />
              </a>
            </div>
            <div className="flex sm:flex-row flex-col gap-5">
              <span>
                <button
                  onClick={() => setProfileInfoModal(true)}
                  className="px-5 hover:border-[#07745E] text-[12px] md:text-[14px] py-2 border rounded-full"
                >
                  Изменить персональную информацию
                </button>
              </span>
              <span>
                <button
                  onClick={() => setPhoneNumbermodal(true)}
                  className="px-5 py-2 hover:border-[#07745E] text-[12px] md:text-[14px] border rounded-full"
                >
                  Изменить пароль
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex lg:flex-row flex-col items-center">
          <div className="hidden lg:block w-[25%]"></div>
          <div className="w-full lg:w-[75%]">
            <div className="sm:w-[70%] lg:w-[50%] flex justify-between gap-[30px] py-[20px]">
              <span>
                <h2 className="flex text-[#202020] text-[12px] sm:text-[14px] md:text-[16px] items-center gap-3">
                  {phoneNumberProfile
                    ? phoneNumberProfile
                    : "  +7 911 564–86–86"}
                  <button onClick={() => setPhoneNumbermodal(true)}>
                    <PenIcon />
                  </button>
                </h2>
                <p className="text-[#7A7687] pt-1 text-[12px] sm:text-[14px] md:text-[16px]">
                  Телефон
                </p>
              </span>
              <span>
                <h2 className="flex text-[#202020] text-[12px] sm:text-[14px] md:text-[16px] items-center gap-3">
                  {emailProfile ? emailProfile : "person@mail.ru "}
                  <button onClick={() => setEmailModal(true)}>
                    <PenIcon />
                  </button>
                </h2>
                <p className="text-[#7A7687] text-[12px] sm:text-[14px] md:text-[16px] pt-1">
                  Email
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <CompanyName
        setPlatelModal={setPlatelModal}
        platelProfile={platelProfile}
      />
      <div className="flex  md:flex-row flex-col  pt-[100px] ">
        <div className=" md:w-[25%]">
          <h3 className="text-[18px] pb-[20px] text-[#202020] font-semibold">
            История заказов
          </h3>
        </div>
        <div className="md:w-[75%] ">
          <div className="border rounded-lg bg-[#fff] ">
            <div className="p-[30px]">
              <span className="flex justify-between items-center ">
                <h2 className="text-[12px] sm:text-[14px] pt-2 lg:text-[16px] font-medium">
                  Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900 000
                  руб.
                </h2>
                <MdKeyboardArrowUp />
              </span>
              <p className="font-medium text-[12px] sm:text-[14px] pt-2 lg:text-[16px] flex  text-[#7A7687] items-center gap-3 ">
                Статус:
                <p className="px-3 py-1 rounded-full border text-[#855E00] bg-[#ffe095] text-[12px] lg:text-[14px]">
                  В работе
                </p>
              </p>
            </div>
            <hr />
            <div className=" w-[100%]   p-[30px] flex flex-col justify-between ">
              <div className="w-full  pb-[80px] ">
                <div className="flex flex-col gap-3">
                  {data.map((item) => (
                    <div className="flex gap-[20px]  items-center">
                      <img
                        src={item.img}
                        className="w-[64px] h-[64px]"
                        alt=""
                      />
                      <div className="flex justify-between flex-col sm:flex-row w-full  sm:gap-[30px] sm:items-center">
                        <span>
                          {" "}
                          <h2 className="text-[12px] sm:text-[14px] pt-2 lg:text-[16px]">
                            {item.title}
                          </h2>
                        </span>
                        <div className="flex items-center gap-5">
                          <h2 className=" sm:w-[100px] pt-1 text-[#7A7687] text-[14px]  lg:text-[16px]  font-medium">
                            {item.amount} шт
                          </h2>{" "}
                          <p className="w-[100px] text-[14px] pt-2 lg:text-[16px] font-medium">
                            {" "}
                            {item.price * item.amount} руб.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full h-[20px] ">
                <div className="flex justify-end gap-[10px] sm:gap-[50px]">
                  <h3 className="text-[15px] sm:text-[16px] md:text-[18px]  font-semibold">
                    Товаров на сумму:
                  </h3>
                  <p className="text-[15px] sm:text-[16px] md:text-[18px]  font-semibold tracking-wider">
                    {subtotal} руб.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg mt-[20px] bg-[#fff] ">
            <div className="p-[30px]">
              <span className="flex justify-between items-center ">
                <h2 className="text-[12px] sm:text-[14px] pt-2 lg:text-[16px]  font-medium">
                  Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900 000
                  руб.
                </h2>
                <MdKeyboardArrowUp />
              </span>
              <p className="font-medium  pt-2 flex  text-[#7A7687] text-[12px] sm:text-[14px]  lg:text-[16px]  items-center gap-3 ">
                Статус:
                <p className="px-3 py-1 rounded-full border text-[#088269] bg-[#e1efe6] text-[12px] sm:text-[14px]  lg:text-[16px] ">
                  Доставлено
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  md:flex-row flex-col   pt-[50px] sm:pt-[100px]  ">
        <div className="w-[25%] ">
          <h2 className="text-[18px] font-semibold">Настройки</h2>
        </div>
        <div className="w-[75%]  flex sm:flex-row flex-col gap-[20px] sm:gap-[100px] md:gap-[120px] lg:gap-[150px]  ">
          <div className="flex flex-col gap-1 ">
            <h2 className="text-[18px] text-[#202020] font-semibold pb-[10px]">
              Показывать в профиле:
            </h2>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="name"
                className="w-[15px] h-[15px]  accent-[#088269]"
              />
              <label htmlFor="name" className="cursor-pointer text-[16px] ">
                Имя
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="lastname"
                className="w-[15px] h-[15px]  accent-[#088269]"
              />
              <label htmlFor="lastname" className="cursor-pointer text-[16px] ">
                Фамилия
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="phone"
                className="w-[15px] border-[1px] h-[15px] accent-[#088269]"
              />
              <label htmlFor="phone" className="cursor-pointer text-[16px] ">
                Телефон
              </label>
            </div>
            <div className="flex gap-2  items-center">
              <input
                type="checkbox"
                id="email"
                className="w-[15px] h-[15px]  accent-[#088269]"
              />
              <label htmlFor="email" className="cursor-pointer text-[16px] ">
                Email
              </label>
            </div>
            <span>
              <button className="bg-[#088269] w-[180px] hover:bg-[#07745e] mt-[20px] sm:mt-[50px] text-[#fff]  py-2 rounded-full border text-[14px]">
                Выйти
              </button>
            </span>
          </div>
          <div className="flex flex-col gap-1 ">
            <h2 className="text-[18px] text-[#202020] font-semibold pb-[10px]">
              Получать рассылку по темам:
            </h2>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="sale"
                className="w-[15px] h-[15px]  accent-[#088269]"
              />
              <label htmlFor="sale" className="cursor-pointer text-[16px] ">
                Скидки и акции
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="price"
                className="w-[15px] h-[15px]  accent-[#088269]"
              />
              <label htmlFor="price" className="cursor-pointer text-[16px] ">
                Снизилась цена на избранное
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
