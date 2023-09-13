import React from 'react'

const Card1 = () => {
  return (
    <div className='sm:w-[150px] md:w-[300px] lg:w-[480px] border-r-2 border-[#a6a6a6]'>
        <div className='flex flex-row bg-sky-100 p-3 gap-x-3'>
            <img
                className='w-[142.1px] h-[94.8px] bg-sky-100'
                src="https://media-public.canva.com/MADWCeh40lM/1/thumbnail-1.jpg"
            />
            <p className=''>
                Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide
            </p>
        </div>
        <hr className='bg-[#a6a6a6] h-[2px]'/>
    </div>
  )
}

export default Card1