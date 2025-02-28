'use client'


import { LOGIN_ROUTE, REGISTER_ROUTE } from "@/constance/routes";
import { registerUser } from "@/redux/auth/authAction";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";



export default function RegisterForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [showPassword,setShowPassword]=useState(false);

  function submitForm(data) {


    dispatch(registerUser(data));

  }
  // useEffect(() => {
  //   if (error) {
  //     toast.error(error, {
  //       autoClose: 1500,
  //     })
  //   }
  // }, [error])



  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-900 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md mt-12 dark:bg-gray-800">
        <h2 className="text-2xl font-Nunito-ExtraBold text-center  text-textcolor mb-4 dark:text-white">Register</h2>

        <form onSubmit={handleSubmit(submitForm)} className="space-y-4 dark:bg-gray-800">
          <div>
            <label className="block text-sm font-Nunito-Bold mb-1 text-gray-600 dark:text-white">UserName</label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"

            />
          </div>
          <div>
            <label className="block text-sm font-Nunito-Bold dark:text-white text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"


            />
            <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
          </div>
          <div>
            <label className="block text-sm font-Nunito-Bold mb-1 dark:text-white text-gray-600">Password</label>
            <div className="flex items-center w-full">
              <input
                type={showPassword?"text":"password"}
                id="password"
                {...register("password")}
                className="w-[100%] px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your password"


              />
              {showPassword?(<Eye onClick={()=>{setShowPassword(!showPassword)}} className="relative right-8 h-5 w-5 opacity-50 cursor-pointer" />):
              ( <EyeOff onClick={()=>{setShowPassword(!showPassword)}} className="relative right-8 h-5 w-5 opacity-50 cursor-pointer" />)
              }
              

             
            </div>



          </div>
          <div>
            <label className="block text-sm font-Nunito-Bold mb-1 dark:text-white text-gray-600">Confirm Password</label>
            <div className="flex items-center">
              <input
                type={showPassword?"text":"password"}
                id="confirmPassword"
                {...register("confirmPassword")}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your confirm password"


              />
       
              

             
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-Nunito-Bold hover:bg-blue-600 transition"
          >
            {loading ? "submitting...." : "Register"}
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account? <Link href={LOGIN_ROUTE} className="text-blue-500 hover:underline">Sign in</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
