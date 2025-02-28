'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"


const SearchBrand = ({ brands }) => {
    const [getBrand, setBrand] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('brand', getBrand);
     
        router.push(pathname + "?" + params.toString());
    }, [getBrand])

    return (
        <div className="w-full">
            <select name="brand" id="brand" onChange={(e) => setBrand(e.target.value)} className=' w-full px-4 py-1 border dark:bg-gray-950 dark:text-white rounded-sm font-Nunito-Bold '>
                <option value="" className=''>Select Brands</option>
                {
                    brands.map((brand) => (
                        <option key={brand} className='text-black dark:text-white'>{brand}</option>
                    ))
                }
            </select>

        </div>
    )
}

export default SearchBrand