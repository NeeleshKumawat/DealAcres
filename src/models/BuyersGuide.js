import React from 'react'
import Image from "./assets/BuyersImage.png"

const BuyersGuide = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[208px] h-[300px] my-[3rem] ml-4 text-center bg-[#f6c094] border-l-8 border-[#f6a05a]'>
        <h3 className='w-full h-[86.5px] text-[27.1px] font-bold'>Buyer's <br/>
        <span className='text-[#f6a05a]'>Guide</span></h3>
        <img
          className='w-[135.4px] h-[121.1px]'
          src= {Image}
        />
    </div>

  )
}

export default BuyersGuide


