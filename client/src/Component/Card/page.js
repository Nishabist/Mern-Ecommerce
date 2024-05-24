'use client'

import React from 'react';



function card(props)  {
 
  return (
    <div className='bg-white p-4 rounded'>
      <div className='w-40'>
        <div className='w-32 h-32 flex justify-center items-center'>
                <img src={`http://localhost:4001/uploads/image/${props.data?.image}`} className='mx-auto object-fill h-full'/>
                </div>
                <h1 className='text-ellipsis line-clamp-2'>{props.data.productName}</h1>
               <p className='text-ellipsis line-clamp-2'>{props.data.description}</p> 
                </div>
                <p className='semi-bold'>
                 Rs{props.data.selling}
                </p>
                <button className='bg-red-400  hover:bg-red-700 border-rounded '>add to card</button>
                
    </div>
  )
}

export default card
