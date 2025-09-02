import React from "react";
import ServiceCard from "./ServiceCard";

const ourServices = () => {
  return (
    <div className="bg-gray-50 pt-25 mb-10">
      <div className="">
        <p className="text-[#0B1A48] font-medium flex flex-col items-center text-3xl mb-8">
          Blue Arch offers you convenient shopping
          <p>experience at any scale</p>
        </p>
        <div className="flex justify-between gap-5  mx-5">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      </div>
      
    </div>
  );
};

export default ourServices;
