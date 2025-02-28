'use client'
import { getAllOrders } from '@/api/orders'
import { PRODUCT_PAGE } from '@/constance/routes';
import { Pencil, Settings, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import EditStatus from './EditStatus';
import Spinner from '../Spinner';

const AllOrderTable = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isStatusUpdated, setIsStatusUpdated] = useState(true);

    useEffect(() => {
        if(!isStatusUpdated) return;
        // setLoading(true);
        getAllOrders()
            .then((response) => {
          
                setOrders(response);
            })
            .catch(error => {
                console.log(error.response?.data || "Error fetching orders");
            })
            .finally(() => {
               setLoading(false)
               setIsStatusUpdated(false);
            });
    }, [isStatusUpdated]);

    return (
        <>
            {loading ? (
                <Spinner edit={"h-[70px] w-[70px]"} />
            ) : (
                <table className="w-full border dark:text-white">
                    <thead>
                        <tr className="py-4 font-Nunito-ExtraBold text-center">
                            <th className="py-3 px-2 border">Order ID</th>
                            <th className="py-3 px-2 border">User ID</th>
                            <th className="py-3 px-2 border">Products</th>
                            <th className="py-3 px-2 border">IsPaid</th>
                            <th className="py-3 px-2 border">IsDelivered</th>
                            <th className="py-3 px-2 border">Status</th>
                            <th className="py-3 px-2 border text-center">
                                <Settings className="h-4 w-4" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border text-center">
                                <td className="text-xs border py-2">{order.id}</td>
                              <td className="text-xs border hover:underline text-blue-400 py-2"> <Link href={`/dashboard/users/${order.userId}`}>{order.userId}</Link></td>
                                <td className="text-sm border py-2 font-Nunito-Bold">
                                    {order.orderItems.map((item,index) => (
                                        <div key={index}>
                                            <Link href={`${PRODUCT_PAGE}/${item?.product.id}`} className="hover:underline">
                                                {item?.product?.name} x {item?.quantity}
                                            </Link>
                                        </div>
                                    ))}
                                </td>
                                <td className="text-xs border py-2">
                                    {order.isPaid ? (
                                        <span className="bg-blue-300 px-2 py-1 rounded-lg">Yes</span>
                                    ) : (
                                        <span className="bg-red-300 px-2 py-1 rounded-lg">No</span>
                                    )}
                                </td>
                                <td className="text-xs border py-2">
                                    {order.isDelivered ? (
                                        <span className="bg-blue-300 px-2 py-1 rounded-lg">Yes</span>
                                    ) : (
                                        <span className="bg-red-300 px-2 py-1 rounded-lg">No</span>
                                    )}
                                </td>
                                <td className="text-xs border py-2 text-blue-500">{order.status}</td>
                                <td className="text-xs border py-2 flex justify-center items-center gap-2">
                                    <EditStatus order={order} setIsStatusUpdated={setIsStatusUpdated} />
                                    <Trash2 className="h-4 w-4 hover:text-red-400 cursor-pointer" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default AllOrderTable;
