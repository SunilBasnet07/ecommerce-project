import { getProductById} from '@/api/product';
import Modal from '@/components/Modal';
import ProductFrom from '@/components/ProductFrom';
import React from 'react'

const EditProduct = async ({params}) => {

    const id = (await params).productid;
    const product = await getProductById(id);
   
 

    
  return (
    <div className=" h-svh dark:bg-gray-800  ">
      <div className='pt-20'>
        <ProductFrom isEditing={true} product={product} />
      </div>
    
    </div>
  )
}

export default EditProduct