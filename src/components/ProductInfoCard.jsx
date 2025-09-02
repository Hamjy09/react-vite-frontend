import React from "react";

const ProductInfoCard = ( ) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-2xl p-6 shadow-md w-full md:w-[600px]">
      
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 space-y-3">
        <h2 className="text-xl font-bold text-blue-950">Guarantee of originality</h2>
        <p className="text-gray-600">Sapien fermentum diam egestas tellus commodo. Scelerisque.</p>
        <button className="text-blue-900 font-medium hover:underline">
          {}
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
        <img src="src\assets\credit.webp" alt="" />
      </div>
    </div>
  );
};

export default ProductInfoCard;
