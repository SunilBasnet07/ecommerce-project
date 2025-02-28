import { getProductsByBrand } from '@/api/product';
import ProductCard from '@/components/products/Card';
import React from 'react'

const ProductsByBrand = async ({ params }) => {
    const brand = (await params).brandId;
    const products = await getProductsByBrand(brand);

    return (
        <section className="relative pt-7 ">
      <h1 className='text-center text-2xl font-Nunito-ExtraBold dark:text-white py-8'>Brands of {brand}</h1>


            <div className=" h-svh grid w-full md:grid-cols-3 sm:grid-cols-2 dark:bg-gray-800 lg:grid-cols-4 px-8 gap-5">

                {
                    products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                }


            </div>

        </section>
    )
}

export default ProductsByBrand