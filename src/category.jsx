import React from "react";
import RangeSliderDemo from "./components/slider-14";
import { Checkbox } from "./components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProductsCard from "./components/productsCard";

// Reusable Color Circle
const ColorCircle = ({ color }) => (
  <div
    className="w-6 h-6 rounded-full cursor-pointer border border-gray-300"
    style={{ backgroundColor: color }}
  ></div>
);

const Category = () => {
  return (
    <div className="flex flex-col">
      <div className="text-[#0B1A48] font-bold text-5xl m-5">
        Computers
      </div>


       <div className="flex flex-col md:flex-row w-full gap-4">
    
  
      {/* Left side filter (30%) */}
      <div className="w-full md:w-[30%] bg-white p-6 rounded-xl shadow-md">
        {/* Price */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Price</p>
          <RangeSliderDemo />
        </div>

        {/* Brand */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Brand</p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <Checkbox /> Digimate
            </label>
            <label className="flex items-center gap-2">
              <Checkbox /> Futech
            </label>
            <label className="flex items-center gap-2">
              <Checkbox /> Jibe
            </label>
            <label className="flex items-center gap-2">
              <Checkbox /> Phone
            </label>
            <label className="flex items-center gap-2">
              <Checkbox /> Senco
            </label>
          </div>
        </div>

        {/* Color */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Color</p>
          <div className="flex gap-3 flex-wrap">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="w-8 h-8 rounded-full p-0 hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: "#00cfff" }}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Sky Blue</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="w-8 h-8 rounded-full p-0 hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: "#000000" }}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Black</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="w-8 h-8 rounded-full p-0 hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: "#808080" }}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Gray</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="w-8 h-8 rounded-full p-0 hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: "#adff2f" }}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Green Yellow</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="w-8 h-8 rounded-full p-0 hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: "#800080" }}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Purple</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="w-8 h-8 rounded-full p-0 hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: "#ff6b6b" }}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Red</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="w-8 h-8 rounded-full p-0 border hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: "#ffffff" }}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>White</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* HDD Size */}
        <div className="mb-6">
          <p className="font-semibold mb-2">HDD Size</p>
          <div className="flex flex-wrap gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  1TB
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>1TB</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  2TB
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>2TB</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  512GB
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>512GB</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  64GB
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>64GB</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Screen Size */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Screen Size</p>
          <div className="flex flex-wrap gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  1.57”
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>1.57”</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  13.3”
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>13.3”</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  14.1”
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>14.1”</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  15.4”
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>15.4”</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  49”
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>49”</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  5.5”
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>5.5”</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  50”
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>50”</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  55”
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>55”</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  60”
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>60”</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="text-sm px-4 py-2 rounded-lg"
                >
                  70”
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>70”</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Stock */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Availability</p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <Checkbox /> In stock
            </label>
            <label className="flex items-center gap-2">
              <Checkbox /> Out of stock
            </label>
          </div>
        </div>
      </div>

      {/* Right side for cards (70%) */}
  <div className="w-full md:w-[70%] p-4 flex-wrap">
    <div className="bg-[#F7F7F7] p-6 gap-3 flex flex-col md:flex-col">
      {/* Two rows of cards */}
      <div className="flex flex-col sm:flex-row gap-6 mb-6 min-w-[47%]">
        <ProductsCard  />
        <ProductsCard  />
        <ProductsCard  />
      </div>
      <div className="flex flex-col sm:flex-row gap-6 min-w-[47%]">
        <ProductsCard  />
        <ProductsCard />
        <ProductsCard />
      </div>
    </div>
  </div>
</div>
    </div>
  
  );
};

export default Category;
