import React from "react";
import { CircleDollarSign } from "lucide-react";

const ServiceCard = () => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-2xl 
      p-4 sm:p-6 shadow-sm hover:shadow-md transition 
      w-full max-w-[400px] h-auto mx-auto">
      
      {/* Icon responsive sizes */}
      <CircleDollarSign
        className="text-blue-500 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
        strokeWidth={1}
      />

      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black my-2">
        Mobile shopping
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        Vitae adipiscing tu enean ligula nibh molestie id viverra dapilo
        eleifend aliquam sem conubia
      </p>
    </div>
  );
};

export default ServiceCard;
