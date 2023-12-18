import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './slices/authSlice'
import PostReducer from './slices/postSlice'
export default configureStore({
    reducer:{
        auth:AuthReducer,
        post:PostReducer
    },
})