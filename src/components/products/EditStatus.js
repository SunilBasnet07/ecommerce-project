'use client'
import { Pencil } from 'lucide-react'
import React, { useState } from 'react'
import Modal from '../Modal'
import { orderStatus } from '@/constance/orderStatus'
import { useForm } from 'react-hook-form'
import { updateStatus } from '@/api/orders'
import { toast, ToastContainer } from 'react-toastify'
import Spinner from '../Spinner'

const EditStatus = ({ order,setIsStatusUpdated }) => {
    const [showEditPopup, setShowEditPopup] = useState(false)
    const [ loading, setLoading]  = useState(false);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            status: order?.status,
        }
    });

    function submitForm(data) {

      
        setLoading(true)
        updateStatus(order.id, data).then(() => {
          
            toast.success("Order status updated successfully", {
                autoClose: 1500,
            })
            setIsStatusUpdated(true)
        }).catch(error => (
                toast.error(error.response?.data, {
                    autoClose: 1500,
                })
            )).finally(() => {
                    setLoading(false)
                    setShowEditPopup(false)
                })

        


    
    }

    return (
        <div>
            <button onClick={() => setShowEditPopup(true)}><Pencil className='h-4 w-4 hover:text-green-400' /> </button>
            <Modal
                title="Edit Order Status"
                showModal={showEditPopup}
                setShowModal={setShowEditPopup}>

                <form className='flex flex-col gap-12 mt-3' onSubmit={handleSubmit(submitForm)}>
                    <div className='flex flex-col justify-start gap-2'>
                        <label htmlFor='status' className='text-lg text-left font-Nunito-Semibold'>Status</label>
                        <select id='status'  {...register("status")} className='border px-2 py-2 rounded-md'>
                            <option  >Select Status </option>
                            {
                                orderStatus.map((order, index) => (

                                    <option className='text-sm font-Nunito-Bold' key={index} disabled={order.disabled} value={order.value}>{order.label}</option>



                                ))
                            }

                        </select>

                    </div>

                    <div className='flex justify-between items-center'>
                        <button onClick={() => setShowEditPopup(false)} className='px-2 py-1 font-Nunito-Bold text-sm rounded-sm text-white bg-red-500 hover:bg-red-600'>Cancel</button>
                        <button disabled={loading} type='submit' className="disabled:cursor-not-allowed text-sm disabled:bg-slate-400 px-2 py-1 font-Nunito-Bold rounded-sm text-white bg-blue-500 hover:bg-blue-600 flex gap-2"><span>Update</span>{loading && (<Spinner edit={"h-5 w-5"} />)} </button>
                    </div>
                </form>

               
            </Modal>
            <ToastContainer />
        </div>
    )
}

export default EditStatus