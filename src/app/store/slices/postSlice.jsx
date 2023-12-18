import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "@/app/config/EndPoint";

export const PostSlice = createSlice({
    name:"post",
    initialState:{
        posts:[]
    },
    reducers:{
        setMyPosts:(state,action) => {
            state.posts = action.payload.posts
        }
    }
})
export const {setMyPosts} = PostSlice.actions



export const getMyPosts = () => async(dispatch) =>{
    try {
        const res =  axios.get(`${END_POINT}/api/post/getAllUsersPosts`)
        dispatch(setMyPosts({posts:res.data}))
    } catch (error) {
        alert("Ошибка при запросе пожалуйста сообщите об ошибке")
    }

}


export default PostSlice.reducer