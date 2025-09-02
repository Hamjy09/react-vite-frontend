import React from "react";
import { Star,  StarHalf } from "lucide-react";

const productsCard = (props) => {
  return (
    <div>
      <section>
        <div className={props.cardStyles}>
          <ul className="mt-1  gap-4">
            <li>
              <div
                href="#"
                className="group block overflow-hidden  bg-white rounded-2xl"
              >
                <div className="">
                  <img
                    src="src/assets/mouse.webp"
                    alt=""
                    className="h-[300px] w-[450px] object-contain mx-auto transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="relative bg-white  mb-8">
                  <div className="flex items-center flex-col gap-2">
                    <h3 className="text-2xl text-gray-700">
                      Basic Shirt
                    </h3>
                    <div className="flex text-blue-600">
                      <Star size={15} strokeWidth={1} fill="blue"/>
                      <Star size={15} strokeWidth={1} fill="blue"/>
                      <Star size={15} strokeWidth={1} fill="blue" />
                      <Star size={15} strokeWidth={1} fill="blue"/>
                      < StarHalf size={15} strokeWidth={1} fill="blue"/>
                    </div>

                    <span className="tracking-wider text-blue-700 font-bold">
        
                      $24.00 GBP
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default productsCard;
