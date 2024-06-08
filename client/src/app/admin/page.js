'use client'

import React, { useEffect,useState } from 'react'
import Link from 'next/link'
import Header from '../../Component/Header/page'
import Footer from '../../Component/Footer/page'
import { Button, Space, Table, Tag } from 'antd';
const { Column } = Table;
function page() {
  
  const [userList, setUserList] = useState([])
  const userFetch = async () => {
    const res = await fetch(`http://localhost:4001/user`)
    const data = await res.json()
    setUserList(data.user)
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'phoneNumber',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
   
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit </a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  useEffect(()=>{
    userFetch()
  },[])

  return (
    <div>
      <Header/>
      <div className='flex justify-around'>
    <div className='bg-amber-400'>
     
      <section class="text-gray-600 body-font">
       
  <div class="container px-5 py-24 mx-auto ">
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
    <div>
    <Table columns={columns} dataSource={userList.map((item, id) => ({
          key: id, 
          name: item.name,
          email: item.email,
          phoneNumber: item.phoneNumber,
          tags: item.tags,
        }))} />
    </div>
   </div>
    <Footer/>
    </div>
  )
}

export default page
