import React from "react";
import { Star, StarHalf } from "lucide-react";

const ProductsCard = (props) => {
  return (
    <div
      className={`group block overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-md transition p-3 sm:p-4 md:p-5 ${props.cardStyles}`}
    >
      {/* Image Section */}
      <div className="w-full flex justify-center">
        <img
          src="src/assets/mouse.webp"
          alt=""
          className="w-full object-contain transition duration-500 group-hover:scale-105
                     h-36 sm:h-44 md:h-30 lg:h-55"
        />
      </div>

      {/* Text Section */}
      <div className="relative bg-white mt-3">
        <div className="flex items-center flex-col gap-1 sm:gap-2 text-center px-1 sm:px-2">
          <h3 className="text-base sm:text-lg md:text-base lg:text-2xl text-gray-700">
            Basic Shirt
          </h3>
          <div className="flex text-blue-600">
            <Star size={14} strokeWidth={1} fill="blue" />
            <Star size={14} strokeWidth={1} fill="blue" />
            <Star size={14} strokeWidth={1} fill="blue" />
            <Star size={14} strokeWidth={1} fill="blue" />
            <StarHalf size={14} strokeWidth={1} fill="blue" />
          </div>
          <span className="tracking-wider text-blue-700 font-bold text-sm sm:text-base md:text-sm lg:text-lg">
            $24.00 GBP
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
