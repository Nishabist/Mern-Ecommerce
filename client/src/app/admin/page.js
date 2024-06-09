'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../../Component/Header/page'
import Footer from '../../Component/Footer/page'
import { Button, Space, Table, message } from 'antd';
import { MdDelete, MdModeEdit } from "react-icons/md";

const { Column } = Table;

function Page() {
  const [userList, setUserList] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const userFetch = async () => {
    try {
      const res = await fetch('http://localhost:4001/user');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setUserList(data.user);
    } catch (error) {
      messageApi.error('Failed to fetch users');
      console.error('Failed to fetch users:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch('http://localhost:4001/delete-user', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      messageApi.open({
        type: res.status === 200 ? 'success' : 'error',
        content: data.msg,
      });
      if (res.status === 200) {
        userFetch();
      }
    } catch (error) {
      messageApi.error('Failed to delete user');
      console.error('Failed to delete user:', error);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <button><MdModeEdit color='green' /></button>
          <button onClick={() => handleDelete(record._id)}><MdDelete color='red' /></button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    userFetch();
  }, []);

  return (
    <div>
      {contextHolder}
      <Header />
      <h1 className='font-bold text-xl text-center py-4'>Admin Page</h1>
      <div className='flex justify-around'>
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="-m-4">
                <div className="p-4">
                  <Link href="/admin/category">
                    <div className="bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">CATEGORY</h1>
                    </div>
                  </Link>
                </div>
                <div className="p-4">
                  <Link href="/admin/allproduct">
                    <div className="h-full bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Product</h1>
                    </div>
                  </Link>
                </div>
                <div className="p-4">
                  <div className="h-full bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">All User</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={userList.map((item, id) => ({
              key: id,
              _id: item._id,
              name: item.name,
              email: item.email,
              phoneNumber: item.phoneNumber,
            }))}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
