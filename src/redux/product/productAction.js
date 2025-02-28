const { addProduct } = require("@/api/product");
const { createAsyncThunk } = require("@reduxjs/toolkit");

const productAdd=createAsyncThunk("add/product", async (data,{rejectWithValue,})=>{
    try {
        const response = await addProduct(data);

        return response.data;  
    } catch (error) {
        return rejectWithValue(error.response?.data);
    }  
   
});

export {productAdd}