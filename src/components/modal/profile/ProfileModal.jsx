import React, { createRef, useContext, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { CameraSvg } from "../../../assets/ProfileSvg";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { ModalContext } from "../../../context/modal/ModalContext";

const ProfileModal = ({ localPreview, setLocalPreview, setPreview }) => {
  const { setProfileImgModal } = useContext(ModalContext);

  const cropperRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalPreview(reader.result);
        setLocalImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      const croppedImage = cropperRef.current.cropper
        .getCroppedCanvas()
        .toDataURL();
      setPreview(croppedImage);
      localStorage.setItem("profileImage", croppedImage);
      setLocalPreview(null);
      setProfileImgModal(false);
    }
  };
  return (
    <div
      className="fixed px-5 inset-0 bg-gray-800 bg-opacity-75 z-[999] flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setProfileImgModal(false);
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-lg w-[711px] flex flex-col relative sm:grid-cols-2 gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => setProfileImgModal(false)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          <CgClose size={20} />
        </div>
        <h3 className="text-[18px] font-semibold">Выбор изображения профиля</h3>
        <div className="h-[300px] border rounded-lg flex justify-center items-center">
          {localPreview ? (
            <Cropper
              ref={cropperRef}
              style={{ height: 300, width: "100%" }}
              initialAspectRatio={1}
              src={localPreview}
              viewMode={1}
              guides={true}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
            />
          ) : (
            <div className="flex justify-center items-center flex-col">
              <h2 className="text-[14px] text-[#7A7687]">
                Перетащите фотографию сюда, или
              </h2>
              <span className="flex cursor-pointer items-center gap-3 text-[14px] font-semibold">
                <CameraSvg />
                <label
                  htmlFor="photo"
                  className="text-[#088269] cursor-pointer pt-1"
                >
                  Выберите файл
                </label>
                <input
                  className="hidden"
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </span>
            </div>
          )}
        </div>
        <span className="flex justify-end gap-3">
          <button
            className="w-[130px] px-5 text-[14px] py-3 border border-[#088269] text-[#088269] rounded-full"
            onClick={() => setProfileImgModal(false)}
          >
            Отменить
          </button>
          <button
            className="w-[130px] px-5 text-[14px] py-3 hover:bg-[#07745E] bg-[#088269] text-[#fff] rounded-full"
            onClick={handleUpload}
          >
            Применить
          </button>
        </span>
      </div>
    </div>
  );
};

export default ProfileModal;
