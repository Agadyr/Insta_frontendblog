import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './slices/authSlice'
export default configureStore({
    reducer:{
        auth:AuthReducer
    },
})