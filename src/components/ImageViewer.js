'use client'
import React, { useState } from 'react'
import productImg from "@/img/headphone.jpeg"
import placeholder from "@/img/placeholder.png"
import Image from 'next/image'
const ImageViewer = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    return (
        <div>
            <Image
                src={product.imageUrls[currentImageIndex] || placeholder}
                alt="Main Product"
                width={500} height={500}
                className="w-full  h-auto rounded-lg mt-4"
            />
            <div className='min-h-min grid grid-cols-3 gap-3'>
                {
                    product.imageUrls.map((img, index) => (
                     
                        <Image
                            src={img }
                            alt="Main Product"
                            width={100} height={100}
                            className={`${currentImageIndex===index?"bg-blue-300":"bg-white"} h-auto rounded-lg mt-2 p-2 `}
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            
                        />
                    ))
                }

            </div>

        </div>
    )
}

export default ImageViewer