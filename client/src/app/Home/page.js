'use client'
import React  from "react";
import { useState,useEffect } from "react";
import CategoryList from "../../Component/categorylist/page";
import Banner from "../../Component/Banner/page"
import Product from "../../Component/product/page"


function page() {
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
      const res = await fetch('http://localhost:4001/get-product');
      const data = await res.json();
      setAllProducts(data.products);
  };

  useEffect(() => {
      fetchProducts();
  }, []);
  return (
    <div>
    HOME
    
    <CategoryList/>
    <Banner/>
    <div className="flex items-center flex-wrap gap-5 py-4">
            {allProducts.length > 0 && allProducts.map(product => (
                <div key={product._id}>
                    
                    <Product data={product} />

                </div>
            ))}
             
        </div>
   
    </div>
  )
}

export default page
