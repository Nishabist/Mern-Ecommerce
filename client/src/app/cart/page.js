'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveFromCart } from '../../Redux/slices/cartSlice'; 

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    const sellingPrice = parseFloat(item?.cartItems?.data?.selling ?? 0);
    return total + sellingPrice * 1; // Assuming quantity is always 1 for simplicity
  }, 0);

  const handleRemove = (item) => {
    dispatch(RemoveFromCart(item));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
      <div className="space-y-8">
        
        {/* <pre>{JSON.stringify(cartItems, null, 2)}</pre> */}

        {cartItems.length > 0 ? (
          cartItems.map((cartItem, index) => {
            const item = cartItem?.cartItems?.data; // Access the actual product data safely
            if (!item) return null; // Skip rendering if item is undefined
            
            const imageUrl = item.image[0]; // Get the image URL
            console.log(`Image URL for ${item.productName}: ${imageUrl}`);

            return (
              <div key={item._id} className="flex items-center gap-4 border-b pb-4">
                <img src={`http://localhost:4001/uploads/image/${imageUrl}`} alt={item.productName} className="w-24 h-24 object-cover" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.productName}</h2>
              
                  <p className="text-gray-600">Price: Rs{item.selling}</p>
                  <button
                    onClick={() => handleRemove(cartItem)}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
      <div className="mt-8 text-right">
        <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(3)}</h2>
      </div>
    </div>
  );
};

export default CartPage;
