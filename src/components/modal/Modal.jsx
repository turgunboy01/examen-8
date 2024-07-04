import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow p-6 w-1/2">
        <h2 className="text-2xl mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Yopish
        </button>
      </div>
    </div>
  );
};

export default Modal;
