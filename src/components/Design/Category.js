'use client'

// import heroImage from "@/assests/1.png"
// import headePhone from "@/assests/2.png"
// import headePhone1 from "@/assests/3.png"
// import headePhone2 from "@/assests/4.png"
// import headePhone3 from "@/assests/5.png"
import bikes from "@/assests/mt15.png"
import laptop from "@/assests/laptop.png"
import headePhone from "@/assests/headephone3.png"
import headePhone1 from "@/assests/cetaphil3.png"
import lather from "@/assests/lather1.png"
import smartphone from "@/assests/samsung.png"
import Image from 'next/image';
import Link from "next/link";
import { PRODUCT_PAGE } from "@/constance/routes";
import Title from "../Title";

const Category = () => {
    const categories = [
        {
            title: "Bikes ",
            image: bikes,

        },
        {
            title: "Laptop",
            image: laptop,

        },
        {
            title: "Smartphone",
            image: smartphone,

        },
        {
            title: "Electronics",
            image: headePhone,

        },
        {
            title: "Skincare",
            image: headePhone1,

        },
        {
            title: "Cloathing",
            image: lather,

        },
    ]
    return (
        <div className='mt-2 px-20 py-4 flex flex-col gap-6'>
    <span className='text-center mb-6'>
        <Title label="Popular Categories" />
    </span>
    <div className="grid grid-cols-4 gap-4 ">
        {categories.map((category, index) => (
            <Link 
                href={`${PRODUCT_PAGE}/category/${category.title}`} 
                key={index} 
                className=' text-left font-Nunito-ExtraBold py-8 bg-primary-100 relative flex flex-col items-center p-4 rounded-md hover:bg-primary-400'
            >
                <div className="w-full h-[200px] flex justify-center items-center">
                    <Image 
                        src={category.image} 
                        alt='category' 
                        width={250} 
                        height={200} 
                        className="object-cover w-full h-full rounded-md" 
                    />
                </div>
                <button className='dark:text-white px-2 text-black absolute bottom-2'>
                    {category.title}
                </button>
            </Link>
        ))}
    </div>
</div>

    )
}

export default Category