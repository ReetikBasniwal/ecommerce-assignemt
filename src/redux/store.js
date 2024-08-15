import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducers/cartReducer";
import { productReducer } from "./Reducers/productListreducer";

export const store = configureStore({
  reducer: {
    cartReducer,
    productReducer,
  }
});