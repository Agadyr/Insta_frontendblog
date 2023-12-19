import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './slices/authSlice'
import postReducer from './slices/postSlice'
export default configureStore({
    reducer:{
        auth:AuthReducer,
        post:postReducer
    },
})