'use client'

import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";



function card(props)  {
 
  return (
    <div className='bg-slate-400 text-white p-6 rounded shadow-md '>
    <div className='w-40'>
      <div className='w-32 h-32 flex justify-center items-center mb-4'>
        <img 
          src={`http://localhost:4001/uploads/image/${props.data?.image}`} 
          className='mx-auto object-cover h-full w-full rounded-md bg-white ' 
          alt={props.data.productName}
        />
      </div>
      <h1 className='text-ellipsis overflow-hidden whitespace-nowrap w-32 font-semibold'>
        {props.data.productName}
      </h1>
      <p className='text-ellipsis overflow-hidden whitespace-nowrap w-32  mb-2'>
        {props.data.description}
      </p>
      <p className='font-semibold text-lg'>
        $ {props.data.selling}
      </p>
      <p className='flex justify-between' ><span onClick={() => props.onEdit(props.data)}>< MdModeEdit size={30} color='green' /></span>
     <span onClick={() => props.onDelete(props.data._id)}>< MdDelete size={30} color='red' /></span> </p>
    </div>
  </div>
  )
}

export default card
