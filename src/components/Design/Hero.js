'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';

import heroImage from "@/assests/iphone_16.png"
import headePhone from "@/assests/headephone3.png"
import headePhone1 from "@/assests/cetaphil3.png"
// import heroImage from "@/assests/1.png"
// import headePhone from "@/assests/2.png"
// import headePhone1 from "@/assests/3.png"

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCT_PAGE } from '@/constance/routes';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    const slides =[
        {
           title: "Iphone 16 Pro Max ",
           price: 4999,
           brand:"Apple",
           image:heroImage,
           
        },
        {
            title: "JBL Headephone",
            price: 999,
            brand:"JBL",
            image:headePhone,
            
         },
         {
            title: "Cetaphil Moisturizer",
            price: 99,
            brand:"gentle",
            image:headePhone1,
            
         },
    ]
    return (
       
            <Swiper
            modules={[Pagination,Autoplay]}
            pagination={{clickable:true}}
            autoplay={{delay:2500}}
            loop={true}
            >
                {
                    slides.map((slide,index)=>(
                        <SwiperSlide key={index}>
                        <div className=' grid grid-cols-2 mt-16 h-[70svh] px-20 dark:bg-gray-800'>
                          
                                <Image src={slide.image} alt='slideimg' height={550} width={550} className='bg-blend-multiply  ' />
                           
                            <div className='flex flex-col items-start justify-center gap-4  px-2'>
                            <button className='px-2 text-center rounded-lg text-sm bg-primary-300 text-white font-Nunito-Bold'>{slide.brand}</button>
                                <h1 className='text-6xl font-Nunito-ExtraBold dark:text-white'>{slide.title}</h1>
                                <h2 className='text-4xl font-Nunito-Bold text-orange-500'><span className='text-5xl'>$</span>{slide.price}</h2>
                                <Link href={PRODUCT_PAGE} className='px-4 py-2 font-Nunito-Bold rounded-sm border bg-primary-500 hover:bg-primary-600 text-white flex justify-center items-center gap-1'>Shop More <ArrowRight /></Link>
                                
    
                            </div>
    
                        </div>
                    </SwiperSlide>

                    ))
                }
       
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
                ...
            </Swiper>

    )
}

export default HeroSection