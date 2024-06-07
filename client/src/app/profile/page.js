'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FaUser } from "react-icons/fa";
import {setLoginDetails} from '../../Redux/slices/userSlice'


function page() {
  const dispatch= useDispatch()
  const {userDetail,isLoggedIn} = useSelector(state=>state.user)
  return (
    <div>
    
          
    <div className="flex items-center gap-7">
      {/* {JSON.stringify(userDetail)} */}
          
      <FaUser/> 
       
             {userDetail.name}
          </div>
    </div>
  )
}

export default page
