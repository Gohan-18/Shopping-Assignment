import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feature/Cart-slice';
import productReducer from './feature/Product-slice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
    }
})

export default store;