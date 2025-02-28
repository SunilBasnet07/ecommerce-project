import { productAdd } from "./productAction";

const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
   name: "product",
   initialState: {
      loading: false,
      product: null,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => builder
      .addCase(productAdd.pending, (state) => {
         state.loading = true;
         state.product = null;
         state.error = null;
      })
      .addCase(productAdd.fulfilled, (state, action) => {
         state.product = action.payload;
         state.loading = false;
         state.error = null

      })
      .addCase(productAdd.rejected, (state, action) => {
         state.error = action.payload;
         state.product = null;
         state.loading = false;


      })

});

export default productSlice.reducer;