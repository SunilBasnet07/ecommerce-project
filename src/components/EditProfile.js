'use client'
import { getUserById, updateAuthUser, uploadProfileImage } from '@/api/user';
import { HOME_PAGE, PRODUCT_PAGE } from '@/constance/routes';
import { UserRound } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import Spinner from './Spinner';
import { updateStateUser } from '@/redux/auth/authSlice';

const EditProfile = () => {
    const [localImageUrl, setLocalImageUrl] = useState(null);
    const [imageProfile, setImageProfile] = useState(null);
    const [loading, setLoading] = useState(null);
    const [uploading, setUploading] = useState(null);

    const router = useRouter();
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm({
        values: {
            ...user,

            street: user?.address.street,
            city: user?.address.city,
            province: user?.address.province,
            country: user?.address.country,

        },
    });


    async function submitForm(data) {


        setLoading(true);
        try {

            await updateAuthUser(user.id, {
                ...data,
                address: {
                    street: data.street,
                    city: data.city,
                    province: data.province,
                    country: data.country,
                },
            }
            );
            const userData = await getUserById(user.id);
            dispatch(updateStateUser(userData));
            toast.success("User uploaded successfully.", {
                autoClose: 1500,
                // onClose: router.replace(PRODUCT_PAGE)
            })
        } catch (error) {
            toast.error(error.response.data, {
                autoClose: 1500,
            })
        } finally {
            setLoading(false);
        }
    }


    async function uploadImage(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", imageProfile);

        setUploading(true);

        try {
            await uploadProfileImage(user.id, formData);
            const userData = await getUserById(user.id);
            dispatch(updateStateUser(userData));
            toast.success("Profile image uploaded successfully.", {
                autoClose: 1500,
                // onClose: router.replace(PRODUCT_PAGE)
            })
        } catch (error) {
            toast.error(error.response.data, {
                autoClose: 1500,
            })
        } finally {
            setUploading(false);
        }
    }



    return (

        <section className='flex flex-col items-center justify-center gap-32 gap-y-9 w-full px-10 py-4 h-full'>
            {/* <div className='flex justify-evenly items-center'>
                {user?.profileImageUrl ? <Image src={user?.profileImageUrl} alt='profile-img' height={150} width={150} className='rounded-full border-4 border-slate-300 mr-60 hover:shadow-2xl' />
                    : <UserRound className="text-white h-32 w-32 rounded-full border-2 mr-60 hover:shadow-2xl" />
                }
            </div> */}

            <form onSubmit={uploadImage} className='py-3'>
                <div className='flex  w-full flex-col gap-5'>
                    <div className='w-full flex flex-col gap-5  items-center '>
                        {/* <label htmlFor='image'>Edit Profile</label> */}
                        {/* {localImageUrl && (<Image src={localImageUrl} width={100} height={100} alt='image' />
                        )} */}
                        <div className='flex justify-center items-center '>
                            {localImageUrl ? (<Image src={localImageUrl} alt='profile-img' height={150} width={150} className='rounded-full border-4  border-slate-300  hover:shadow-2xl' />)
                                : (<Image src={user?.profileImageUrl} alt='profile-img' height={150} width={150} className='rounded-full border-4 border-slate-300  hover:shadow-2xl' />)
                                || (<UserRound className="text-white h-32 w-32 rounded-full border-2 mr-60 hover:shadow-2xl" />)
                            }
                        </div>
                        <div className='flex flex-col gap-4  justify-center items-start'>
                            <input type='file' id="image" className='font-Nunito-Bold w-full dark:text-white' onChange={(e) => {
                                const files = [];
                                const Urls = [];
                                Array.from(e.target?.files).map((file) => {
                                    files.push(file)
                                    Urls.push(URL.createObjectURL(file))
                                })
                                setImageProfile(files[0])
                                setLocalImageUrl(Urls[0]);
                            }} />
                            <button disabled={uploading} type="submit" className='px-2 py-1 w-full disabled:cursor-not-allowed disabled:bg-slate-400 flex justify-center items-center gap-2 w-[30%] font-Nunito-Bold rounded-sm bg-primary-500 hover:bg-primary-600 text-white'><span>Uploade</span> {uploading && (<Spinner edit={"h-[24px] w-[24px]"} />)}</button>
                        </div>
                    </div>

                    

                </div>
            </form>
            <form onSubmit={handleSubmit(submitForm)} className='flex py-3 justify-center w-[80%] flex-col gap-5' >
                <div className='grid grid-cols-2 gap-4 items-center justify-center '>
                    <div>
                        <label className="block text-sm  dark:text-white  font-Nunito-Bold">UserName*</label>
                        <input
                            type="text"
                            id="name"
                            {...register("name")}
                            className="w-full p-1 border dark:bg-gray-300  border-gray-400 shadow-sm font-Nunito rounded mt-1"

                        />

                    </div>
                    <div>
                        <label className="block text-sm  dark:text-white  font-Nunito-Bold">Email*</label>
                        <input
                            type="text"
                            id="name"
                            {...register("email")}
                            className="w-full p-1 border dark:bg-gray-300  border-gray-400 shadow-sm font-Nunito rounded mt-1"

                        />

                    </div>
                    <div>
                        <label className="block text-sm  dark:text-white  font-Nunito-Bold">Phone Number*</label>
                        <input
                            type="text"
                            id="name"
                            {...register("phone")}
                            className="w-full p-1 border dark:bg-gray-300  border-gray-400 shadow-sm font-Nunito rounded mt-1"

                        />

                    </div>
                    <div>
                        <label htmlFor='street' className="block text-sm  dark:text-white  font-Nunito-Bold">Street*</label>
                        <input
                            type="text"
                            id="street"
                            {...register("street")}
                            className="w-full p-1 border  border-gray-400 dark:bg-gray-300  shadow-sm font-Nunito rounded mt-1"

                        />

                    </div>
                    <div>
                        <label htmlFor='city' className="block text-sm  dark:text-white  font-Nunito-Bold">City*</label>
                        <input
                            type="text"
                            id="city"
                            {...register("city")}
                            className="w-full p-1 border  dark:bg-gray-300  border-gray-400 shadow-sm font-Nunito rounded mt-1"

                        />

                    </div>
                    <div>
                        <label htmlFor='province' className="block text-sm  dark:text-white  font-Nunito-Bold">Province*</label>
                        <input
                            type="text"
                            id="province"
                            {...register("province")}
                            className="w-full p-1 border dark:bg-gray-300  border-gray-400 shadow-sm font-Nunito rounded mt-1"

                        />

                    </div>
                    <div>
                        <label htmlFor='country' className="block text-sm  dark:text-white  font-Nunito-Bold">Country*</label>
                        <input
                            type="text"
                            id="country"
                            {...register("country")}
                            className="w-full p-1 border dark:bg-gray-300   border-gray-400 shadow-sm font-Nunito rounded mt-1"

                        />

                    </div>

                </div>

                <button disabled={loading} type="submit" value='update' className="px-2 cursor-pointer disabled:cursor-not-allowed  disabled:bg-slate-400 py-1 w-[30%] font-Nunito-Bold rounded-sm bg-primary-500 hover:bg-primary-600 text-white flex justify-center items-center gap-2"> <span>update</span> {loading && (<Spinner edit={"h-[24px] w-[24px]"} />)}</button>


            </form>



            <ToastContainer />
        </section>



    )
}

export default EditProfile