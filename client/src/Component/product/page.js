import React from 'react'
import Link from 'next/link'
import { useDispatch ,useSelector} from 'react-redux';
import { AddToCart } from '../../Redux/slices/cartSlice';



function product(props) {
  const dispatch=useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleToCart = () => {
    dispatch(AddToCart({ cartItems: props}));

  };
  return (
    <div className='max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-12 p-5 border-2 border-black '>
       <Link href={`/product/${props.data._id}`}>
      <div className="bg-white p-4 rounded">
        
                            <div className="w-40">
                                <div className="w-35 h-32 flex justify-center items-center">
                                    <img
                                        src={`http://localhost:4001/uploads/image/${props.data.image}`}
                                        className="mx-auto object-fit h-full"
                                    />
                                   
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl mb-2">{props.data.productName}</h1>
                              
                            </div>
                            <p className="font-bold ">Rs {props.data.selling}</p>
                            <p className='text-red-500 font-semibold line-through '>Rs{props.data.price}</p>
                        </div>
                    
                   
                    </Link>

                    <button className="bg-red-400 hover:bg-red-700 border-rounded text-white px-3 py-0.5 rounded-full my-3" onClick={handleToCart}>Add to Cart</button>
    </div>
  )
}

export default product
