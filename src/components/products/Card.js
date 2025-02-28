'use client'
import Image from "next/image";
import { Heart, Pencil, Trash2 } from "lucide-react";
import placeholder from "@/img/placeholder.png"
import Link from "next/link";
import { PRODUCT_PAGE } from "@/constance/routes";
import { deleteProduct } from "@/api/product";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal";







const ProductCard = ({ product }) => {

  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const { user } = useSelector((state) => state.auth);

  async function removeProduct() {

    try {
      await deleteProduct(product.id);
      toast.success(`Product deleted ${product.name} item successFully.`, {
        autoClose: 1500,
        onClose: router.replace("/product"),
      })
      setShowDeletePopup(false);

    } catch (error) {
      toast.error(error.message, {
        autoClose: 1500,
      });

    } finally {
      setShowDeletePopup(false);
    }
  }



  return (
    <section>
      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-3   min-h-auto w-full relative dark:bg-gray-900 hover:dark:bg-gray-950">
        <div className="relative">
          <Link href={`${PRODUCT_PAGE}/${product.id}`}><Image width={500} height={500} src={product.imageUrls.length > 0 ? product.imageUrls[0] : placeholder} alt="img" className="rounded-lg w-full h-40 object-contain dark:bg-gray-900 hover:dark:bg-gray-950" /></Link>
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -10%
          </span>
          <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
            <Heart onClick={() => setIsLiked(!isLiked)} className={`${isLiked ? "text-red-600 " : "text-gray-500"}`} size={18} />
          </button>

        </div>

        <div className="mt-5">
          <Link href={`${PRODUCT_PAGE}/brand/${product.brand}`} className="text-primary-500 dark:text-primary-500 bg-primary-100 hover:bg-primary-200  px-1 rounded-md py-1  font-Nunito-SemiBold text-xs">{product.brand}</Link>
          <Link href={`${PRODUCT_PAGE}/category/${product.category}`} className="font-Nunito-Bold rounded-md text-red-500 px-1 py-1 bg-red-200  ml-5 text-xs dark:text-red-300 mb-2">{product.category}</Link>
          <Link href={`${PRODUCT_PAGE}/${product.id}`}><h3 className="text-textcolor hover:underline mt-3 dark:text-white font-Nunito-ExtraBold text-sm">{product.name}</h3></Link>
          <div className=" max-h-9 overflow-hidden text-ellipsis text-sm my-1">
            <p className="font-Nunito-bold opacity-70 dark:text-white ">{product.description}</p>
          </div>
          <div className="flex items-center mt-1">
            <span className="text-red-500 font-bold text-lg">{Math.floor(product.price*0.9)}</span>
            <span className="text-gray-400 text-sm ml-2 line-through">{product.price}</span>
          </div>


          <div className="flex items-center justify-between mt-2  text-gray-600 dark:text-white text-xs">
            {/* <span className="font-Nunito-Bold dark:text-white">stock {product.stock}</span> */}
            {user?.roles.includes("ADMIN") ? (<div className="flex justify-end gap-5 w-full items-center">
              <Link href={`${PRODUCT_PAGE}/edit/${product.id}`}><Pencil /></Link>
              <button onClick={() => setShowDeletePopup(true)} className="ml-2 text-red-500 hover:text-red-600"><Trash2 />

              </button>
            </div>) : ""}
            {/* <div>
          <Link href={`${PRODUCT_PAGE}/edit/${product.id}`}>edit</Link>
         <button onClick={removeProduct}  className="ml-2 text-red-500 hover:text-red-600">delete</button>
          </div> */}

          </div>
          {/* <button className="mt-3 w-full bg-blue-500 font-Nunito-Bold text-white py-1.5 rounded-lg  hover:bg-blue-600">
          BUY +
        </button> */}
        </div>
        <Modal title="Delete Product" showModal={showDeletePopup} setShowModal={setShowDeletePopup}>
          <div className='flex flex-col gap-7 mt-5'>
            <p className='font-Nunito-Bold'>Do you want to sure delete {product.name}  product?</p>
            <div className='flex justify-between items-center'>
              <button onClick={() => setShowDeletePopup(false)} className='px-2 py-1 font-Nunito-Bold rounded-sm text-white bg-red-500 hover:bg-red-600'>Cancel</button>
              <button onClick={removeProduct} className='px-2 py-1 font-Nunito-Bold rounded-sm text-white bg-blue-500 hover:bg-blue-600'>Confirm</button>
            </div>
          </div>

        </Modal>

      </div>
      <ToastContainer />

    </section>
  );
};
export default ProductCard