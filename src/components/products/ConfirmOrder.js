'use client'
import { PENDING_STATUS } from '@/constance/orderStatus'
import React, { useState } from 'react'
import Modal from '../Modal'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { checkoutOrder} from '@/api/orders'
import config from '@/config/config'
import { toast } from 'react-toastify'
import Spinner from '../Spinner'

const ConfirmOrder = ({ order, status }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  async function ordersConfirmed() {
    setLoading(true);
    try {
      const data = await checkoutOrder(order.id, {
        returnUrl: `${config.appUrl}/dashboard/orders/${order.id}/payment`,
        websiteUrl: config.appUrl,
        totalAmount: Math.floor(order.totalPrice * 100),
        orderName: order.orderItems[0].product.name,
      })
      window.location.href = data.payment_url;
      console.log(data);
    } catch (error) {
      toast.error(error.response.data, {
        autoClose: 1500,
      })
    } finally {
      setShowConfirmModal(false);
      setLoading(false);
    }

  }

  function onClickConfirmOrder() {
    if (user && user.address && user.address.city && user.address.city) {
      setShowConfirmModal(true);
    } else {
      router.push("/dashboard/profile");
    }
  }
  return (
    <div>
      <button onClick={onClickConfirmOrder} className={`${status == PENDING_STATUS ? "px-2 py-1 rounded-sm text-white bg-primary-500 hover:bg-primary-600" : "hidden"} `}>Confirm Order</button>
      <Modal
        title="Confirm Product"
        showModal={showConfirmModal}
        setShowModal={setShowConfirmModal}
        className={"px-5 py-5 min-h-40 w-[35%] "}>
        {loading ? <div className='flex justify-center items-center py-5'><Spinner edit={"h-[70px] w-[70px]"} /></div> : <>
          <div className='flex flex-col gap-7'>
            <p className='font-Nunito-Bold mt-3'>Do you want to sure Confirm this product?</p>
            <div className='flex justify-between items-center'>
              <button onClick={() => setShowConfirmModal(false)} className='px-2 py-1 font-Nunito-Bold rounded-sm text-white bg-red-500 hover:bg-red-600'>Cancel</button>
              <button onClick={ordersConfirmed} className='px-2 py-1 font-Nunito-Bold rounded-sm text-white bg-blue-500 hover:bg-blue-600'>Confirm</button>
            </div>
          </div>
        </>}

      </Modal>
    </div>
  )
}

export default ConfirmOrder