import React from "react";
import ProductsCard from "./productsCard";

const NewProducts = () => {
  return (
    <div className="bg-[#F7F7F7] p-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductsCard cardStyles={"mx-auto"} />
        <ProductsCard cardStyles={"mx-auto"} />
        <ProductsCard cardStyles={"mx-auto"} />
        <ProductsCard cardStyles={"mx-auto"} />
        <ProductsCard cardStyles={"mx-auto"} />
        <ProductsCard cardStyles={"mx-auto"} />
        <ProductsCard cardStyles={"mx-auto"} />
        <ProductsCard cardStyles={"mx-auto"} />
      </div>
    </div>
  );
};

export default NewProducts;
