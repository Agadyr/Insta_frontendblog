import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './slices/authSlice'
import postReducer from './slices/postSlice'
import CommentReducer from './slices/commentSlice'
import StoryReducer from './slices/StorySlice'
import LikeReducer from './slices/LikeSlice'
export default configureStore({
    reducer:{
        auth:AuthReducer,
        post:postReducer,
        comment:CommentReducer,
        story:StoryReducer,
        like:LikeReducer,
    },
})