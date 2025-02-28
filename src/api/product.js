
import config from "@/config/config";
import axios from "axios";
import { authToken } from "./token";

const getAllProduct = async (searchParams) => {
   // const limit = searchParams?.limit;
      const response = await axios.get(`${config.apiUrl}/api/products?limit=${searchParams?.limit || 10}&sort=${searchParams?.sort ?? ""}&max=${searchParams?.max ??""}&min=${searchParams?.min ??""}&category=${searchParams?.category ??""}&brand=${searchParams?.brand ??""}&name=${searchParams?.name ??""}`);
   return response.data
}

const getProductById = async (id) => {
   const response = await axios.get(`${config.apiUrl}/api/products/${id}`);
   return response.data;
}
const getProductsByCategory = async (category) => {
  const response = await axios.get(`${config.apiUrl}/api/products/category/${category}`);
   return response.data;
}
const getAllCategories = async () => {
   const response = await axios.get(`${config.apiUrl}/api/products/categories`);
    return response.data;
 }
 const getAllBrands = async () => {
   const response = await axios.get(`${config.apiUrl}/api/products/brands`);
    return response.data;
 }
const getProductsByBrand = async (brand) => {
const response = await axios.get(`${config.apiUrl}/api/products/brand/${brand}`);
   return response.data;
}

const addProduct = async (data) => {
console.log(data);
   try {
      const response = await axios.post(`${config.apiUrl}/api/products`, data, {
         headers: {
            Authorization: `Bearer ${authToken}`,
         }

      });
      
      return response.data;
   } catch (error) {
      console.log(error.response.data);
   }
}
const updateProduct = async (id, data) => {
   const response = await axios.put(`${config.apiUrl}/api/products/${id}`, data, {
      headers: {
         Authorization: `Bearer ${authToken}`,
      }
   });
   return response.data;
}
const deleteProduct = async (id) => {

   const response = await axios.delete(`${config.apiUrl}/api/products/${id}`, {
      headers: {
         Authorization: `Bearer ${authToken}`,
      }
   });
   return response.data;
}
export { getAllProduct, getProductById, addProduct, updateProduct, deleteProduct,getProductsByCategory ,getProductsByBrand,getAllCategories , getAllBrands}