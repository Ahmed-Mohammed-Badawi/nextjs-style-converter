import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const outputCodeSlice = createSlice({
    name: "outputCode",
    initialState,

    reducers: {
        setOutputCode: (state, action) => {
            state = action.payload;
        },
    },
});

export const { setOutputCode } = outputCodeSlice.actions;

export default outputCodeSlice.reducer;
