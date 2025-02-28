import React from 'react'
import heroImage from "@/assests/iphone_16.png"
import { PRODUCT_PAGE } from '@/constance/routes'
import Link from 'next/link'
import Image from 'next/image'
import Title from '../Title'

const Features = () => {
    return (
        <div className=' h-[70svh] px-20  py-4 mb-4 flex flex-col gap-6'>
           <span className='text-center '><Title label="Popular Features"/></span> 
            <div className=' flex justify-center items-center  dark:bg-gray-800'>

                <div className='flex flex-col items-start justify-center gap-4 relative px-2'>
                    <h1 className='text-6xl font-Nunito-ExtraBold dark:text-white'>Iphone 16 Pro Max</h1>
                    <p className='dark:text-white font-Poppins text-sm'>Built into your iPhone, Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking
                        privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.</p>
                    <h2 className='text-4xl font-Nunito-Bold text-orange-500'><span className='text-5xl'>$</span>4999</h2>
                    <Link href={PRODUCT_PAGE} className='px-4 py-2 font-Nunito-Bold rounded-sm border bg-primary-500 hover:bg-primary-600 text-white'>Buy Now</Link>
                    <button className='px-2 text-center absolute  -top-5 rounded-lg text-sm bg-primary-300 text-white font-Nunito-Bold'>Apple</button>

                </div>

                <Image src={heroImage} alt='slideimg' height={500} width={500} className='bg-blend-multiply h-full ' />


            </div>

        </div>

    )
}

export default Features