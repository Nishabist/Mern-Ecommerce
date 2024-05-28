'use client'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AddToCart } from '@/Redux/slices/cartSlice'
import CartProduct from '../../Component/CartProduct/page'
const Page = () => {
    
  const { cartItems } = useSelector(state => state.cart.cartItems);
  console.log(cartItems)
  const cartItemsArray = Array.isArray(cartItems) ? cartItems : Object.values(cartItems);

  //  useEffect({

  //  },[cartItems])

//    const sumPrice = () => {
//     let totalPrice = 0;
//     productDetail.map((item) => {
//       totalPrice = totalPrice + (item.price * item.quantity);
//     })
//     setTotal(totalPrice);
//   }
    return (
        <div>
            cart
            {/* {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index}>
            <h2>{index.productName}</h2>
            <p>Price: {item.price}</p>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )} */}
      {cartItemsArray.length > 0 ? (
        cartItemsArray.map((item, index) => (
          <CartProduct cartItem={item} key={index} />
        ))
      ) : (
        <p>No items in the cart</p>
      )}
      {/* {cartItems.data.productName} */}
        </div>
    );
}

export default Page;
