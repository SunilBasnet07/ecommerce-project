'use client'
import { addToCart } from '@/redux/cart/cartSlice';
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify';

const AddToCart = ({product}) => {
    const dispatch = useDispatch();


    function addProductCart(){
           dispatch(addToCart({id:product.id,price:product.price,name:product.name,imageUrls:product.imageUrls}))
           toast.success(`${product.name} added to cart successfully.`,{
            autoClose:1500,
          })
    }

    // useEffect(()=>{
       
    // },[product])
  return (
    <div>
         <button onClick={addProductCart} className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600">Add to Cart </button>
         <ToastContainer/>
    </div>
  )
}

export default AddToCart