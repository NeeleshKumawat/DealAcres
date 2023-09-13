import React from 'react'
import Image from "./assets/HomeInteriorImage.png"

const HomeInterior = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[208px] h-[300px] my-[3rem] ml-4 text-center bg-[#e3b7ef] border-l-8 border-[#cb6ce6]'>
        <h3 className='w-full h-[86.5px] text-[27.1px] font-bold'>Home <br/>
        <span className='text-[#cb6ce6]'>Interior</span></h3>
        <img
          className='w-[135.4px] h-[121.1px]'
          src= {Image}
        />
    </div>

  )
}

export default HomeInterior


