import React from "react";
import ProductsCard from "./productsCard";

const exclusiveProducts = () => {
  return (
    <div>
      <div
        className="w-full h-140 bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/beauty-1132641_640.jpg')" }}
      >
        <div className="flex justify-around items-center">
          <div className="flex flex-col">
            <h1 className="text-[#0B1A48] text-4xl font-bold">Feel The Sound</h1>
            <p className="text-[#0B1A48]">Category Products </p>
          </div>

          <div className="flex flex-col mt-20 ml-25">
            <div className="flex gap-3">
              <ProductsCard cardStyles={" w-65 "} />
              <ProductsCard cardStyles={" w-65 "} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default exclusiveProducts;
