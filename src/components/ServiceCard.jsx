import React from "react";
import {CircleDollarSign } from "lucide-react";

const ServiceCard = () => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition w-[480px] h-[300px]">
  
     <CircleDollarSign size={100} strokeWidth={1} className="text-blue-500" />
     
      <h3 className="text-3xl font-semibold text-black mb-2">
        Mobile shopping
      </h3>

     
      <p className="text-gray-600 text-lg leading-relaxed">
        Vitae adipiscing tu enean ligula nibh molestie id viverra dapilo
        eleifend aliquam sem conubia
      </p>
    </div>
  );
};

export default ServiceCard;
