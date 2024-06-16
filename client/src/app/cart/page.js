'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveFromCart } from '../../Redux/slices/cartSlice';
import {loadStripe} from '@stripe/stripe-js'; 
import product from '@/Component/product/page';


const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
console.log(cartItems)
  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    const sellingPrice = parseFloat(item?.cartItems?.data?.selling ?? 0);
    return total + sellingPrice * 1; // Assuming quantity is always 1 for simplicity
  }, 0);

  const handleRemove = (item) => {
    dispatch(RemoveFromCart(item));
  };

  const makepayment = async()=>{
    const stripe=await loadStripe("pk_test_51PRY2LP8HNsNUieMk5ZWngJwELBPwt1MJfUV0kZWKVpLcEigoyH6h1IeJzye4VT1gZ9cWXebOnwGqHxKKPe1zfHx00Qi68TAVp")
   
    const body ={
     cartItems:cartItems
    }
    
    const response=await fetch("http://localhost:4001/create-checkout-session",{
      method:'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
   
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
      <div className="space-y-8">
        
        {/* <pre>{JSON.stringify(cartItems, null, 2)}</pre> */}

        {cartItems.length > 0 ? (
          cartItems.map((cartItem, index) => {
            const item = cartItem?.cartItems?.data; // Access the actual product data safely
            if (!item) return null; // Skip rendering if item is undefined
            
            // const imageUrl = item.image[0]; // Get the image URL
            // console.log(`Image URL for ${item.productName}: ${imageUrl}`);

            return (
              
              <div key={item._id} className="flex justify-around items-center  w-[500px]">
                
                <img src={`http://localhost:4001/uploads/image/${item.image[0]}`} alt={item.productName} className="w-24 h-24 object-cover" />
                <h2 className="text-xl font-semibold">{item.productName}</h2>
                <p className="text-gray-600">Price: Rs{item.selling}</p>
                <div className="">
                 
              
                  
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
      <div className="mt-8 text-right flex p-3 gap-5">
        <h2 className="text-2xl font-bold">Total: Rs {totalPrice.toFixed(3)}</h2>
        <button className='bg-green-500 rounded-full p-3 ' onClick={makepayment}>Check out</button>
      </div>

    </div>
  );
};

export default CartPage;
