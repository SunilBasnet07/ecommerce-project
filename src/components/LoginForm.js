"use client";

import { HOME_PAGE, REGISTER_ROUTE } from "@/constance/routes";
import { login } from "@/redux/auth/authAction";
import { Eye, EyeOff, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

export default function LoginForm() {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  function submitForm(data) {

    dispatch(login(data))

    if (error) {
      toast.error(error, { autoClose: 1500 });
    } else {

      toast.success("Login successfull", {
        autoClose: 1500,
        onClose: router.replace(HOME_PAGE)
      })
    }




  }

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error, { autoClose: 1500 });

  //   }
  // }, []);

  return (

    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-2xl dark:bg-gray-900  ">
      <h2 className="text-2xl font-Poppins-SemiBold text-center text-textcolor dark:text-white mb-4">Sign In</h2>

      <form onSubmit={handleSubmit(submitForm)} className="space-y-4 px-4 py-4 h-full w-full  dark:bg-gray-900 ">
        <div >
          <label className="block text-base font-Nunito-Bold dark:text-white text-gray-600 mb-1">Username or Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required." })}
            className=" w-full px-4 text-sm py-2 dark:text-white border font-Poppins rounded-md dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Username"

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
            <p className="text-right text-sm py-2 px-1 text-blue-500 cursor-pointer hover:underline font-Poppins">Forgot Password</p>
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
          {loading ? "Submitting..." : "Login"}
        </button>
      </form>

      <p className="text-sm text-gray-500 text-center mt-2 font-Poppins">
        Don't have an account? <Link href={REGISTER_ROUTE} className="text-blue-500 hover:underline">Sign up</Link>
      </p>

      <ToastContainer />
    </div>
  );
}
