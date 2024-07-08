import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [loginModal, setLoginModal] = useState(false);
  const [regModal, setRegModal] = useState(false);
  const [sborModal, setSborModal] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [helpModal, setHelpModal] = useState(false);
  const [konsultatsiyaModal, setKonsultatsiyaModal] = useState(false);
  const [zamenaModal, setZamenaModal] = useState(false);
  const [garantyModal, setGarantyModal] = useState(false);
  const [profileImgModal, setProfileImgModal] = useState(false);
  const [profileInfoModal, setProfileInfoModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [phoneNumbermodal, setPhoneNumbermodal] = useState(false);
  const [platelModal, setPlatelModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [zakazModal, setZakazModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        loginModal,
        setLoginModal,
        regModal,
        setRegModal,
        sborModal,
        setSborModal,
        requestModal,
        setRequestModal,
        helpModal,
        setHelpModal,
        konsultatsiyaModal,
        setKonsultatsiyaModal,
        zamenaModal,
        setZamenaModal,
        garantyModal,
        setGarantyModal,
        profileImgModal,
        setProfileImgModal,
        profileInfoModal,
        setProfileInfoModal,
        emailModal,
        setEmailModal,
        phoneNumbermodal,
        setPhoneNumbermodal,
        platelModal,
        setPlatelModal,
        viewModal,
        setViewModal,
        zakazModal,
        setZakazModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
