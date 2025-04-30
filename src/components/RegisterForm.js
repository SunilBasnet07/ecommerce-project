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
  const [showPassword, setShowPassword] = useState(false);

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


    <div className="flex items-center justify-center min-h-screen mt-14 dark:bg-gray-800 bg-gray-100">
      <div className="w-full max-w-md p-6 py-4 bg-white rounded-lg shadow-md mt-12 dark:bg-gray-900">
        <h2 className="text-2xl font-Nunito-ExtraBold text-center  text-textcolor mb-4 dark:text-white">Register</h2>

        <form onSubmit={handleSubmit(submitForm)} className="space-y-4 px-4 py-4 h-full w-full  dark:bg-gray-900 ">
          <div >
            <label htmlFor="username" className="block text-base font-Nunito-Bold dark:text-white text-gray-600 mb-1">Username</label>
            <input
              type="text"
              id="username"
              {...register("name", { required: "Username is required." })}
              className=" w-full px-4 text-sm py-2 dark:text-white border font-Poppins rounded-md dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Username"

            />

            <p className="mt-1 text-sm text-red-500">{errors.name?.message}</p>
          </div>
          <div >
            <label htmlFor="email" className="block text-base font-Nunito-Bold dark:text-white text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required." })}
              className=" w-full px-4 text-sm py-2 dark:text-white border font-Poppins rounded-md dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Email"

            />

            <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
          </div>


          <div>
            <label className="block text-base font-Nunito-Bold mb-1 dark:text-white text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: "Password is required." })}
                className="w-full px-4 py-2 border font-Poppins text-sm rounded-md dark:text-white dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Password"
              />
             
              <div className=" absolute top-2 right-2 opacity-60 dark:text-white">
                {showPassword ? (
                  <Eye onClick={() => setShowPassword(!showPassword)} className="  cursor-pointer" />
                ) : (
                  <EyeOff onClick={() => setShowPassword(!showPassword)} className=" cursor-pointer" />
                )}


              </div>
              {  /* 
              {showPassword ? (
                <Eye onClick={() => setShowPassword(!showPassword)} className="relative right-8 h-5  opacity-50 cursor-pointer" />
              ) : (
                <EyeOff onClick={() => setShowPassword(!showPassword)} className="relative right-8 h-5  opacity-50 cursor-pointer" />
              )} */}
            </div>
            <p className="mt-1 text-sm text-red-500">{errors.password?.message}</p>
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-base font-Nunito-Bold mb-1 dark:text-white text-gray-600">Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                {...register("confirmPassword", { required: "Password is required." })}
                className="w-full px-4 py-2 border font-Poppins text-sm rounded-md dark:text-white dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Confirm Password"
              />
             
              <div className=" absolute top-2 right-2 opacity-60 dark:text-white">
                {showPassword ? (
                  <Eye onClick={() => setShowPassword(!showPassword)} className="  cursor-pointer" />
                ) : (
                  <EyeOff onClick={() => setShowPassword(!showPassword)} className=" cursor-pointer" />
                )}


              </div>
              {  /* 
              {showPassword ? (
                <Eye onClick={() => setShowPassword(!showPassword)} className="relative right-8 h-5  opacity-50 cursor-pointer" />
              ) : (
                <EyeOff onClick={() => setShowPassword(!showPassword)} className="relative right-8 h-5  opacity-50 cursor-pointer" />
              )} */}
            </div>
            <p className="mt-1 text-sm text-red-500">{errors.password?.message}</p>
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" className="h-4 w-4" />
            <p className="font-Poppins text-sm dark:text-white">Remember Me</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-400 text-white py-2 rounded-lg font-Nunito-Bold hover:bg-blue-600 transition"
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-2 font-Poppins">
          Already have an account? <Link href={LOGIN_ROUTE} className="text-blue-500 hover:underline">Sign in</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
