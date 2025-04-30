

import { getAllBrands, getAllCategories, getAllProduct } from "@/api/product";


import ProductCard from "@/components/products/Card";
import ProductFilter from "@/components/products/ProductFilter";
import SearchBrand from "@/components/products/SearchBrand";
import SearchCategory from "@/components/products/SearchCategory";
import Title from "@/components/Title";
import { PRODUCT_PAGE } from "@/constance/routes";
import Link from "next/link";





async function ProductList({ searchParams }) {


  const products = await getAllProduct(await searchParams);
  const categories = await getAllCategories();
  const brands = await getAllBrands();
   








  return (

    <div className="max-w-screen-2xl h-[1000svh] md:h-[300svh] dark:bg-gray-800 pt-12">

      <div className="flex justify-between items-center mx-5 mb-4 ">
        <Title label="Featured Product" />
        <div className="">

          <Link href={`${PRODUCT_PAGE}/add`} className='font-Nunito-Bold rounded-sm text-white bg-primary-500 hover:bg-primary-600 px-2 py-1 '>Add Product</Link>
        </div>

      </div>
      <div className="relative dark:bg-gray-800 max-w-screen-2xl h-auto  ">
        <div className="px-9 mb-7 sm:float-start sm:items-center sm:gap-4 sm:flex     ">
          <div className="w-full sm:grid   sm:grid-cols-2  flex flex-col gap-3 ">
            <SearchCategory categories={categories} />
            <SearchBrand brands={brands} />
          </div>
          <div className="mt-4 sm:mt-0">
            <ProductFilter />
          </div>

        </div>

        {/* <div className="absolute -top-16 right-36">
     <ProductFilter />

   </div> */}

        <div className=" h-svh grid w-full md:grid-cols-3 sm:grid-cols-2  lg:grid-cols-4 px-8 gap-5">

          {
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          }


        </div>

      </div>

    </div>


  );
}
export default ProductList;