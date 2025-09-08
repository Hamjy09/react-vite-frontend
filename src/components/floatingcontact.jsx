import React, { useState } from "react";
import { MessageCircle, Facebook, Instagram, MessageSquareText } from "lucide-react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex items-center z-50">
      {/* Social icons */}
      <div
        className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${
          open ? "translate-x-0 opacity-100 mr-3" : "translate-x-10 opacity-0"
        }`}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
        >
          <MessageSquareText size={20} />
        </a>
      </div>

      {/* Main Message Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-amber-600 p-4 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default FloatingContact;
