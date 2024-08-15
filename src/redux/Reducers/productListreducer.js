import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText: "",
    productList: [],
};

const productSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setProductList: (state, action) => {
            // console.log(action.payload, "current user");
            state.productList = action.payload
        },
        setSearchText: (state, action) => {
            // console.log(action.payload, "current user");
            state.searchText = action.payload
        },
    }
})

export const productReducer = productSlice.reducer;

export const productAction = productSlice.actions;