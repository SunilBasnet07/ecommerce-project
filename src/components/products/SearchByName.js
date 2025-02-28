'use client'

import { PRODUCT_PAGE } from "@/constance/routes";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce";


const SearchByName = () => {
 
    const [getName, setName] = useState("");
    const [delayName] = useDebounce(getName,300);
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    // useEffect(() => {

    //     const params = new URLSearchParams(searchParams.toString());
     
    //     params.set('name', getName);

    //     router.push(pathname + "?" + params.toString());
    // }, [delayName])
function searchByName(){
    const params = new URLSearchParams(searchParams.toString());
     
        params.set('name', getName);
        
        router.push(PRODUCT_PAGE + "?" + params.toString());
}
    return (
        <div className="w-full flex justify-between items-center relative h-auto   gap-2">
         
                
                <input name="name" id="name"  type="search" onChange={(e)=>setName(e.target.value)} placeholder="Search by name " className=" focus:outline-none focus:ring  dark:bg-gray-700  text-opacity-60 text-sm font-Poppins  w-full rounded-md border-2 border-primary-300 h-auto px-4 py-2 " />
                <button onClick={searchByName}  className=" font-Nunito-SemiBold bg-primary-500 absolute right-0 h-auto dark:text-white py-2 px-2 rounded-r-md border-none text-white hover:bg-primary-600"><Search /></button>
           
        

        </div>
    )
}

export default SearchByName