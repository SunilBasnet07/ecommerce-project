'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"
// import { useDebounce } from "use-debounce";


const SearchCategory = ({ categories }) => {
    const [getCategory, setCategory] = useState("");
    // const [getName, setName] = useState("");
    // const [delayName] = useDebounce(getName,300);
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    useEffect(() => {
   
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', getCategory);
        // params.set('name', getName);

        router.push(pathname + "?" + params.toString());
    }, [getCategory])

    return (
        <div className=" w-full">
            {/* <div className="whitespace-nowrap w-[72%]">
                <label htmlFor="name" className=" font-Nunito-SemiBold dark:text-white">All Porducts: </label>
                <input name="name" id="name"  type="search" onChange={(e)=>setName(e.target.value)} placeholder="Search by name " className=" dark:bg-gray-950 text-opacity-60 text-sm font-Poppins w-full rounded-md border px-4 py-2 " />
            </div> */}
            <select name="category" id="category" onChange={(e) => setCategory(e.target.value)} className=' dark:bg-gray-950 w-full dark:text-white px-4 py-1 border rounded-sm font-Nunito-Bold '>
                <option value="" className=''>Select Categories</option>
                {
                    categories.map((category) => (
                        <option key={category} className='text-black dark:text-white '>{category}</option>
                    ))
                }
            </select>

        </div>
    )
}

export default SearchCategory