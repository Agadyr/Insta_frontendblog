import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "@/app/config/EndPoint";

export const postSlice = createSlice({
    name:"post",
    initialState:{
        posts:[]
    },
    reducers:{
        setMyPosts:(state,action) => {
            state.posts = action.payload.posts
        },
        uppendMyPosts:(state,action) => {
            state.posts = [...state.posts,action.payload.newPost]
        }

    }
})
export const {setMyPosts} = postSlice.actions



export const getMyPosts = () => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/post/getAllUserPosts`)
        dispatch(setMyPosts({posts:res.data}))
    } catch (error) {
        alert("Ошибка при запросе пожалуйста сообщите об ошибке")
    }

}

export const CreatePost = (data) => async(dispatch) => {
    try {
        console.log(data);
        const res = await axios.post(`${END_POINT}/api/post/newPost`,data)
        dispatch(uppendMyPosts({newPost:res.data}))
    } catch (error) {
        alert('You have a error')
    }
}


export default postSlice.reducer