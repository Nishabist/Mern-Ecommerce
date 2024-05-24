'use client'
import React, { useEffect, useState } from 'react'
import Uploadproduct from '../../../Component/uploadproduct/page'
import Card from '../../../Component/Card/page'
function allProduct() {
    const[openUploadProduct,setOpenUploadProduct ] = useState(false)
    const [allProduct ,setAllProduct]=useState([])
    

    const fetchProduct =async()=>{
      const res = await fetch('http://localhost:4001/get-product',)
      const data = await res.json()
      setAllProduct(data.products  || [])
    }
    useEffect(()=>{
      fetchProduct()
    },[])
  return (
    <div>
      <div className='bg-white py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg '>All Product</h2>
        <button className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-slate-200' onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
       
      </div>
      <div className='flex  items-center flex-wrap gap-5 py-4'>
      {
  allProduct.length > 0 && allProduct.map(product => (
    <div key={product._id} >
      <Card data={product} />
    </div>
  ))
}
      </div>
      {
        openUploadProduct && (
            <Uploadproduct onClose={()=>setOpenUploadProduct(false)}/>
        )
      }
     
    </div>
  )
}

export default allProduct