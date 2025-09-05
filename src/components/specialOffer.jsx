import React from "react";

const SpecialOffer = () => {
  return (
    <div
      className="relative bg-purple-700 text-white flex flex-col md:flex-row items-center justify-center 
  min-h-[400px] md:min-h-[550px] rounded-2xl 
  max-w-[1200px] w-full mx-auto my-2 px-4 sm:px-6 md:px-10"
    >
      {/* Left side - Phone Image */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img
          src="src/assets/mouse.webp"
          alt="Phone"
          className="w-[80%] max-w-[250px] md:max-w-[320px] h-auto object-contain"
        />

        {/* Discount Circle */}
        <div className="absolute top-10 right-16 bg-yellow-400 text-black font-bold rounded-full w-20 h-20 flex items-center justify-center border-2 border-dashed border-yellow-700">
          -33%
        </div>
      </div>

      {/* Right side - Offer Details */}
      <div className="w-full md:w-1/2 text-center space-y-6">
        <h2 className="text-3xl font-bold">Special offer</h2>
        <p className="text-gray-200">BePhone 12 Pro</p>

        {/* Countdown Timer */}
        <div className="flex justify-center flex-wrap gap-3">
          {["days", "hours", "minutes", "seconds"].map((label, i) => (
            <div
              key={i}
              className="w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center 
                 rounded-lg bg-white/20 backdrop-blur-md"
            >
              <div className="text-xl sm:text-2xl font-bold leading-tight">
                00
              </div>
              <div className="text-xs sm:text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Price */}
        <div>
          <h3 className="text-lg font-semibold">BePhone 12 Pro</h3>
          <p className="text-xl font-bold">299$ USD</p>
        </div>

        {/* Button */}
        <button className="bg-cyan-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-500 transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default SpecialOffer;
