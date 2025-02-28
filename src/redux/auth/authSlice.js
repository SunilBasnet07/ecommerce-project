import { createSlice } from "@reduxjs/toolkit"
import { login, registerUser,  } from "./authAction";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: null,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("authToken");
        },
        updateStateUser:(state,action)=>{
            state.user= action.payload;
        }


    },
    extraReducers: (builder) => builder
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(login.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.user = null;
        })
        .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.user = null;
        })
    

});
export const {logout,updateStateUser} = authSlice.actions;
export default authSlice.reducer;