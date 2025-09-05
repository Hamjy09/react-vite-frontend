import React from "react";

const ProductInfoCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-2xl p-4 md:p-6 shadow-md w-full max-w-[600px]">
      
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 space-y-2 md:space-y-3">
        <h2 className="text-lg md:text-xl font-bold text-blue-950">
          Guarantee of originality
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Sapien fermentum diam egestas tellus commodo. Scelerisque.
        </p>
        <button className="text-sm md:text-base text-blue-900 font-medium hover:underline">
          Learn more
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-3 md:mt-0 flex justify-center">
        <img src="src/assets/credit.webp" alt="" className="w-28 md:w-40 lg:w-52" />
      </div>
    </div>
  );
};

export default ProductInfoCard;
