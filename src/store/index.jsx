import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";
import typographyReducer from './typographySlice'

export const store = configureStore({
    reducer: {
        
        typography: typographyReducer,
        color: colorReducer,
    }
})