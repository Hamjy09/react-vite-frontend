import React from "react";

const Recomend = () => {
  return (
    <div className=" md:mx-5 ">
      <div
        className="
          flex flex-col bg-cover bg-center rounded-2xl  m-2 px-3
          w-full h-90 md:w-[570px] md:h-[530px] min-w-[320px]
          text-left
          justify-start items-start
          md:justify-center md:items-start
        "
        style={{ backgroundImage: "url('/src/assets/apple.jpg')" }}
      >
        {/* Text content */}
        <div className="text-base md:text-lg text-white mt-3 md:mt-0">Our Recommendation</div>
        <div className="text-2xl md:text-4xl mt-2 md:mt-4 text-white">BeWatch GT</div>
        <div className="text-sm md:text-lg text-white mt-1 md:mt-2">Dolor premium</div>

        {/* Button */}
        <button className="mt-6 md:mt-10 inline-block w-[8rem] md:w-[10rem] rounded-lg bg-[#2a27e9] px-6 md:px-10 py-2 md:py-3 text-sm md:text-md font-medium text-white transition-colors duration-300 ease-in-out hover:bg-[#120FBF] focus:outline-hidden">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Recomend;
