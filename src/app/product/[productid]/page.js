
import { getProductById } from '@/api/product';
import ImageViewer from '@/components/ImageViewer';
import AddToCart from '@/components/products/Cart';
import Title from '@/components/Title';
import RelatedProducts from "@/components/products/RalatedProducts";
import placeholder from "@/img/placeholder.png"
import Image from 'next/image';



const ProductId = async ({ params }) => {
  const id = (await params).productid;
  const product = await getProductById(id);


  return (
    <>

      <div className=" h-auto bg-gray-100  text-black dark:text-white dark:bg-gray-800 mt-4 p-6">

        <Title label="Product Details" />




        <div className='flex justify-center mt-5 dark:bg-gray-800 '>


          <div className="bg-white rounded-lg shadow-lg flex gap-12 w-4/5 max-w-6xl relative dark:bg-gray-900">
            {/* Left Section: Image Gallery */}
            <div className="w-2/5 p-4 flex flex-col justify-center items-center">

              {/* <Image
                src={product.imageUrls.length > 0 ? product.imageUrls[0] : productImg}
                alt="Main Product"
                width={500} height={500}
                className="w-full  h-auto rounded-lg mt-4"
              /> */}
              <ImageViewer product={product}/>

              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -10%
              </span>
            </div>

            {/* Right Section: Product Info */}
            <div className="w-3/5 p-6">
              <span className="text-white  bg-primary-100  px-1 rounded-sm  dark:text-white font-Nunito-SemiBold text-sm">{product.brand}</span>
              <h2 className="text-2xl text-textcolor dark:text-white font-Nunito-ExtraBold ">{product.name}</h2>
              <h2 className="text-md text-textcolor dark:text-white font-Nunito-SemiBold ">{product.category}</h2>
              <p className="text-gray-600 text-lg dark:text-white font-medium">${product.price}</p>

              {/* Color Selection */}
              <div className="mt-4">
                <h3 className="text-gray-700 font-Nunito-SemiBold">Color</h3>
                <div className="flex space-x-2 mt-2">
                  {["bg-purple-500", "bg-gray-500", "bg-blue-500"].map((color, index) => (
                    <span key={index} className={`w-6 h-6 rounded-full border ${color} cursor-pointer`}></span>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-4">
                <h3 className="text-gray-700 font-medium">Size</h3>
                <div className="flex space-x-3 mt-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button key={size} className="border px-4 py-2 rounded-lg hover:bg-gray-200">{size}</button>
                  ))}
                </div>
              </div>

              {/* Quantity & Buttons */}
              <div className="mt-6 flex items-center space-x-4">
                <input type="number" min="1" defaultValue="1" className="border rounded-lg w-16 p-2 text-center" />
                <AddToCart product={product} />
              </div>

              {/* Details */}
              <div className="mt-6">
                <details className="border-t pt-2">
                  <summary className="cursor-pointer text-gray-700 font-Nunito-Bold">Details</summary>
                  <p className="text-gray-600 mt-2 ml-4 font-Nunito">Features: High-performance material.</p>
                  <p className="text-gray-600 mt-2 ml-4 font-Nunito">Product is as shown in te image.</p>

                </details>
                <details className="border-t pt-2 mt-2">
                  <summary className="cursor-pointer text-gray-700 font-Nunito-Bold">Shipping & Returns</summary>
                  <p className="text-gray-600 mt-2 ml-4 font-Nunito">Free shipping on orders over $50. Easy returns within 30 days.</p>
                  <p className="text-gray-600 mt-2 ml-4 font-Nunito">Delivery all over Nepal.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts product={product}/>
      </div>
   
  
    </>
  )
}

export default ProductId