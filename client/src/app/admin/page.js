import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <section class="text-gray-600 body-font">
       
  <div class="container px-5 py-24 mx-auto">
  <h1>Admin Page</h1>
    <div class="flex flex-wrap -m-4">
    
   
      <div class="p-4 lg:w-1/3">
      <Link href="/admin/category">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">CATEGORY</h1>
          
        
         
        </div>
        </Link>
      </div>
      
      
      <div class="p-4 lg:w-1/3">
      <Link href="/admin/allproduct">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
   
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Product</h1>
         
          
          
        </div>
        </Link>
      </div>
    

      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">All User</h1>
         
          
          
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default page
