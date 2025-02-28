'use client'

import AllOrderTable from "@/components/products/Table";
import { useEffect } from "react";
import { useSelector } from "react-redux"

const AllOrders = () => {
    const { user } = useSelector((state) => state.auth);

    // useEffect(()=>{
    //     if(!user?.roles.includes("ADMIN")) throw new Error("Access Denied");
    // },[user])
    return (
        <section className='mt-5 w-full px-6 py-5 flex flex-col items-center gap-5 dark:bg-gray-800'>
            <div>
                <p className='font-Nunito-ExtraBold text-2xl dark:text-white'>All Orders</p>
            </div>
            <AllOrderTable/>

        </section>
    )
}

export default AllOrders