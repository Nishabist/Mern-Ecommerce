'use client'
import React  from "react";
import { useState,useEffect } from "react";
import CategoryList from "../../Component/categorylist/page";
import Banner from "../../Component/Banner/page"
import Product from "../../Component/product/page"
import { Pagination } from 'antd';


function page() {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchProducts = async () => {
      const res = await fetch('http://localhost:4001/get-product?page='+page);
      const data = await res.json();
      setAllProducts(data.products);
  };

  useEffect(() => {
      fetchProducts();
  }, []);
  return (
    <div className="bg-amber-400">
   
    
    <CategoryList/>
    <Banner/>
    <div className="flex items-center flex-wrap gap-5 py-4">
            {allProducts.length > 0 && allProducts.map(product => (
                <div key={product._id}>
                    
                    <Product data={product} />

                </div>
            ))}
             
        </div>
        <Pagination onChange={(page)=>fetchProducts(page)} defaultCurrent={1} total={50} />
    </div>
  )
}

export default page
