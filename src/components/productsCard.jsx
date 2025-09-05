import React from "react";
import { Star, StarHalf } from "lucide-react";

const ProductsCard = (props) => {
  return (
    <div className={`${props.cardStyles}`}>
      <section>
        <ul className="mt-1 gap-4">
          <li>
            <div className="group block overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-md transition p-3 sm:p-4 md:p-6">
              {/* Image Section */}
              <div className="w-full flex justify-center">
                <img
                  src="src/assets/mouse.webp"
                  alt=""
                  className="h-36 sm:h-44 md:h-56 lg:h-64 w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Section */}
              <div className="relative bg-white mt-3">
                <div className="flex items-center flex-col gap-1 sm:gap-2 text-center px-1 sm:px-2">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
                    Basic Shirt
                  </h3>
                  <div className="flex text-blue-600">
                    <Star size={14} strokeWidth={1} fill="blue" />
                    <Star size={14} strokeWidth={1} fill="blue" />
                    <Star size={14} strokeWidth={1} fill="blue" />
                    <Star size={14} strokeWidth={1} fill="blue" />
                    <StarHalf size={14} strokeWidth={1} fill="blue" />
                  </div>
                  <span className="tracking-wider text-blue-700 font-bold text-sm sm:text-base md:text-lg">
                    $24.00 GBP
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProductsCard;
