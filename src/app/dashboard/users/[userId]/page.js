'use client'
import { getUserById } from '@/api/user'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const userspage = () => {
    const params = useParams();
    const [userData, setUserData] = useState([]);
    const id = params.userId;
    useEffect(() => {
        getUserById(id).then((data) => {
            console.log(data)
            setUserData(data);
        }).catch(error => error.response.data)
    }, [])
    return (
        <section className='mt-5 w-full px-6 py-5 flex flex-col items-center gap-5 dark:bg-gray-800'>
            <div>
                <p className='font-Nunito-ExtraBold text-2xl dark:text-white'>User Dat</p>
            </div>
            <table className="w-full border dark:text-white">
                <thead>
                    <tr className="py-4 font-Nunito-ExtraBold text-center">
                        <th className="py-3 px-2 border">User ID</th>
                        <th className="py-3 px-2 border">User Name</th>
                        <th className="py-3 px-2 border">Number</th>
                       
                        <th className="py-3 px-2 border">street</th>
                        <th className="py-3 px-2 border">City</th>
                        <th className="py-3 px-2 border">Province</th>  
                        <th className="py-3 px-2 border">Country</th>  
                        
                        

                    </tr>
                </thead>
                <tbody>
                    <tr className="font-Nunito-SemiBold text-center">
                        <td className="py-3 px-2 border">{userData.id} </td>
                        <td className="py-3 px-2 border">{userData.name}</td>
                        <td className="py-3 px-2 border">{userData.phone}</td>
                      
                        <td className="py-3 px-2 border">{userData?.address?.street}</td>
                        <td className="py-3 px-2 border">{userData?.address?.city}</td>
                        <td className="py-3 px-2 border">{userData?.address?.province}</td>
                        <td className="py-3 px-2 border">{userData?.address?.country}</td>
                        
                        
                       


                    </tr>
                </tbody>

            </table>
        </section>
    )
}

export default userspage