import React, { useState } from "react";
import "./index.css";
import { Modal } from "antd";

function Test() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() =>
          openModal(
            "Modal Oynasi 1",
            <p>
              Bu <strong>birinchi</strong> modal oynaning mazmuni
            </p>
          )
        }
      >
        Modal 1 ni ochish
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() =>
          openModal(
            "Modal Oynasi 2",
            <p>
              Bu <em>ikkinchi</em> modal oynaning mazmuni
            </p>
          )
        }
      >
        Modal 2 ni ochish
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() =>
          openModal(
            "Modal Oynasi 3",
            <p>
              Bu <u>uchinchi</u> modal oynaning mazmuni
            </p>
          )
        }
      >
        Modal 3 ni ochish
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
        {modalContent}
      </Modal>
    </div>
  );
}

export default Test;
