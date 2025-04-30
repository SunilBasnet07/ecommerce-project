'use client';
import { Filter, ListRestart } from 'lucide-react';
import React, { useState } from 'react';
import Modal from '../Modal';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PRODUCT_PAGE } from '@/constance/routes';

const ProductFilter = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [sortData, setSortData] = useState(JSON.stringify({ createdAt: -1 }));
    const [limitData, setLimitData] = useState(10);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setmaxPrice] = useState(10000);

    function setFilter() {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', sortData);
        params.set('limit', limitData);
        params.set('min', minPrice);
        params.set('max', maxPrice);
        router.push(pathname + "?" + params.toString());
        setShowFilterModal(false);


    }
    function resetFilter() {

        setLimitData(10)
        setMinPrice(0)
        setmaxPrice(10000)
        router.push(PRODUCT_PAGE);
    }

    function setSort(e) {
        setSortData(e.target.value);
    }

    function setLimit(e) {
        setLimitData(e.target.value);
    }

    return (
        <div>
            <div className='flex gap-3'>
                <button
                    onClick={() => setShowFilterModal(true)}
                    className='text-white font-Nunito-Bold px-2 py-1 bg-blue-600 rounded-sm flex items-center gap-2 hover:bg-blue-700'
                >
                    <Filter className='h-6 w-6' />
                </button>
                <button
                    onClick={resetFilter}
                    className='text-white font-Nunito-Bold px-2 py-1 bg-blue-600 rounded-sm flex items-center gap-2 hover:bg-blue-700'
                >
                    <ListRestart className='h-6 w-6' />
                </button>
            </div>
            <Modal title="Product Filter" showModal={showFilterModal} setShowModal={setShowFilterModal}
            className={"px-10 py-5 min-h-40 w-[45%] "}>
                <div className='flex flex-col justify-center gap-5 py-4'>
                    <div className='flex gap-8 items-center'>
                        <label htmlFor='sort' className='text-nowrap font-Nunito-Bold'>Sort :</label>
                        <select
                            onChange={setSort}
                            value={sortData}
                            id='sort'
                            name='sort'
                            className='w-full border rounded-md dark:bg-gray-950 font-Nunito-SemiBold px-2 py-1 opacity-70'
                        >
                            <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
                            <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
                            <option value={JSON.stringify({ price: -1 })}>Price: high to low</option>
                            <option value={JSON.stringify({ price: 1 })}>Price: low to high</option>
                        </select>
                    </div>
                    <div className='flex gap-8 items-center'>
                        <label htmlFor='limit' className='text-nowrap font-Nunito-Bold'>Limit:</label>
                        <select
                            onChange={setLimit}
                            value={limitData}
                            id='limit'
                            name='limit'
                            className='w-full border dark:bg-gray-950 rounded-md dark:bg-gray-900 font-Nunito-SemiBold px-2 py-1 opacity-70'
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </div>
                    <div className='w-full flex gap-7 items-center'>
                        <label htmlFor='price' className='text-nowrap font-Nunito-Bold '>Price:</label>
                        <div className='flex gap-4 w-full'>
                            <div>
                                <label htmlFor='min' id='max' className='font-Nunito-Bold'>Min:</label>
                                <input
                                    type='number'
                                    id='min'
                                    value={minPrice}
                                    className='border rounded-md dark:bg-gray-950 px-2 py-1 w-full '
                                    onChange={(e) => setMinPrice(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor='max' id='max' className='font-Nunito-Bold'>Max:</label>
                                <input
                                    type='number'
                                    id='max'
                                    value={maxPrice}
                                    className='border rounded-md px-2 py-1 w-full dark:bg-gray-950'
                                    onChange={(e) => setmaxPrice(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-8'>
                        <button
                            onClick={() => setShowFilterModal(false)}
                            className='px-3 py-1 rounded-sm bg-red-500 text-white hover:bg-red-600'
                        >
                            Cancel
                        </button>
                        <button
                            onClick={setFilter}
                            className='px-3 py-1 rounded-sm bg-blue-500 text-white hover:bg-blue-600'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ProductFilter;
