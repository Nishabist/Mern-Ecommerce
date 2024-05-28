'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FaUser } from "react-icons/fa";


function page() {
  const dispatch= useDispatch()
  const {userDetails,isLoggedIn} = useSelector(state=>state.user)
  return (
    <div>
    
          
    <div className="flex items-center gap-7">
          
      <FaUser/> 
       
             
          </div>
    </div>
  )
}

export default page
