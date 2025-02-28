import { getProductsByCategory } from '@/api/product';
import ProductCard from '@/components/products/Card';
import React from 'react'

const ProdcutsByCategory = async ({ params }) => {
  const category = (await params).categoryId;

  console.log(category)

  const products = await getProductsByCategory(category);


  return (
    <section className=" max-w-screen-2xl pt-7 dark:gray-800  h-[200svh]">
      <h1 className='text-center text-2xl font-Nunito-ExtraBold dark:text-white py-8'>Categories of {category}</h1>




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

export default ProdcutsByCategory