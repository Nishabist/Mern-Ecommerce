'use client'
import React  from "react";
import Image from 'next/image'
import { GrSearch } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link'
import { Button, ConfigProvider, Popover } from 'antd';
import { setLoginDetails } from '../../Redux/slices/userSlice';
import { AddToCart } from "@/Redux/slices/cartSlice";



function head() {
  const dispatch= useDispatch()
  const { userDetail} = useSelector(state=>state.user)
  const {cartItems}= useSelector(state=>state.cart)
  const text = <span></span>;
const content = (
  <div>
   
   <Link href="/profile"><span>Profile</span></Link>
   <p>{ userDetail.name}</p>
      <p onClick={()=>dispatch(handleLogout())}>Logout</p>
  </div>
);
 
  return (
    <>
    <header className="h-16 shadow-md">
       <div className=" h-full container mx-auto flex items-center px-4 justify-between">
        <div>
        <Image
      src="/Sahayogi.png"
      width={90}
      height={90}
      alt="Picture of the author"
    />
        </div>


        <div className="hidden lg:flex items-center w-full justify-between max-w-sm">
       <input type="text" placeholder="Search your product here" className="w-full outline-none"/>
       <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white "><GrSearch /></div>
        </div>

          
        <div className="flex items-center gap-7">
         
          <div className="test-3xl cursor-pointer">
          <Popover placement="bottom" title={text} content={content}>
          <Button><FaUser/> </Button>
        </Popover>
             
          </div>
          
            <div className="text-2xl relative"> <Link href="/cart">
            <span><FaShoppingCart /></span>
          <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
            <p className="text-sm">{cartItems.length}</p>
          </div>
          </Link>
          </div>
        
        </div>
      
      <div>
      <Link href="/login" className="px-2 py-1 rounded-full text-white bg-red-600 hover:bg-red-700 ">Login</Link>
       
      </div>
      <div>
      <Link href="/register" className="px-0 py-1 rounded-full text-white bg-red-600 hover:bg-red-700 ">register</Link>
       
      </div>
       </div>

    </header>
    </>
  )
}

export default head