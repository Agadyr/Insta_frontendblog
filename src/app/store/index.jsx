import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './slices/authSlice'
import postReducer from './slices/postSlice'
import CommentReducer from './slices/commentSlice'
export default configureStore({
    reducer:{
        auth:AuthReducer,
        post:postReducer,
        comment:CommentReducer
    },
})