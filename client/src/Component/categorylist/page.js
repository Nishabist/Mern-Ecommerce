import Link from 'next/link';
import React, { useEffect, useState } from 'react';


function CategoryList() {
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            try {
                const res = await fetch('http://localhost:4001/productcategory');
                const data = await res.json();
                setCategoryProducts(data.categories || {}); // Store categories in state
                
            } catch (error) {
                console.error('Error fetching category products:', error);
            }
        };

        fetchCategoryProducts();
    }, []);

    return (
        <div className='container mx-auto p-4'>
           <div className='flex items-center gap-4 justify-between overflow-scroll'>
             {/* Loop through each category */}
             {Object.entries(categoryProducts).map(([categoryName, products], index) => (
                <div key={index} className='p-2 '>
                    {/* <h2>{categoryName}</h2> */}
                    {/* Render only the first product within each category */}
                    {products.length > 0 && (
                        <Link href={'/productpage'+ products?.categoryName} className='cursor-pointer' >
                          <div className='w-20 h-20 rounded-full overflow-hidden p-2 bg-white flex items-center justify-center'> 
                                              {/* <img src={products[0].image} alt={products[0].productName} className='bg-red-400 w-30 h-40 '/> */}
                            <img src={`http://localhost:4001/uploads/image/${products[0].image}`} className='mx-auto object-fill h-full'/>
                          </div>
                            <p className='text-center text-sm md:text-base capitalize'>{products[0].categoryName}</p>
                           
                        </Link>
                       
                        
                    )}
                </div>
                
            ))}
           </div>
        </div>
    );
}

export default CategoryList;
