import { configureStore } from "@reduxjs/toolkit";
import directionReducer from "./features/directionSlice";

export const store = configureStore({
    reducer: {
        direction: directionReducer,
    },
});
