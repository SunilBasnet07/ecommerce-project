'use client'
import { confirmOrder } from '@/api/orders';
import Spinner from '@/components/Spinner';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import successIcon from "@/assests/success.png"
import errorIcon from "@/assests/failed.png"
import Image from 'next/image';

const OrderPayment = ({ params, searchParams }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  async function orderConfirmation() {
    try {
      const id = (await params).orderId;
      const status = (await searchParams).status;
      console.log(id, status);

      await confirmOrder(id, status);
    } catch (error) {
      setError(error.response.data)
    } finally {
      setLoading(false)
      setTimeout(() => {
        router.push("/dashboard/orders");
      }, 2500)
    }
  }

  useEffect(() => {
    orderConfirmation();
  }, [])

  return (
    <div className='mt-5 px-3 w-full  py-8 flex flex-col items-center gap-2 dark:bg-gray-800'>
      {
        loading ? (<div className='w-full h-52 rounded-lg border flex dark:bg-gray-900 justify-center flex-col items-center gap-10 py-3 bg-slate-100'>
          <p className='font-Nunito-ExtraBold text-2xl dark:text-white'>Payment Verifying</p>
          <div><Spinner edit={"h-[70px] w-[70px]"} /></div>
        </div>) : error ? (<div className='w-full h-52 rounded-lg border flex justify-center flex-col items-center gap-2 dark:bg-gray-700  py-3 bg-slate-50'>
          <Image src={errorIcon} alt='errorimage' height={100} width={100} />
          <p className='font-Nunito-ExtraBold text-2xl  dark:text-white'>Your Payment Failed</p>
          <p className='font-Nunito-SemiBold text-sm dark:text-white'>Please try again</p>

        </div>) : (<div className='w-full h-52 rounded-lg border flex justify-center flex-col items-center gap-2  py-3 bg-slate-50'>
          <Image src={successIcon} alt='errorimage' height={100} width={100} />
          <p className='font-Nunito-ExtraBold text-2xl dark:text-white'>Your Payment Successfull</p>
          <p className='font-Nunito-SemiBold text-sm dark:text-white'>Thank you !</p>

        </div>)
      }
    </div>
  )
}

export default OrderPayment