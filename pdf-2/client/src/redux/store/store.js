import { configureStore } from "@reduxjs/toolkit";

import studentSliceReducer from "../slice/studentSlice";

export const store = configureStore({
    reducer: {
        student: studentSliceReducer
    }
})