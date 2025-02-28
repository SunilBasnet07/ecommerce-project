
import config from "@/config/config"
import navLinks from "@/constance/navLinks"
import { HOME_PAGE, LOGIN_ROUTE } from "@/constance/routes"
import { LIGHT_MODE } from "@/constance/theme"
import { logout } from "@/redux/auth/authSlice"
import { toggleTheme } from "@/redux/userPerference/userPreferenceSlice"


import { LogOut, Moon, Settings, ShoppingCart, Sun, UserRound, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import Modal from "./Modal"
import { useForm } from "react-hook-form"
import { login } from "@/redux/auth/authAction"
import { Eye, EyeOff } from "lucide-react";
import { REGISTER_ROUTE } from "@/constance/routes";
import SearchByName from "./products/SearchByName"
import logo from "@/assests/logo.png"

const Header = () => {
    const { user, loading,error } = useSelector((state) => state.auth);
    const { product } = useSelector((state) => state.cart);
    const { theme } = useSelector((state) => state.userPreference);
    const dispatch = useDispatch();
    const router = useRouter();
    const [showProfile, setShowProfile] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    // popup ligin


    const [showPassword, setShowPassword] = useState(false);
    const [showLoginPopup, setLoginPopup] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    function submitForm(data) {

        dispatch(login(data));
        setLoginPopup(false);
        if (error) {
            toast.error(error, { autoClose: 1500 });
          }else{
            toast.success("Login successfull",{
              autoClose:1500,
              
              onClose: router.replace(HOME_PAGE)
            })
          }
        





    }

    function logoutUser() {
        dispatch(logout());
        setShowProfile(false);
        toast.success("logout SuccessFully.", {
            autoClose: 1500,
            onClose: router.replace(LOGIN_ROUTE)
        })
    }
    function switchTheme() {
        dispatch(toggleTheme());
    }
    return (

        <header className="shadow-lg fixed top-0 w-full z-10 ">
            <div className="antialiased bg-gray-100  ">
                <div className="w-full text-gray-700 bg-white  dark:text-gray-200 dark:bg-gray-800">
                    <div className="flex flex-col gap-3 max-w-screen-xl px-2 py-1 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 dark:bg-gray-800">
                        <div className="flex flex-row w-[300px] items-center justify-between p-4">
                            <Link href={HOME_PAGE} className="text-lg w-auto font-Nunito-ExtraBold tracking-widest text-primary-500 uppercase rounded-lg dark:text-white focus:outline-none  focus:shadow-outline">
                                <Image src={logo} alt="logo" height={100} width={100} />
                            </Link>

                            <button onClick={() => setShowMobileMenu(true)} className="rounded-lg sm:hidden focus:outline-none focus:shadow-outline">
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                    <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                        </div>
                        <div className="w-full hidden md:block">
                            <SearchByName />
                        </div>


                        <nav className=" hidden  w-[40%] pb-4 md:pb-0 md:flex md:justify-end  md:flex-row  ">

                            {

                                navLinks.map((navlink, index) => (
                                    <Link href={navlink.route} key={index} className="px-4 py-2 mt-2 text-sm font-Nunito-SemiBold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >{navlink.label}</Link>
                                ))
                            }

                            <div className="flex justify-center items-center gap-4 mx-2">
                                {/* <span className="relative -top-4 left-11 text-sm flex justify-center items-center h-5 w-5 bg-red-500 rounded-full text-white">1</span> */}
                                <Link href="/dashboard/cart">  <ShoppingCart className="h-5 w-5 relative" />
                                    <span className={`${product?.length ? "absolute top-[0.20rem] text-sm text-center h-5 w-5 bg-red-500 rounded-full  text-white" : "hidden"}`}>{product?.length}</span>
                                </Link>
                                <button onClick={switchTheme}>{theme === LIGHT_MODE ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}</button>


                            </div>

                            <div className="flex justify-center items-center ml-5 ">
                                {
                                    user ? <button onClick={() => setShowProfile(!showProfile)} className="rounded-full h-8 w-8 flex relative justify-center items-center bg-primary-100">{user.profileImageUrl ? <Image src={user.profileImageUrl} width={32} height={32} alt="image" className="rounded-full  " /> : <UserRound className="text-white" />}</button>
                                        : <button onClick={() => setLoginPopup(true)} className=" py-2 mt-2 text-sm font-Nunito-SemiBold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >Login</button>
                                }

                                <div onClick={() => setShowProfile(false)} className={`${showProfile ? "absolute dark:bg-gray-900 border -bottom-44 right-3 flex flex-col   min-w-[300px] h-auto  rounded-md bg-white" : "hidden"}`}>
                                    <div className="flex px-2 py-3 gap-2 ">
                                        {
                                            user?.profileImageUrl ? <Image src={user.profileImageUrl} alt="profileImge" height={45} width={45} className="rounded-full" /> : <UserRound className="dark:text-white " />
                                        }
                                        <div className="ml-3">
                                            <p className="font-Nunito-Bold w-full ">Hi! {user?.name}</p>
                                            <p className="font-Nunito-Bold w-full ">{user?.email}</p>
                                        </div>
                                    </div>

                                    <Link href="/dashboard" className=" text-black font-Nunito-Bold  py-3 dark:text-white dark:hover:bg-gray-800  hover:bg-slate-100 w-full  border-b border-t rounded-sm px-5 flex items-center gap-4 opacity-70"> <Settings className="h-5 w-5" />Manage account</Link>
                                    <button onClick={logoutUser} className="text-black font-Nunito-Bold  py-3 dark:text-white dark:hover:bg-gray-800 hover:bg-slate-100 w-full  border-b border-t rounded-sm px-5 flex items-center gap-4 opacity-70"> <LogOut className="h-5 w-5" />Sign out</button>

                                </div>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={`${showMobileMenu ? "bg-blue-600 fixed left-0 top-0 h-svh min-w-60 " : "hidden"}`}>
                <nav className=" flex flex-col  pb-4 md:pb-0 md:flex md:justify-end md:flex-row  ">

                    {

                        navLinks.map((navlink, index) => (
                            <Link href={navlink.route} key={index} className="px-4 py-2 mt-2 text-sm font-Nunito-SemiBold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >{navlink.label}</Link>
                        ))
                    }
                </nav>
                <button onClick={() => setShowMobileMenu(false)} className="absolute top-2 right-2">X</button>
            </div>
            <Modal showModal={showLoginPopup} setShowModal={setLoginPopup} className={"min-h-36  w-[30%]"}>


                <div className=" max-w-md rounded-lg  p-6 bg-white  dark:bg-gray-900  ">
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
                            className="w-full bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-300 text-white py-2 rounded-lg font-Nunito-Bold hover:bg-blue-600 transition"
                        >
                            {loading ? "Submitting..." : "Login"}
                        </button>
                    </form>

                    <p className="text-sm text-gray-500 text-center mt-2 font-Poppins">
                        Don't have an account? <Link href={REGISTER_ROUTE} className="text-blue-500 hover:underline">Sign up</Link>
                    </p>


                </div>

            </Modal>

        </header>



    )
}

export default Header