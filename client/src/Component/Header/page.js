'use client'
import React  from "react";
import Image from 'next/image'
import { GrSearch } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link'


function head() {
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
             <FaUser/> 
          </div>
          
            <div className="text-2xl relative">
            <span><FaShoppingCart /></span>
          <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
            <p className="text-sm">0</p>
          </div>
          </div>
        </div>
      
      <div>
      <Link href="/login" className="px-2 py-1 rounded-full text-white bg-red-600 hover:bg-red-700 ">Login</Link>
       
      </div>
       </div>

    </header>
    </>
  )
}

export default head