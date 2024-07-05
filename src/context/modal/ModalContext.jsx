import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [loginModal, setLoginModal] = useState(false);
  const [regModal, setRegModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{ loginModal, setLoginModal, regModal, setRegModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;