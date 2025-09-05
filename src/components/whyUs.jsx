import React from 'react'
import ProductInfoCard from './ProductInfoCard'

const WhyUs = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col items-center mt-5 text-center px-4">
        <p className="text-[#0B1A48] text-xl md:text-2xl">Why Blue Arch?</p>
        <p className="text-[#0B1A48] text-3xl md:text-5xl font-semibold flex flex-wrap justify-center gap-2">
          Exclusive <span className="text-blue-600">Perfumes</span>.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 m-4 md:m-7 items-center justify-center">
        <ProductInfoCard />
        <ProductInfoCard />
      </div>
    </div>
  )
}

export default WhyUs
