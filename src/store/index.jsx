import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";
import typographyReducer from './typographySlice'
import utilityReducer from './utilitySlice'
import flexReducer from './flexSlice'
import flexUtilityReducer from "./flexUtilitySlice";

export const store = configureStore({
    reducer: {
        
        typography: typographyReducer,
        utility: utilityReducer,
        color: colorReducer,
        flex: flexReducer,
        flexUtilities: flexUtilityReducer
    }
})