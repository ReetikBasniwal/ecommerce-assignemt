import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const actionSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products = [...state.products, action.payload];
        }
    }
})

export const cartReducer = actionSlice.reducer;

export const cartActions = actionSlice.actions;