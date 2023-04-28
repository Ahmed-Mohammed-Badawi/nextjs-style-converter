import { createSlice } from "@reduxjs/toolkit";

export const directionSlice = createSlice({
    name: "direction",
    initialState: {
        inputCode: "",
        outputCode: "",
        isCSS: true,
    },
    reducers: {
        setInputCode: (state, action) => {
            state.inputCode = action.payload;
        },
        setOutputCode: (state, action) => {
            state.outputCode = action.payload;
        },
        setIsCSS: (state, action) => {
            state.isCSS = action.payload;
        },
    },
});

export const { setInputCode, setOutputCode, setIsCSS } = directionSlice.actions;

export default directionSlice.reducer;
