import React from 'react'
import PostImage from '../models/PostImage';
import Card1 from '../models/Card1';
import Card2 from '../models/Card2';

const Posts = () => {
    let array = [] ;
    for(let i = 0 ; i < 3 ; i++) {
        array.push(<Card1 key={i}/>) ;
        array.push(<Card2 key= {i}/>) ;
    }
    let arrayImage = [] ;
    for(let i = 0 ; i < 3 ; i++) {
        arrayImage.push(<PostImage key={i}/>) ;
    }

  return (
    <div className='flex flex-row bg-sky-100'>
        <div className='w-[12/4]'>{array}</div>
        <div className='w-[12/4]'>{array}</div>
        <div className='w-[12/4]'>{arrayImage}</div>
    </div>
  )
}

export default Posts