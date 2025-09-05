import React from "react";
import {
  Truck,
  CircleDollarSign,
  Gift,
  ScissorsLineDashed,
  Undo2,
} from "lucide-react";

const Benifit = () => {
  return (
    <div className="px-6 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        <div
          className="flex flex-col items-center      transition-transform duration-300 
                hover:scale-110 cursor-pointer  "
        >
          <Truck size={40} strokeWidth={1} />
          <p className="font-semibold mt-2">Free Shipping</p>
          <p className="text-xs text-gray-600">For All Orders Over 200$</p>
        </div>

        <div
          className="flex flex-col items-center  transition-transform duration-300 
                hover:scale-110 cursor-pointer "
        >
          <ScissorsLineDashed size={40} strokeWidth={1} />
          <p className="font-semibold mt-2">Promo Codes</p>
          <p className="text-xs text-gray-600">Discount Upto 70%</p>
        </div>

        <div
          className="flex flex-col items-center  transition-transform duration-300 
                hover:scale-110 cursor-pointer "
        >
          <Undo2 size={40} strokeWidth={1} />
          <p className="font-semibold mt-2">Free Returns</p>
          <p className="text-xs text-gray-600">Return for Upto 7 Days</p>
        </div>

        <div
          className="flex flex-col items-center  transition-transform duration-300 
                hover:scale-110 cursor-pointer "
        >
          <CircleDollarSign size={40} strokeWidth={1} />
          <p className="font-semibold mt-2">Secure Payments</p>
          <p className="text-xs text-gray-600">Security Guarantee</p>
        </div>

        <div
          className="flex flex-col items-center  transition-transform duration-300 
                hover:scale-110 cursor-pointer "
        >
          <Gift size={40} strokeWidth={1} />
          <p className="font-semibold mt-2">Free Gifts</p>
          <p className="text-xs text-gray-600">Bonuses For Members</p>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
