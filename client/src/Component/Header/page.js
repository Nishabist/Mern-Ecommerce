'use client'
import React, { useState }  from "react";
import Image from 'next/image'
import { GrSearch } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link'
import { Button, ConfigProvider, Popover } from 'antd';
import { setLoginDetails ,handleLogout} from '../../Redux/slices/userSlice';
import { AddToCart } from "@/Redux/slices/cartSlice";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;


function head() {
  const [searchList,setSearchList]=useState([])

  const dispatch= useDispatch()
  const { userDetail,isLoggedIn} = useSelector(state=>state.user)
  const {cartItems}= useSelector(state=>state.cart)
  const text = <span></span>;
  const onSearch=async(value,_e,info)=>{
    const res = await fetch('http://localhost:4001/searchproduct?name='+value)
  const data = await res.json()
  setSearchList(data.product);
  }
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
  
        
        color: '#1677ff',
      }}
    />
  );
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


        <Search
      placeholder="input search text"
      enterButton="Search"
      size="medium"
      className="w-[500px]"
      suffix={suffix}
      onSearch={onSearch}
    />
        
        

          
        {isLoggedIn ?( <div className="flex items-center gap-7">
         
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
        
        </div>):(
     <div className="flex items-center ">
       
       <div>
      <Link href="/login" className="px-2 py-1 rounded-full text-white bg-red-600 hover:bg-red-700 ">Login</Link>
       
      </div>
      <div>
      <Link href="/register" className="px-0 py-1 rounded-full text-white bg-red-600 hover:bg-red-700 ">register</Link>
       
      </div> 
     </div>
    )}
       </div>

    </header>
    <div className="w-full bg-slate-100 py-4">
        <div className="container mx-auto">
          {searchList.length > 0 && (
            <div className="bg-slate-200 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">Search Results</h2>
              <div className="grid grid-cols-1 gap-4">
                {searchList.map((product) => (
                  <Link key={product._id} href={`/product/${product._id}`}>
                  <div className="block bg-white p-4 rounded-lg shadow hover:bg-gray-100 transition">
                    <h3 className="text-xl font-semibold">{product.productName}</h3>
                   
                  </div>
                </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default head