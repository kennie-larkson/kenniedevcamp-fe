import React from "react";

interface AlertModalProps {
  message: string;
  type: "error" | "success";
  onClose: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ message, type, onClose }) => {
  const bgColor = type === "error" ? "bg-red-500" : "bg-green-500";
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div
        /* className={`bg-${
          type === "error" ? "red-500" : "green-500"
        } text-white p-6 rounded-md shadow-lg z-10`} */
        className={`${bgColor} text-white p-6 rounded-md shadow-lg z-10`}
      >
        <p>{message}</p>
        <button
          className="mt-4 bg-white text-black rounded px-4 py-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
