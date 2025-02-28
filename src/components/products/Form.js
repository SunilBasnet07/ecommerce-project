'use client'
import React, { useState } from 'react'
import Modal from '../Modal'
import { useForm } from 'react-hook-form';
import { addProduct } from '@/api/product';
import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation';


const Form = () => {
    
    const [showProduct, setShowProduct] = useState(false);
    const{register,handleSubmit}=useForm();
    // const router = useRouter();
    async function submitForm(data){
        try {
            await addProduct(data);
            toast.success("Product added successfully.",{
                autoClose:1500,
              onClose: setShowProduct(false)
            })
           
        } catch (error) {
        console.log(error.message);
        }
    }
    return (
        <>
            <div>
                <button onClick={() => setShowProduct(true)} className='font-Nunito-Bold rounded-sm text-white bg-primary-500 hover:bg-primary-600 px-2 py-1 '>addProduct</button>
            </div>
            <div>
                <Modal showModal={showProduct} setShowModal={setShowProduct} title="Add Product" 
                >
                  
                    <form className="flex justify-center gap-3 flex-col" onSubmit={handleSubmit(submitForm)}>
                        
                        <div>
                            <label className="block text-sm  font-Nunito-Bold">Product Name*</label>
                            <input
                                type="text"
                                id="name"
                             {...register("name")}
                                className="w-full p-1 border  border-gray-400 shadow-sm font-Nunito rounded "

                            />

                        </div>
                        <div>
                            <label className="block text-sm  font-Nunito-Bold">Price*</label>
                            <input
                                type="number"
                                id="name"
                                {...register("price")}
                                className="w-full p-1 border  border-gray-400 shadow-sm font-Nunito rounded "

                            />

                        </div> 
                        <div>
                            <label className="block text-sm  font-Nunito-Bold">Category*</label>
                            <input
                                type="text"
                                id="name"
                                {...register("category")}
                                className="w-full p-1 border  border-gray-400 shadow-sm font-Nunito rounded "

                            />

                        </div>
                        <div>
                            <label className="block text-sm  font-Nunito-Bold">Brand*</label>
                            <input
                                type="text"
                                id="name"
                                {...register("brand")}
                                className="w-full p-1 border  border-gray-400 shadow-sm font-Nunito rounded "

                            />

                        </div>
                        <div className='flex justify-between mt-8'>
                            <button onClick={()=>setShowProduct(false)} className='px-2 py-1 min-w-[90px] bg-red-500 hover:bg-red-600 text-white font-Nunito-Bold rounded'>Cancel</button>
                            <button type='submit' className='px-2 py-1 min-w-[90px] bg-primary-500 hover:bg-primary-600 text-white font-Nunito-Bold rounded'>Save</button>
                      
                        </div>
                    </form>

                </Modal>
            </div>
        </>
    )
}

export default Form