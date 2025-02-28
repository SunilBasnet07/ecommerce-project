'use client'
import { PENDING_STATUS } from '@/constance/orderStatus';
import Image from 'next/image';
import React from 'react'
import ConfirmOrder from './ConfirmOrder';
import placeHolder from "@/assests/placeholder1.png"




const ProductOrder = ({ order, status }) => {

  return (
    <div className='rounded-md'>
      <div className='py-3 px-4 bg-slate-100 dark:bg-gray-900  dark:text-white font-Nunito-SemiBold'>
        <h1 className='opacity-60'>OrderId</h1>
        <div className='flex justify-between items-center '>
          <p>{order.id}</p>
          <h1 className='px-1 rounded-sm font-Poppins bg-primary-200 text-white text-xs'>{order.status}</h1>

        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-3 py-4 text-sm '>
          {
            order.orderItems.map((item, index) => (
              <div key={index} className='flex  justify-start gap-20 items-center border py-1  '>
                <Image src={item?.product?.imageUrls[0] || placeHolder} alt='image' height={100} width={100} />
                <div>
                  <h1 className='font-Nunito-Bold text-lg'>{item?.product?.name || ""}</h1>
                  <h2>Brand: {item?.product?.brand || ""}</h2>
                  <h3>{Math.floor(item?.product?.price * 0.9) || ""}</h3>
                  <h4>x{item?.quantity || ""}</h4>
                  <div>
                  </div>
                </div>
              </div>
            ))
          }





        </div>


      </div>
      <div className='flex justify-between bg-slate-200 items-center  px-4 py-3 font-Nunito-SemiBold dark:bg-gray-700 dark:text-white'>
        <h1>Total Price: <span className='font-Nunito-Bold text-lg'>${order.totalPrice}</span></h1>
        {/* <button className={`${status == PENDING_STATUS ? "px-2 py-1 rounded-sm text-white bg-primary-500 hover:bg-primary-600" : "hidden"} `}>Confirm Order</button> */}
        <ConfirmOrder status={status} order={order}/>
      </div>




    </div>
  )
}

export default ProductOrder