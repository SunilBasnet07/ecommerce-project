import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "@/redux/auth/authSlice";
import cartReducer from "@/redux/cart/cartSlice";
import productReducer from "@/redux/product/productSlice";
import userPreference from "@/redux/userPerference/userPreferenceSlice.js";

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
    userPreference:userPreference,
})

export default rootReducer