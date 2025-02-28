


// import Form from '@/components/products/Form'

import Title from '@/components/Title'
import { PRODUCT_PAGE } from '@/constance/routes'
import Link from 'next/link'
import React from 'react'

const ProductLayout = async ({ children }) => {



  return (
    <div className=" h-svh relative top-14 dark:bg-gray-800    w-full ">
      {/* <div className="flex justify-between items-center py-8 dark:bg-gray-800 px-5">
        <Title label="Featured Product" />
        <div className='flex gap-2'>
        
          <Link href={`${PRODUCT_PAGE}/add`} className='font-Nunito-Bold rounded-sm text-white bg-primary-500 hover:bg-primary-600 px-2 py-1 '>Add Product</Link>
        </div>


      </div> */}





      {children}


    </div>
  )
}

export default ProductLayout