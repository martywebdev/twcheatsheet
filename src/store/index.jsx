import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";
import typographyReducer from './typographySlice'
import utilityReducer from './utilitySlice'

export const store = configureStore({
    reducer: {
        
        typography: typographyReducer,
        utility: utilityReducer,
        color: colorReducer,
    }
})