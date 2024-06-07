import React, { useEffect, useState } from 'react';

function CategoryList() {
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);
    const [selectedCategoryName, setSelectedCategoryName] = useState('');

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            try {
                const res = await fetch('http://localhost:4001/productcategory');
                const data = await res.json();
                setCategoryProducts(data.categories || {});
            } catch (error) {
                console.error('Error fetching category products:', error);
            }
        };

        fetchCategoryProducts();
    }, []);

    const handleCategoryClick = async (categoryName) => {
        try {
            const res = await fetch(`http://localhost:4001/categoryproducts?categoryName=${categoryName}`);
            const data = await res.json();
            if (data.success) {
                setSelectedCategoryProducts(data.data || []);
                setSelectedCategoryName(categoryName);
            } else {
                console.error('Error:', data.message);
            }
        } catch (error) {
            console.error('Error fetching products for category:', error);
        }
    };

    return (
        <div className='container mx-auto p-4'>
            <div className='flex items-center gap-4 justify-between overflow-scroll'>
                {Object.entries(categoryProducts).map(([categoryName, products], index) => (
                    <div key={index} className='p-2' onClick={() => handleCategoryClick(categoryName)}>
                        {products.length > 0 && (
                            <div className='cursor-pointer'>
                                <div className='w-20 h-20 rounded-full overflow-hidden p-2 bg-white flex items-center justify-center'>
                                    <img src={`http://localhost:4001/uploads/image/${products[0].image}`} className='mx-auto object-fill h-full' />
                                </div>
                                <p className='text-center text-sm md:text-base capitalize'>{products[0].categoryName}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {selectedCategoryProducts.length > 0 && (
                <div className='mt-8 w-full'>
                    <h1 className='text-2xl font-bold mb-4 capitalize'>{selectedCategoryName} Products</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {selectedCategoryProducts.map((product, index) => (
                            <div key={index} className='p-2 border rounded-lg'>
                                <img src={`http://localhost:4001/uploads/image/${product.image}`} alt={product.productName} className='w-full h-40 object-cover' />
                                <h2 className='text-lg font-semibold'>{product.productName}</h2>
                                <p className='text-sm'>{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CategoryList;
