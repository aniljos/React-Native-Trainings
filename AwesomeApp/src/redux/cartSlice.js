import {createSlice} from '@reduxjs/toolkit';

// cart --. cartItem --> {product, qty: 3}
const initialState = {
    cart : []
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
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

