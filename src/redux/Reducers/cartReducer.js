import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
};

const actionSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setProductList: (state, action) => {
            // console.log(action.payload, "current user");
            state.productList = action.payload
        }
    }
})

export const cartReducer = actionSlice.reducer;

export const cartActions = actionSlice.actions;