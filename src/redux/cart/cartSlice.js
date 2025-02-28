import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        product: [],
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;


            const existingProduct = state.product.find((item) =>
                item.id == product.id
            )

            if (existingProduct) {
                state.product = state.product.map((item) => {
                    if (item.id == product.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            } else {
                state.product = [...state.product, { ...product, quantity: 1 }];
            }

            state.totalPrice = state.product.reduce((total, item) => {
                total = item.price + state.totalPrice;
                return total;
            }, 0);

        },
        increaseQuantity: (state, action) => {
            const product = action.payload;
            state.product = state.product.map((item) => {
                if (item.id == product.id) {
                    return { ...item, quantity: item.quantity + 1 }

                }
                return item;


            });
            state.totalPrice = state.totalPrice + product.price;

        },
        decreaseQuantity: (state, action) => {
            const product = action.payload;

            state.product = state.product.map((item) => {
                if (item.id == product.id && product.quantity >= 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            })
            state.totalPrice = state.totalPrice - product.price;
        },
        removeCartProduct: (state, action) => {
            const product = action.payload;
            state.product = state.product.filter((item) => (
                item.id != product.id)
              
          
                
            )
            state.totalPrice= state.totalPrice- product.price*product.quantity;
        },
        clearCart:(state)=>{
            state.product=[];
            state.totalPrice=0;
        }
    }
});
export const { addToCart, increaseQuantity, decreaseQuantity,removeCartProduct,clearCart } = cartSlice.actions;
export default cartSlice.reducer;