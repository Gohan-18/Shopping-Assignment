import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk('products/fetchAll', async() => {
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    // console.log(result)
    return result;
});

// export const fetchSingleProduct = createAsyncThunk('products/fetchOne', async ({productid}) => {
//     const data = await fetch(`https://dummyjson.com/products/${productid}`)
//     const result = await data.json();
//     return result;
// });

const productSlice = createSlice({
    name:'products',
    initialState: {
        allProducts: [],
        singleProduct: {},
        filterProducts: [],
        searchedTerm: '',
        loading: false
    },
    extraReducers:(builder) => {
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.loading = false;
        });
        // builder.addCase(fetchSingleProduct.pending, (state) => {
        //     state.loading = true;
        // })
        // builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
        //     state.singleValue = action.payload;
        //     state.loading = false;
        // })
    },
    reducers: {
        currentSearchedTerm(state, action) {
            // console.log(action.payload)
            state.searchedTerm = action.payload;
            console.log(state.searchedTerm)
        },
        viewSingleProduct(state, action) {
            state.singleProduct = action.payload
        }
    }
})

export const { currentSearchedTerm, viewSingleProduct } = productSlice.actions;
export default productSlice.reducer;