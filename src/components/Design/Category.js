'use client'

// import heroImage from "@/assests/1.png"
// import headePhone from "@/assests/2.png"
// import headePhone1 from "@/assests/3.png"
// import headePhone2 from "@/assests/4.png"
// import headePhone3 from "@/assests/5.png"
import heroImage from "@/assests/iphone_16.png"
import headePhone from "@/assests/headephone3.png"
import headePhone1 from "@/assests/cetaphil3.png"
import Image from 'next/image';
import Link from "next/link";
import { PRODUCT_PAGE } from "@/constance/routes";
import Title from "../Title";

const Category = () => {
    const categories = [
        {
            title: "Bikes ",
            image: headePhone1,

        },
        {
            title: "Laptop",
            image: headePhone,

        },
        {
            title: "phone",
            image: headePhone1,

        },
        {
            title: "Electronic",
            image: headePhone,

        },
        {
            title: "Jacket",
            image: headePhone1,

        },
        {
            title: "Cetaphil ",
            image: headePhone1,

        },
    ]
    return (
        <div className='mt-2 px-20  py-4 flex flex-col gap-6'>
            <span className='text-center mb-6'><Title label="Popular Categories" /></span>
            <div className="grid grid-cols-4 gap-4  " >

                {
                    categories.map((category, index) => (

                        <Link href={`${PRODUCT_PAGE}/category/${category.title}`} key={index} className='  dark:bg-gray-800 text-left font-Nunito-ExtraBold bg-slate-100 relative'>

                            <Image src={category.image} alt='category' height={200} width={250} className="bg-primary-100 rounded-md pb-8 py-2 hover:bg-primary-300 " />
                            <button className='dark:text-white px-2 text-black absolute bottom-1'>{category.title}</button>



                        </Link>


                    ))
                }



            </div>
        </div>
    )
}

export default Category