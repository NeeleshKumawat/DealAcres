import React from 'react'


const CitiesSearch = () => {
    let citiescol1 = [] ;
    let citiescol2 = [] ;
    let citiescol3 = [] ;
    for(let i = 0 ; i < 3 ; i++) {
        citiescol1.push(<div>
            <p>Real Estate Agent in Bhiwani</p>
            <p>Real Estate Agent in Ambala</p>
            <p>Real Estate Agent in Jhajjar</p>
            <p>Real Estate Agent in Panipat</p>
            <p>Real Estate Agent in Sonepat</p>
            <p>Real Estate Agent in Rewari</p>
            <p>Real Estate Agent in Jind</p>
        </div>)
    }
    for(let i = 0 ; i < 3 ; i++) {
        citiescol2.push(<div>
            <p>Real Estate Agent in Kaithal</p>
            <p>Real Estate Agent in Sirsa</p>
            <p>Real Estate Agent in Faridabad</p>
            <p>Real Estate Agent in Gurgaon</p>
            <p>Real Estate Agent in Bhiwani</p>
            <p>Real Estate Agent in Kurukshetra</p>
            <p>Real Estate Agent in Yamunanagar</p>
        </div>)
    }
    for(let i = 0 ; i < 4 ; i++) {
        citiescol3.push(<div>
            <p>Real Estate Agent in Palwal</p>
            <p>Real Estate Agent in Karnal</p>
            <p>Real Estate Agent in Rahtak</p>
            <p>Real Estate Agent in Fatehabad</p>
            <p>Real Estate Agent in Panchkula</p>
            <p>Real Estate Agent in Charkhi Dadri</p>
        </div>)
    }
  return (
    <div className='mb-4'>
    <h1 className='font-bold w-[499.5px] h-[40.8px] text-[25.6px] ml-5 mb-3'>Search for homes by city</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-4 w-[1300.8px] mx-auto'>
        <div>
            <div>{citiescol1}</div>
            <div>
                <p>Real Estate Agent in Faridabad</p>
                <p>Real Estate Agent in Gurgaon</p>
                <p>Real Estate Agent in Bhiwani</p>
            </div>
        </div>
        <div>
            <div>{citiescol2}</div>
            <div>
                <p>Real Estate Agent in Faridabad</p>
                <p>Real Estate Agent in Gurgaon</p>
                <p>Real Estate Agent in Bhiwani</p>
            </div>
        </div>
            <div>{citiescol3}</div>
            <div>{citiescol3}</div>
        </div>
        
    <div className='flex flex-row justify-center '>
        <button className='text-white px-4 py-2 font-bold bg-[#0061fd] rounded-lg'>View More Cities</button>
    </div>
    </div>
  )
}

export default CitiesSearch