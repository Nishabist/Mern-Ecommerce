'use client';


import React,{useEffect,useState} from 'react'
import  Header from '../../../Component/Header/page'
import Footer from '../../../Component/Footer/page'
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

function page({params,props}) {
    const[productDetail,setProductDetail]=useState({})
    const fetchProduct=async()=>{
     const res=await fetch(`http://localhost:4001/products/${params._id}`)
     const data=await res.json()
     setProductDetail(data.productList)  
   }
   
     useEffect(()=> {
      fetchProduct()
     },[])
  return (
    <>
    {/* {JSON.stringify(productDetail)} */}
    <div>
      <Header/>
      <div className='container mx-auto p-4 flex justify-center gap-4' >
 
       <div className='h-[300px] w-[300px] lg-h-96 lg-w-96 ' >
        <img className='h-full w-full object-scale-down' src={`http://localhost:4001/uploads/image/${productDetail.image}`} />
        </div>

        <div className='' >  
        <p className=' px-2 '>{productDetail.brandName}</p>
           <p  className='text-2xl lg-text-4xl font-medium '> {productDetail.productName}</p> 
           <p className='capitalize text-slate-400'>{productDetail.categoryName}</p>
           <div className='flex text-red-500'><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></div>
           <div className='flex items-center gap-2 text-2xl font-medium'>
           <p className='text-red-600'>Rs.{productDetail.selling}</p>
           <p className='text-slate-400 line-through'>Rs.{productDetail.price}</p> 
           </div>
        <div className='flex items-center gap-3 my-2'>
        <button className='border-2 border-red-600 px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white'>Buy Now</button> <br/>
           <button className='border-2 border-red-600 px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white' >Add To Cart</button>
           
        </div>
        <div>
          <p className='text-slate-400 font-medium my-1 '>Description :</p>
          <p>{productDetail.description}</p>
        </div>
          
           </div>



       {/* {productDetail.image} */}
       </div>
       <Footer/>
      </div>
    
    </>
  )
}

export default page