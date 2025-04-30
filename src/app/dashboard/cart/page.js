"use client";

import Modal from '@/components/Modal';
import { decreaseQuantity, increaseQuantity, removeCartProduct } from '@/redux/cart/cartSlice';
import { CircleMinus, CirclePlus, Cog, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import placeholder from "@/img/placeholder.png"
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify';
import Checkout from '@/components/products/Checkout';

const CartPage = () => {
    const { product, totalPrice } = useSelector((state) => state.cart);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectProduct, setselectProduct] = useState();
    const dispatch = useDispatch();

    function deleteProduct(product) {
        setShowDeleteModal(true)
        setselectProduct(product);
    }

    function deleteCartProduct() {
        dispatch(removeCartProduct(selectProduct));
        setShowDeleteModal(false);
        toast.success(`${selectProduct.name} is deleted from cart successfully.`, {
            autoClose: 1500,
        })
    }

    return (
        <section className='mt-5 w-full px-6 py-5 flex flex-col items-center gap-5 dark:bg-gray-800'>
            <div>
                <p className='font-Nunito-ExtraBold text-2xl dark:text-white'>Your Cart ({product.length} items)</p>
            </div>
            <table className='w-full text-left mt-5 border-collapse'>
                <thead>
                    <tr className='border-b dark:text-white'>
                        <th className='font-Nunito-Bold p-3 text-md'>Sn.</th>
                        <th className='font-Nunito-Bold p-3 text-md'>Items</th>
                        <th className='font-Nunito-Bold p-3 text-md'>Price</th>
                        <th className='font-Nunito-Bold p-3 text-md'>Quantity</th>
                        <th className='font-Nunito-Bold p-3 text-md'>Total</th>
                        <th className='font-Nunito-Bold p-3 text-md text-center'><Cog /></th>
                      
                    </tr>
              
                
                    
                </thead>

         
              
                <tbody>
                   
                   
                    {
                        product.map((item, index) => (
                            <tr key={index} className='border-b dark:text-white  hover:bg-gray-100 dark:hover:bg-gray-700'>
                               
                                <td className='font-Nunito-SemiBold p-3'>{index + 1}</td>
                                <td className='font-Nunito-SemiBold flex items-center gap-2 p-3'>
                                    <Image src={item.imageUrls?.length > 0 ? item.imageUrls[0] : placeholder} alt='cartImg' height={40} width={40} />
                                    {item.name}
                                </td>
                                <td className='font-Nunito-SemiBold p-3'>${item.price}</td>
                                <td className='font-Nunito-SemiBold   flex gap-2 justify-center '>
                                    <button onClick={() => dispatch(decreaseQuantity(item))} disabled={item.quantity <= 1} className='text-sm disabled:text-gray-500 hover:text-red-600'><CircleMinus className='h-4 w-4' /></button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(increaseQuantity(item))} disabled={item.quantity > 5} className='text-sm disabled:text-gray-500 hover:text-green-600'><CirclePlus className='h-4 w-4' /></button>
                                </td>
                                <td className='font-Nunito-SemiBold p-3'>${item.price * item.quantity}</td>
                                <td className='font-Nunito-SemiBold p-3 '>
                                    <button onClick={() => deleteProduct(item)} className='hover:text-red-600'><Trash2 className='h-3 w-3' /></button>
                                </td>
                            </tr>
                        ))
                    }
                    <tr className=' w-full text-center text-sm'>
                        {
                            product.length==0 && ( <td colSpan={6} >Empty cart</td>)
                        }
                       
                    </tr>
                    <tr className='mt-5 dark:text-white'>
                        <td className="p-3 font-Nunito-Bold text-sm" colSpan={4}></td>
                        <td className="p-3 font-Nunito-Bold text-sm">Sub Total</td>
                        <td className="p-3 font-Nunito-Bold text-sm">${totalPrice}</td>
                    </tr>
                    <tr className='mt-5 dark:text-white'>
                        <td className="p-3 font-Nunito-Bold text-sm" colSpan={4}></td>
                        <td className="p-3 font-Nunito-Bold text-sm">Discount</td>
                        <td className="p-3 font-Nunito-Bold text-sm">-${Math.floor(totalPrice * 0.1)}</td>
                    </tr>
                    <tr className='mt-5 dark:text-white'>
                        <td className="p-3 font-Nunito-Bold text-sm" colSpan={4}></td>
                        <td className="p-3 font-Nunito-Bold text-sm">Grand Total</td>
                        <td className="p-3 font-Nunito-Bold text-sm">${Math.floor(totalPrice * 0.9)}</td>
                    </tr>
                </tbody>
            </table>
            <div className='w-full'>
                <Checkout/>
            </div>
            <Modal
                title="Delete Product"
                showModal={showDeleteModal}
                setShowModal={setShowDeleteModal}>
                <div className='flex flex-col gap-7'>
                    <p className='font-Nunito-Bold'>Do you want to delete this product?</p>
                    <div className='flex justify-between items-center'>
                        <button onClick={() => setShowDeleteModal(false)} className='px-2 py-1 font-Nunito-Bold rounded-sm text-white bg-red-500 hover:bg-red-600'>Cancel</button>
                        <button onClick={deleteCartProduct} className='px-2 py-1 font-Nunito-Bold rounded-sm text-white bg-blue-500 hover:bg-blue-600'>Confirm</button>
                    </div>
                </div>
            </Modal>
            <ToastContainer />
        </section>
    )
}

export default CartPage;