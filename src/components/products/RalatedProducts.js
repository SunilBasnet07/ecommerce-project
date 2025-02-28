import { getProductsByCategory } from '@/api/product';
import React from 'react'
import ProductCard from './Card';

const RalatedProducts = async ({product}) => {

  
    const products = await getProductsByCategory(product.category);
  return (
    <section className=" w-auto dark:gray-800  h-auto">
    <h1 className='text-2xl font-Nunito-ExtraBold dark:text-white py-8'>Related Products</h1>




    <div className="h-full grid w-full md:grid-cols-3 sm:grid-cols-2 dark:bg-gray-800 lg:grid-cols-4 px-8 gap-5">

      {
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      }


    </div>



  </section>
  )
}

export default RalatedProducts