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
  return (
    <ModalContext.Provider
      value={{
        loginModal,
        setLoginModal,
        regModal,
        setRegModal,
        setSborModal,
        sborModal,
        requestModal,
        setRequestModal,
        helpModal,
        setHelpModal,
        konsultatsiyaModal,
        setKonsultatsiyaModal,
        garantyModal,
        setGarantyModal,
        zamenaModal,
        setZamenaModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
