'use client'


import Link from 'next/link';
import { useState } from 'react';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/auth/authSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { CART_ROUTE, HOME_PAGE, ORDER_ROUTE } from '@/constance/routes';
import { BookImage, BookMarked, House, ListOrdered, LogOut, Logs, UserRoundPen } from 'lucide-react';




const Dashboard = () => {
    const [message, setMessage] = useState("Welcome to Home Services Dashboard");
    const [activeSection, setActiveSection] = useState("home"); // Default to home section
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const {user}= useSelector((state)=>state.auth)
    const dispatch = useDispatch();
    const router = useRouter();
    function logoutUser(){
          try {
            dispatch(logout())
            toast.success("Logout Successfully",{
             autoClose:1500,
             onClose: router.replace(HOME_PAGE),
            })
          } catch (error) {
            console.log(error.message);
          }
    }



    const handleNavigation = (section) => {
        setActiveSection(section); // Set the active section
        switch (section) {
            case "contacts":
                setMessage("Welcome to Contact Us Dashboard");
                break;
            case "users":
                setMessage("Welcome to Users Dashboard");
                break;
            case "events":
                setMessage("Welcome to Events Dashboard");
                break;
            default:
                setMessage("Welcome to Home Services Dashboard");
        }
    };

    const handleLogout = () => {
        // Perform any necessary cleanup tasks like clearing tokens or user data
        console.log("User logged out");
        navigate("/"); // Redirect to the login or home page
    };

    return (
        <>
            <div className=" flex w-[20%] fixed  left-0 h-max bg-gray-100 shadow-xl hover:shadow-2xl dark:bg-gray-900">
                {/* Sidebar */}
                <div className="w-full  bg-blue-700 h-screen text-white flex flex-col dark:bg-gray-900 ">
                    <div className="p-6 text-center  font-Nunito-Bold text-lg border-b border-blue-800">
                        Home Services
                    </div>
                    <nav className="flex-1 p-4 ">
                        <ul className="space-y-4">
                            <li>
                                <Link href="/dashboard"
                                    className="flex items-center font-Nunito-Bold gap-2 w-full text-left py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600"
                                    onClick={() => handleNavigation("home")}
                                >
                                  <House />  Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/profile"
                                    onClick={() => handleNavigation("users")}
                                    className="flex items-center gap-2 w-full font-Nunito-Bold text-left py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600"
                                >
                                  <UserRoundPen/>  Profile
                                </Link>
                            </li>
                            <li>
                                <Link href={CART_ROUTE}
                                    onClick={() => handleNavigation("contacts")}
                                    className="flex items-center gap-2 w-full text-left font-Nunito-Bold py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600"
                                >
                                  <ListOrdered /> Cart
                                </Link>
                            </li>
                            <li>
                                <Link href={ORDER_ROUTE}
                                    onClick={() => handleNavigation("events")}
                                    className="flex items-center gap-2 w-full font-Nunito-Bold text-left py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600"
                                >
                                <Logs />   Orders
                                </Link>
                            </li>
                            {
                                user?.roles.includes("ADMIN") &&(   <li>
                                    <Link href="/dashboard/all-orders"
                                        onClick={() => handleNavigation("events")}
                                        className="flex items-center gap-2 w-full font-Nunito-Bold text-left py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600"
                                    >
                                    <Logs />   All Orders
                                    </Link>
                                </li>)
                            }
                         
                            <li>
                                <Link href="/dashboard/termsandcondition"
                                    onClick={() => handleNavigation("events")}
                                    className="flex items-center gap-2 w-full font-Nunito-Bold text-left py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-600"
                                >
                                 <BookMarked />   Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => setShowLogoutModal(true)}
                                    className="flex items-center gap-2 w-full text-left py-2 font-Nunito-Bold px-4 rounded hover:bg-blue-600 focus:bg-blue-600"
                                >
                                  <LogOut />  Logout
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                {/* <div className="p-8 w-full">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-800">{message}</h1>
                    </header>

                  
                    {activeSection === "home" && (
                        <div>
                            <div className="flex space-x-4 mb-8">
                                <div className="flex-1 bg-white p-4 shadow-lg rounded-lg">
                                    <h2 className="font-semibold text-xl text-blue-700">Users</h2>
                                    <p>Manage user data and settings.</p>
                                    <span className="text-lg font-semibold text-gray-700">Total Users: {userCount}</span>
                                </div>
                                <div className="flex-1 bg-white p-4 shadow-lg rounded-lg">
                                    <h2 className="font-semibold text-xl text-blue-700">Contacts</h2>
                                    <p>Manage contact form submissions and inquiries.</p>
                                    <span className="text-lg font-semibold text-gray-700">Total Contacts: {contactCount}</span>
                                </div>
                                <div className="flex-1 bg-white p-4 shadow-lg rounded-lg">
                                    <h2 className="font-semibold text-xl text-blue-700">Events</h2>
                                    <p>Manage upcoming events and activities.</p>
                                    <span className="text-lg font-semibold text-gray-700">Total Events: {eventCount}</span>
                                </div>
                            </div>

                       
                          
                        </div>
                    )}

                   
                
                </div> */}
            </div>
            <Modal
                title="Logout"
                showModal={showLogoutModal}
                setShowModal={setShowLogoutModal} className={"px-5 py-5 min-h-40 w-[35%] "}  >
              <div className='flex flex-col gap-7  '>
                <p className='font-Nunito-Bold mt-4'>Do you want to sure logout?</p>
                <div className='flex justify-between items-center'>
                    <button onClick={()=>setShowLogoutModal(false)} className='px-2 py-1 font-Nunito-Bold rounded-sm text-white bg-red-500 hover:bg-red-600'>Cancle</button>
                    <button onClick={logoutUser}  className='px-2 py-1 font-Nunito-Bold rounded-sm text-white bg-blue-500 hover:bg-blue-600'>Confirm</button>
                </div>
              </div>


        </Modal >
            
        </>
    );
};

export default Dashboard;
