import React from 'react'
import ProductInfoCard from './ProductInfoCard'

const whyUs = () => {
  return (
    <div>
        <div className='flex flex-col items-center mt-5'>
            <p className='text-[#0B1A48] text-2xl  '>Why Blue Arch?</p>
            <p className='text-[#0B1A48] text-5xl font-semibold flex gap-2'>Exclusive <p className='text-blue-600'>Perfumes</p>. </p>
        </div>
        <div className='flex gap-8 m-7'>
            <ProductInfoCard/>
             <ProductInfoCard/>
        </div>
    </div>
  )
}

export default whyUs