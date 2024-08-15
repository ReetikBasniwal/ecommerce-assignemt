import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    participants: {},
    isActiveRoom: false,
    mainStream: null,
    roomId: null,
};

const actionSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setUser: (state, action) => {
            // console.log(action.payload, "current user");
            state.user = action.payload
        }
    }
})

export const cartReducer = actionSlice.reducer;

export const cartActions = actionSlice.actions;