import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Navigation from "./navigation";

library.add(fas, far, fab);

import VerticleMarquee from "./marque";

const Navbar = (props) => {
  return (
    <div>
      <VerticleMarquee />
      <nav className="w-full p-2 flex justify-between items-center">
        {/* Hamburger icon for mobile */}
        <div className="md:hidden flex-shrink-0">
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            className="text-2xl text-blue-500 cursor-pointer"
            onClick={props.openNav}
          />
        </div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="src/assets/logo.svg" alt="logo" className="md:w-40 w-25 h-auto" />
        </div>

        {/* Search input for md and above */}
        <div className=" relative md:flex justify-center hidden  mx-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-80  pl-10 pr-1 py-2 border rounded-2xl border-blue-300 focus:outline-none focus:bg-blue-100"
          />
          <FontAwesomeIcon
            icon="fa-solid fa-search"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer"
          />
        </div>

        {/* Other icons */}
        <div className="flex gap-3 md:gap-6 items-center mr-2">
          {/* Search icon for mobile hidden on md and above */}
          <div className="block md:hidden">
            <FontAwesomeIcon
              icon="fa-solid fa-search"
              className="text-lg md:text-xl text-blue-500 cursor-pointer"
            />
          </div>
          <FontAwesomeIcon
            icon="fa-solid fa-headset"
            className="text-lg md:text-xl text-blue-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon="fa-solid fa-user"
            className="text-lg md:text-xl text-blue-400 cursor-pointer"
          />
          <div className="relative">
            <FontAwesomeIcon
              icon="fa-solid fa-shopping-cart"
              className="text-lg md:text-xl text-blue-400 cursor-pointer"
            />
            <span className="absolute -top-2 right-0 md:-right-2 bg-blue-600 text-white text-[10px] md:text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </nav>
      <Navigation />
    </div>
  );
};

export default Navbar;
