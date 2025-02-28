'use client'
import { HOME_PAGE, LOGIN_ROUTE } from "@/constance/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { toast, ToastContainer } from "react-toastify";


const layout = ({children}) => {
const {user,error}=useSelector((state)=>state.auth);
const router = useRouter();
useEffect(()=>{
  if(user){
    toast.success("login successFully.",{
      autoClose:1500,
      onClose:router.replace(HOME_PAGE),
    })
  }
},[user,router])


  return (
    <div className='dark:bg-gray-800 h-svh'>
 
    {children}
    {/* <ToastContainer /> */}
    </div>
  )
}

export default layout