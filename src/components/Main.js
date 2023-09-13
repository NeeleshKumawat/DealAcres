import React from 'react'
import RealEstatePayment from '../models/RealEstatePayment'
import Card1 from '../models/Card1'
import Card2 from '../models/Card2'



const Main = () => {
    let array = [] ;
    for(let i = 0 ; i < 5 ; i++) {
        array.push(<Card1 key={i}/>) ;
        array.push(<Card2 key= {i}/>) ;
    }
  return (
    <div className='flex sm:flex-col lg:flex-row'>
        <div className='ml-5 mt-5'>
            <h1 className='text-[34.9px] md:w-[605px] lg:w-[606px] xl:w-[806px] h-[120.7px]'>
                How a Rental Agent Can Help You Rent Your Next Apartment or House
            </h1>
            <span className='w-[266.1px] h-[21.7px] text-[#737373]'>Published on August 22, 2023</span>
            <p className='w-[806.8px] h-[182.2px] text-[14.1px]'>
                A rental agent is your personal guide in the world of real estate rentals. While we often associate real estate agents with home purchases, rental agents specialize in helping you find the perfect apartment or house to rent. They’re the experts who know the rental market like the back of their hand, equipped with a deep understanding of local neighborhoods, rental trends, and available properties.
                <br/>
                <br/>
                In this article, we’re diving into the world of rental agents and how they can be the game-changer you didn’t know you needed for your next living space. So, whether you’re a first-time renter or a seasoned tenant, let’s uncover how a rental agent can transform your search for your next apartment or house.
            </p>
            <img
                className='w-[806.8px] h-[409.9px]'
                src="https://media.canva.com/1/image-resize/1/200_133_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9QMEVUUS9NQUZzV29QMEVUUS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAABa9MmAjUEKbB2kuccOv5g9P_26UHC8AkSXIBKgM7nQr&exp=1694604530&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAIEdq1MBitAZyNMjwepjbwikxNx_frWEapHX0rE279pD"
            />
            <h2 className='w-[789.8px] text-[25.4px]'>Should you use a real estate agent to find your next rental?</h2>
            <p className='w-[806.8px] h-[160.2px] text-[14.1px]'>
                Using a real estate agent to find your next apartment or home offers many advantages that streamline the process and enhance your overall experience. These professionals possess in-depth knowledge of the local rental market, which can help them find  properties that align with your preferences and budget.
                <br/>
                <br/>
                In highly competitive markets such as Los Angeles, New York City, Miami, and Boston, the role of rental agents becomes paramount in the quest to secure an apartment. However, it’s worth noting that rental agents are not exclusive to these larger cities; they are also present in smaller cities, offering valuable assistance to those seeking lease accommodations.
            </p>
            <h2 className='w-[628.3px] h-[40.3px] text-[25.4px]'>7 key ways a rental agent can help you</h2>
            <div className='w-[806.8px] '>
                <p className='w-[806.8px] text-[14.1px]'>
                    Navigating the rental market can be a challenge, but with a skilled rental agent by your side, you’ll have a seasoned expert to guide you. From finding the right apartment or house to handling negotiations and paperwork, here are the key ways a rental agent can make your renting journey a breeze
                </p>
                <ol className='list-decimal font-bold ml-4 mt-4'>
                    <li>
                        <span>Tailored property searches</span>
                        <p className='w-[806.8px] text-[14.1px] -ml-4 font-normal'>A rental agent will curate a list of rental options that match your preferences, saving you time by presenting choices that align with your needs and budget.</p>
                    </li>
                    <br/>
                    <li>
                        <span>Local expertise</span>
                        <p className='w-[806.8px] text-[14.1px] -ml-4 font-normal'>With in-depth knowledge of the area, your agent will provide insights into neighborhoods, schools, transportation, and amenities, helping you make an informed decision.</p>
                    </li>
                    <br/>
                    <li>
                        <span> Protection from scams</span>
                        <p className='w-[806.8px] text-[14.1px] -ml-4 font-normal'>Rental agents prevent you from scams by verifying ownership, checking landlords, and ensuring legally sound leases, creating a safe rental process.</p>
                    </li>
                    <br/>
                    <li>
                        <span>Schedule property viewings</span>
                        <p className='w-[806.8px] text-[14.1px] -ml-4 font-normal'>Say goodbye to endless property visits. Your agent can schedule and coordinate viewings for you, ensuring you see the most suitable options without the hassle.</p>
                    </li>
                    <br/>
                    <li>
                        <span>Communicate with landlords on your behalf</span>
                        <p className='w-[806.8px] text-[14.1px] -ml-4 font-normal'>These agents act as intermediaries, communicating with landlords on your behalf to address queries, negotiate terms, and facilitate effective communication throughout the rental process.</p>
                    </li>
                    <br/>
                    <li>
                        <span>Assist with lease negotiations</span>
                        <p className='w-[806.8px] text-[14.1px] -ml-4 font-normal'>Leave the negotiating to the pros. Rental agents are skilled at securing favorable lease terms, rental rates, and other terms on your behalf.</p>
                    </li>
                    <br/>
                    <li>
                        <span>Help you through the application process</span>
                        <p className='w-[806.8px] text-[14.1px] -ml-4 font-normal'>Through the application process, rental agents provide the necessary forms, explain requirements, and assist with document submission.</p>
                    </li>
                    <br/>
                </ol>
            </div>
            
            <RealEstatePayment/>
            <RealEstatePayment/>
        </div>

        <div className='mt-4 ml-4 relative'>
            <img
                className='relative w-[480px] h-[480.6px]'
                src='https://media.canva.com/1/image-resize/1/200_112_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS81aUx4VS9NQUZzV3k1aUx4VS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAGt7cYi3fhJhUDer3TnyMkDLm0NiJlDoyQxndZcJ7m06&exp=1694607261&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAH5GXMYjjrDOmC5Kgg9Q8mIeJonVVmXZ7e_W5a09E64A'
            />
            <button className='w-[172.1px] h-[43.7px] bg-white absolute left-[50px] top-[15px] border-t-2 border-x-4 rounded-full border-[black]'>Rentel</button>
            <button className='w-[172.1px] h-[43.7px] bg-white absolute left-[250px] top-[15px] border-b-2 border-x-4 rounded-full border-[black]'>HOME DECOR</button>
            <button className='w-[172.1px] h-[43.7px] bg-white absolute left-[50px] top-[80px] border-t-2 border-x-4 rounded-full border-[black]'>DELHI NCR</button>
            <button className='w-[172.1px] h-[43.7px] bg-white absolute left-[250px] top-[80px] border-t-2 border-x-4 rounded-full border-[black]'>HELP GUIDE</button>
            <button className='w-[172.1px] h-[43.7px] bg-white absolute left-[50px] top-[145px] border-t-2 border-x-4 rounded-full border-[black]'>CONSTRUCTION</button>
            <button className='w-[172.1px] h-[43.7px] bg-white absolute left-[250px] top-[145px] border-t-2 border-x-4 rounded-full border-[black]'>LIFESTYLE</button>
            <button className='w-[172.1px] h-[43.7px] bg-white absolute left-[50px] top-[210px] border-t-2 border-x-4 rounded-full border-[black]'>TRENDS</button>
            <button className='w-[172.1px] h-[43.7px] bg-white absolute left-[250px] top-[210px] border-t-2 border-x-4 rounded-full border-[black]'>CO-WORKATION</button>
            <button className='w-[372.1px] h-[43.7px] bg-white absolute left-[50px] top-[275px] border-b-2 border-x-4 rounded-full border-[black]'>LEGAL AND TAXATION</button>
            <button className='w-[372.1px] h-[43.7px] bg-white absolute left-[50px] top-[340px] border-t-2 border-x-4 rounded-full border-[black]'>PACKERS AND MOVERS</button>
            <button className='w-[372.1px] h-[43.7px] bg-white absolute left-[50px] top-[405px] border-t-2 border-x-4 rounded-full border-[black]'>RETAIL AND HOSPITALITY</button>
            <img
                className='w-[480px] h-[292.1px] mb-4'
                src="https://media-public.canva.com/qKe4g/MAEFhFqKe4g/1/t.jpg"
            />
            <p className='w-[90%] text-center text-white font-bold absolute left-[20px] top-[610px] bg-slate-600 bg-opacity-30'>Start your home search on Deal Acres</p>
            <p className='w-[480px] h-[42.8px] text-[27px] bg-sky-100 pl-3'>You might also like</p>
            <hr className='bg-[#a6a6a6] h-[2px]'/>
            <div>{array}</div>
            <img
                className='mt-3 w-[480px]'
                src="https://media.canva.com/1/image-resize/1/800_607_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS94OGRORS9NQUZzV3h4OGRORS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAALyfwOVO99ct54U7rD1OMqI-VS2xuP-MZjbW4D3LuUxk&exp=1694605599&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAADUTy2QwNGsc2e1NYwUJLVVUbf0INAllbpvpGjG-7NST"
            />
        </div>
    </div>
  )
}

export default Main