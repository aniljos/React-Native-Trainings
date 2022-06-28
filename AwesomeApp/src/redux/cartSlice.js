import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProductsAsync = createAsyncThunk("fetchProducts", async () => {

    const resposne = await axios.get("http://10.0.2.2:9000/products");
    return resposne.data;

})


// cart --. cartItem --> {product, qty: 3}
const initialState = {
    cart : [],
    products: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart : (state, action) => {

            console.log("cart reducer addToCart", action.payload);
            //action.payload: cartItem --> {product, qty: 3}
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {

            //action.payload ==> is the product id
            const index = state.cart.findIndex(item => item.product.id === action.payload);
            if(index !== -1){
                state.cart.splice(index, 1);
            }
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {

            console.log("in the thunk async middleware");
            state.products = action.payload;
        })

        builder.addCase(fetchProductsAsync.rejected, (state, action) => {

            console.log("in the thunk async middleware");
            state.products = [];
        })
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

