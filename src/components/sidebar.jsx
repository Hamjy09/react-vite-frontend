import React from "react";

const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Sidebar content */}
      <div className="relative bg-white w-64 h-full shadow-lg p-4">
        <button
          className="mb-4 text-blue-500"
          onClick={onClose}
        >
          Close
        </button>
        <ul className="flex flex-col gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
