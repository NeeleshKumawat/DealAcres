import React from 'react'
import BuyersGuide from '../models/BuyersGuide'
import SellersGuide from '../models/SellersGuide'
import RentalGuide from '../models/RentalGuide'
import HomeInterior from '../models/HomeInterior'
import HomeVastu from '../models/HomeVastu'
import icon from "../models/assets/RedirectIcon.png"

const Guide = () => {
  return (
    <div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        <BuyersGuide/>
        <SellersGuide/>
        <RentalGuide/>
        <HomeInterior/>
        <HomeVastu/>
      </div>
        <div className='flex flex-row justify-end text-[#0061df] pr-[2.5rem] -mt-8 mb-5 cursor-pointer'>
          <p className='text-[16.3px]'>View More</p>
          <img
            className='w-[19.4px] h-[19.4px]'
            src={icon}
          />
        </div>

    </div>
  )
}

export default Guide