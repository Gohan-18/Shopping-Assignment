import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems: []
    },
    reducers: {
        addTOCart(state, action) {
            const { product, quantity} = action.payload;
            const existingItem = state.cartItems?.find(({ product : prod}) => prod.id === product.id);
            if(existingItem) {
                existingItem.quantity += 1;
            }
            else{
                state.cartItems.push(action.payload);    
            }
        },
        removeFromCart(state, action) {
            const { product } = action.payload;
            const index = state.cartItems.findIndex(({ product : prod}) => prod.id === product.id);
            if (index > -1) {
                const existingItem = state.cartItems[index];
                if(existingItem.quantity === 1){
                    state.cartItems.splice(index, 1);
                }
                else {
                    existingItem.quantity -= 1;
                }
            }
        }
    }
})

export const { addTOCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;