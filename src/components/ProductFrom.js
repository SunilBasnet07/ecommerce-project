'use client'
import { addProduct, updateProduct } from '@/api/product';
import { PRODUCT_PAGE } from '@/constance/routes';
import { productAdd } from '@/redux/product/productAction';
// import { productAdd } from '@/redux/product/productAction';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

const ProductFrom = ({ isEditing = false, product }) => {

    const [localImageUrl, setLocalImageUrl] = useState([]);
    const [imageProduct, setImageProduct] = useState([]);

    const router = useRouter();
    const dispatch = useDispatch();
    const {user}= useSelector((state)=>state.auth);
    const { register, handleSubmit, formState: { errors } } = useForm({
        values: product,
    });

    async function submitForm(data) {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("category", data.category);
        formData.append("brand", data.brand);
        // formData.append("stock", data.stock);
        formData.append("description", data.description);
        imageProduct.map((image) => (

            formData.append("images", image)
        ))

        try {

            isEditing ? await updateProduct(product.id, data) : await addProduct(formData);
            //   dispatch(productAdd(formData));

            toast.success({ isEditing } ? "Product Updated successfully." : "Product added successfully.", {
                autoClose: 1500,
                onClose: router.replace(PRODUCT_PAGE)
            })

        } catch (error) {
            console.log(error.message);
        }

    }
    // useEffect(()=>{
    //     if(!user.roles.includes("ADMIN") ) throw new Error("Access Denied")
    // },[user])



    return (
        <div className='max-w-lg mx-auto p-6 bg-white shadow-xl dark:bg-gray-900 rounded-lg border '>

            <h2 className="text-2xl text-textcolor dark:text-white  font-Nunito-ExtraBold mb-4">{isEditing ? "Edit Product" : "Add New Product"}</h2>

            <form className="space-y-4 " onSubmit={handleSubmit(submitForm)}>
                <div className='grid grid-cols-2 gap-3'>
                    <div>
                        <label className="block text-sm  dark:text-white  font-Nunito-Bold">Product Name</label>
                        <input
                            type="text"
                            id="name"
                            {...register("name", {
                                required: "name is required",

                            })}
                            className="w-full p-2 border dark:bg-gray-500 dark:text-white border-gray-400 shadow-sm font-Nunito rounded mt-1"

                        />
                        <p className='text-red-500 text-sm '>{errors.name?.message}</p>
                    </div>

                    <div>
                        <label className="block text-sm dark:text-white  font-Nunito-Bold">Price</label>
                        <input
                            type="number"
                            id="price"
                            {...register("price")}
                            className="w-full p-2 border  border-gray-400 dark:bg-gray-500 shadow-sm font-Nunito rounded mt-1"

                        />
                    </div>
                    <div>
                        <label className="block text-sm dark:text-white  font-Nunito-Bold">Category</label>
                        <input
                            type="text"
                            id="price"
                            {...register("category")}
                            className="w-full p-2 border border-gray-400 shadow-sm dark:bg-gray-500 font-Nunito rounded mt-1"

                        />

                    </div>

                    <div>
                        <label className="block text-sm  dark:text-white   font-Nunito-Bold">Brand</label>
                        <input
                            type="text"
                            {...register("brand")}
                            className="w-full p-2 border border-gray-400 dark:bg-gray-500 shadow-sm font-Nunito rounded mt-1"

                        />

                    </div>

                    {/* <div>
                        <label className="block text-sm  dark:text-white   font-Nunito-Bold">Stock</label>
                        <input
                            type="text"
                            {...register("stock")}
                            className="w-full p-2 border border-gray-400 shadow-sm font-Nunito rounded mt-1"

                        />

                    </div> */}
                </div>

                <div>
                    <label className="block text-sm   dark:text-white  font-Nunito-Bold">Description</label>
                    <textarea
                        type="text"
                        rows={3}
                        {...register("description")}
                        className="w-full p-2 border border-gray-400 dark:bg-gray-500 shadow-sm font-Nunito rounded mt-1"

                    />

                </div>



                <div>
                    <label htmlFor='image' className="block text-sm  dark:text-white font-Nunito-Bold">Image</label>
                    {localImageUrl && (
                        <div className='grid grid-cols-3 gap-3'>
                            {localImageUrl.map((url, index) => (
                                <Image key={index} src={url} alt="image" height="120" width="120" />
                            ))}


                        </div>
                    )}
                    <input
                        type="file"
                        // accept="image/*"
                        id='image'
                        className="w-full p-2 border rounded mt-1 dark:bg-gray-500 dark:text-white font-Nunito-Bold"
                        multiple
                        onChange={(e) => {

                            const urls = [];
                            const files = [];
                            Array.from(e.target?.files).map((file) => {
                                files.push(file)
                                urls.push(URL.createObjectURL(file))
                            });

                            setImageProduct(files)
                            setLocalImageUrl(urls);
                        }}
                    />
                </div>

                <button
                    type="submit"

                    className="w-full font-Nunito-Bold bg-primary-500   text-white p-2 rounded hover:bg-primary-600"
                >
                    {isEditing ? "Edit Product" : "Add Product +"}
                </button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default ProductFrom