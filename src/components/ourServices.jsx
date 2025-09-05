import React from "react";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <div className="bg-gray-50 pt-20 mb-10 pb-5">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-[#0B1A48] font-medium text-xl sm:text-2xl md:text-3xl">
          Blue Arch offers you convenient shopping
        </p>
        <p className="text-[#0B1A48] font-medium text-xl sm:text-2xl md:text-3xl">
          experience at any scale
        </p>
      </div>

      {/* Cards wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default OurServices;
