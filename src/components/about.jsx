import React from "react";

const About = () => {
  return (
    <div className="px-4 md:px-10 py-7">
      <div className="flex flex-col md:flex-row justify-around gap-8">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-5 text-center md:text-left">
          <p className="text-blue-500 font-bold text-2xl md:text-3xl lg:text-4xl">
            Pellentesque imperdiet
          </p>
          <span className="text-sm md:text-base lg:text-lg">
            Gravida id in cras in faucibus. Quis rhoncus dignissim leo, velit, 
            pharetra duis lacus fames morbi. Odio potenti congue commodo, 
            feugiat ultrices. Vitae duis massa nisl pellentesque vitae et, nisi 
            amet, lectus. Massa aliquet felis non nisl.
          </span>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-5 text-center md:text-left">
          <p className="text-lg md:text-xl font-semibold">
            About the be shop
          </p>
          <span className="text-sm md:text-base lg:text-lg">
            Gravida id in cras in faucibus. Quis rhoncus dignissim leo, velit, 
            pharetra duis lacus fames morbi. Odio potenti congue commodo, 
            feugiat ultrices. Vitae duis massa nisl pellentesque vitae et, nisi 
            amet, lectus. Massa aliquet felis non nisl.
          </span>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-5 text-center md:text-left">
          <p className="text-lg md:text-xl font-semibold">Our Journey</p>
          <span className="text-sm md:text-base lg:text-lg">
            Gravida id in cras in faucibus. Quis rhoncus dignissim leo, velit, 
            pharetra duis lacus fames morbi. Odio potenti congue commodo, 
            feugiat ultrices. Vitae duis massa nisl pellentesque vitae et, nisi 
            amet, lectus. Massa aliquet felis non nisl.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
