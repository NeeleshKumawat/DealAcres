import React from 'react'
import Image from "./assets/RentalImage.png"

const RentalGuide = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[208px] h-[300px] my-[3rem] ml-4 text-center bg-[#e3f1af] border-l-8 border-[#95bd00]'>
        <h3 className='w-full h-[86.5px] text-[27.1px] font-bold'>Rental <br/>
        <span className='text-[#95bd00]'>Guide</span></h3>
        <img
          className='w-[135.4px] h-[121.1px]'
          src= {Image}
        />
    </div>

  )
}

export default RentalGuide


