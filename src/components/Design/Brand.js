import { getProductsByBrand } from '@/api/product';
import ProductCard from '@/components/products/Card';
import React from 'react'
import Title from '../Title';

const PopularBrand = async () => {

    const products = await getProductsByBrand("Apple");

    return (
        <div className='mt-2  flex flex-col gap-6 px-20 min-h-svh '>
            <span className='text-center '><Title label="Popular Brands" /></span>



            <div className=" h-svh grid w-full md:grid-cols-3 sm:grid-cols-2 dark:bg-gray-800 lg:grid-cols-4 px-8 gap-5">

                {
                    products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                }


            </div>

        </div>
    )
}

export default PopularBrand