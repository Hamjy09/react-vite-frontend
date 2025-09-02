import React, { useState } from "react";
import { ChevronDown} from 'lucide-react';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="hidden md:flex  justify-start items-center gap-20 m-4 pl-5">
        <div className="relative pl-10">
          <button
            onClick={() => setOpen(!open)}
            className=" flex px-4 py-2 text-lg text-[#0B1A48] font-medium rounded-lg bg-white hover:bg-blue-50   cursor-pointer"
          >
            Menu
            <div className="mt-1"><ChevronDown  size={20} strokeWidth={1} /></div>
            
          </button>

          {open && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <li className="px-4 py-2 text-[#0B1A48] hover:bg-blue-100 cursor-pointer">
                Option 1
              </li>
              <li className="px-4 py-2 text-[#0B1A48] hover:bg-blue-100 cursor-pointer">
                Option 2
              </li>
              <li className="px-4 py-2 text-[#0B1A48] hover:bg-blue-100 cursor-pointer">
                Option 3
              </li>
              <li className="px-4 py-2 text-[#0B1A48] hover:bg-blue-100 cursor-pointer">
                Option 4
              </li>
              <li className="px-4 py-2 text-[#0B1A48] hover:bg-blue-100 cursor-pointer">
                Option 5
              </li>
            </ul>
          )}
        </div>
        <h1 className="text-lg text-[#0B1A48] font-semibold cursor-pointer">Heading 2</h1>
        <h1 className="text-lg text-[#0B1A48] font-semibold cursor-pointer">Heading 3</h1>
        <h1 className="text-lg text-[#0B1A48] font-semibold cursor-pointer">Heading 4</h1>
        <h1 className="text-lg text-[#0B1A48] font-semibold cursor-pointer">Heading 5</h1>
      </div>
    </div>
  );
};

export default Navigation;
