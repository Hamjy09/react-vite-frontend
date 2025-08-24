import React, { useState } from "react";
import Sidebar from "./sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

import VerticleMarquee from "./marque";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <VerticleMarquee />
      <nav className="w-full p-2 flex justify-between items-center">
        {/* Hamburger icon for mobile */}
        <div className="md:hidden flex-shrink-0">
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            className="text-2xl text-blue-500 cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        </div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="src/assets/logo.svg" alt="logo" className="w-40 h-auto" />
        </div>

        {/* Search input for md and above */}
        <div className="relative md:flex hidden flex-1 mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 border rounded-2xl border-blue-300 focus:outline-none focus:bg-blue-100"
          />
          <FontAwesomeIcon
            icon="fa-solid fa-search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer"
          />
        </div>

        {/* Other icons */}
        <div className="flex gap-4 md:gap-6 items-center">
          {/* Search icon for mobile hidden on md and above */}
          <div className="block md:hidden">
            <FontAwesomeIcon
              icon="fa-solid fa-search"
              className="text-xl text-blue-500 cursor-pointer"
            />
          </div>
          <FontAwesomeIcon
            icon="fa-solid fa-headset"
            className="text-xl text-blue-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon="fa-solid fa-user"
            className="text-xl text-blue-400 cursor-pointer"
          />
          <div className="relative">
            <FontAwesomeIcon
              icon="fa-solid fa-shopping-cart"
              className="text-xl text-blue-400 cursor-pointer"
            />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </nav>

      {/* Sidebar component */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Navbar;
