'use client'

import { getOrdersByUser } from '@/api/orders';
import LoadingOrder from '@/components/products/LoadingOrder';
import ProductOrder from '@/components/products/Orders';

import { CONFIRMED_STATUS, DELIVERED_STATUS, PENDING_STATUS, SHIPPED_STATUS } from '@/constance/orderStatus'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


const OrderPages = () => {
  const [status, setStatus] = useState(PENDING_STATUS);
  const [getOrder, setGetOrder] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);


  const OrderTab = [
    {
      lable: "Pending",
      status: PENDING_STATUS,
    },
    {
      lable: "Confirmed",
      status: CONFIRMED_STATUS,
    },
    {
      lable: "Shipped",
      status: SHIPPED_STATUS,
    },
    {
      lable: "Delivered",
      status: DELIVERED_STATUS,
    },

  ]



  useEffect(() => {
    setLoading(true);
    getOrdersByUser(user.id, status).then((response) => {

      setGetOrder(response);
      setLoading(false);
    }).catch(error => console.log(error))
  }, [status])

  return (
    <section>
      <div className='mt-5 px-3 w-full  py-5 flex flex-col items-center gap-5 dark:bg-gray-800'>
        <div>
          <p className='font-Nunito-ExtraBold text-2xl dark:text-white'>Your Order {getOrder.length}</p>
        </div>
        <div className='w-full flex justify-between dark:text-white font-Nunito-Bold border-b  ' >
          {
            OrderTab.map((tap, index) => (

              <button key={index} onClick={() => setStatus(tap.status)} className={`${status === tap.status ? "border-b-2 border-b-gray-500" : ""} p-2`}>{tap.lable}</button>


            ))
          }
        </div>

      </div>
      {loading && (<div className='flex flex-col gap-3'>
        <LoadingOrder />
        <LoadingOrder />
      </div>
      )}
      <div className='flex flex-col gap-4'>


        {getOrder == 0 && <div className='text-center  dark:text-white '>No orders</div>}
        {
          getOrder.map((order, index) => (
            <ProductOrder key={index} order={order} status={status} />

          ))
        }

      </div>
    </section>

  )
}

export default OrderPages