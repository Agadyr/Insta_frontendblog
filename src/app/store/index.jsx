import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './slices/authSlice'
import postReducer from './slices/postSlice'
import CommentReducer from './slices/commentSlice'
import StoryReducer from './slices/StorySlice'
export default configureStore({
    reducer:{
        auth:AuthReducer,
        post:postReducer,
        comment:CommentReducer,
        story:StoryReducer
    },
})