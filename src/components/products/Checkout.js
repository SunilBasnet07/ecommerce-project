'use client'
import React, { useState } from 'react'
import Modal from '../Modal'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { LOGIN_ROUTE, ORDER_ROUTE } from '@/constance/routes';
import { createOrder } from '@/api/orders';
import { toast, ToastContainer } from 'react-toastify';
import { clearCart } from '@/redux/cart/cartSlice';

const Checkout = () => {

    const [checkoutModal, setCheckoutModal] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const { product, totalPrice } = useSelector((state) => state.cart);
    const router = useRouter();
    const dispatch = useDispatch();
    async function checkoutProduct() {
        if (!user) return router.push(LOGIN_ROUTE);

        try {
            await createOrder({
                orderItems: product.map((product) => ({
                    product: product.id,
                    quantity: product.quantity,
                })),
                totalPrice: Math.floor(totalPrice * 0.9)

            })
            
            dispatch(clearCart());
            router.push(ORDER_ROUTE);

        } catch (error) {
            toast.error(error.response?.data)
        }
    }

    return (
        <>
            <div>
                <button onClick={() => setCheckoutModal(true)} className="bg-primary-500 float-right mr-16 text-white px-6 py-2 rounded-sm hover:bg-primary-600 transition-all">Checkout</button>
            </div>
            <Modal
                title="Checkout Product"
                showModal={checkoutModal}
                setShowModal={setCheckoutModal}>
                <div className='flex flex-col gap-7'>
                    <p className='font-Nunito-Bold mt-3'>Do you want to sure checkout this product?</p>
                    <div className='flex justify-between items-center'>
                        <button onClick={() => setCheckoutModal(false)} className='px-2 py-1 font-Nunito-Bold rounded-sm text-white bg-red-500 hover:bg-red-600'>Cancel</button>
                        <button onClick={checkoutProduct} className='px-2 py-1 font-Nunito-Bold rounded-sm text-white bg-blue-500 hover:bg-blue-600'>Confirm</button>
                    </div>
                </div>
            </Modal>
            <ToastContainer/>
        </>
    )
}

export default Checkout