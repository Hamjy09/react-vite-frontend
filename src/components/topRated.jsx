import React from "react";
import ProductsCard from "./productsCard";

const TopRated = () => {
  return (
    <div className="bg-[#F7F7F7]">
      {/* Heading */}
      <div className="flex flex-col text-4xl text-[#0B1A48] items-center gap-4 pt-5 font-bold text-center">
        Top Rated Products
        <div className="text-lg font-light">Best Choice</div>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row sm:justify-around items-center sm:items-stretch gap-6 sm:gap-0 mt-6">
        <ProductsCard cardStyles={"mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8"} />
        <ProductsCard cardStyles={"mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8"} />
        <ProductsCard cardStyles={"mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8"} />
      </div>
    </div>
  );
};

export default TopRated;
