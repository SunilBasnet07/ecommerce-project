import { userLogin, userRegister } from "@/api/auth";

const { createAsyncThunk } = require("@reduxjs/toolkit");

const login = createAsyncThunk("auth/login", async (data, {rejectWithValue}) => {
    try {
        const response = await userLogin(data);
        localStorage.setItem("authToken", response.data?.token);
    
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data); 
    }

});



const registerUser = createAsyncThunk("auth/register",async(data,{rejectWithValue})=>{
    try {
        const response= await userRegister(data);
        localStorage.setItem("authToken", response.data?.token);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }
});


export { login, registerUser }
