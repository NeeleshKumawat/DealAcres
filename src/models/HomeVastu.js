import React from 'react'
import Image from "./assets/HomeVastuImage.png"

const HomeVastu = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[208px] h-[300px] my-[3rem] ml-4 text-center bg-[#5ce1e6] border-l-8 border-[#38b6ff]'>
        <h3 className='w-full h-[86.5px] text-[27.1px] font-bold'>Buyer's <br/>
        <span className='text-[#38b6ff]'>Vastu</span></h3>
        <img
          className='w-[135.4px] h-[121.1px]'
          src= {Image}
        />
    </div>

  )
}

export default HomeVastu


