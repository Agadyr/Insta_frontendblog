import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "@/app/config/EndPoint";
import { getMyComments } from "./commentSlice";


export const LikeSlice = createSlice({
    name:"like",
    initialState:{
        likes:[],
        storylikes:[]
    },
    reducers:{
        setMyStoryLikes:(state,action) => {
            state.storylikes = action.payload.storylikes
        },
        setMyLikes:(state,action) => {
            state.likes = action.payload.likes
        },
        handleDeletedLikes:(state,action) => {
            let likes = [...state.likes]
            likes = likes.filter(item => item.id !== action.payload)
        },

    }
})
export const {setMyLikes,handleDeletedLikes,setMyCommentLikes,handleDeletedCoomentLikes,setMyStoryLikes} = LikeSlice.actions



export const getLikesOfPost = (id) => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/like/get-likes-by-post/${id}`)
        dispatch(setMyLikes({likes:res.data}))
    } catch (error) {
        alert("Ошибка при запросе пожалуйста сообщите об ошибке")
    }

}

export const addLikeToPost = (id) => async(dispatch) => {

    axios.post(`${END_POINT}/api/like/add-like-to-post/${id}`)
    .then((response) => {;
        dispatch(getLikesOfPost(id))
    }).catch((error) =>{
        console.log(error);
    })
}

export const removeLike = (likeid,postid) => async(dispatch) => {
    try {
        const res = await axios.delete(`${END_POINT}/api/like/remove-like/${likeid}`)
        dispatch(getLikesOfPost(postid))
    } catch (error) {
        alert("что то пошло не так сообщите тех поддержке сайта")
    }
}

export const removeCommentLikeBack = (likeid,postid) => async(dispatch) => {
    try {
        const res = await axios.delete(`${END_POINT}/api/like/remove-like/${likeid}`)
        dispatch(getMyComments(postid))
    } catch (error) {
        alert("что то пошло не так сообщите тех поддержке сайта")
    }
}



export const addLikeToComment = (id,postid) => async(dispatch) => {

    axios.post(`${END_POINT}/api/like/add-like-to-comment/${id}`)
    .then((response) => {;
        dispatch(getMyComments(postid))
    }).catch((error) =>{
        console.log(error);
    })
}


export const getLikesOfStory = (id) => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/like/get-likes-by-story/${id}`)
        dispatch(setMyStoryLikes({storylikes:res.data}))
    } catch (error) {
        alert("Ошибка при запросе пожалуйста сообщите об ошибке")
    }

}


export const addLikeToStory = (id) => async (dispatch) => {

    axios.post(`${END_POINT}/api/like/add-like-to-story/${id}`)
    .then((response) => {
        dispatch(getLikesOfStory(id))
    }).catch((error) =>{
        console.log(error);
    })
}

export const removeStoryLike = (likeid,storyid) => async(dispatch) => {
    try {
        const res = await axios.delete(`${END_POINT}/api/like/remove-like/${likeid}`)
        dispatch(getLikesOfStory(storyid))
    } catch (error) {
        alert("что то пошло не так сообщите тех поддержке сайта")
    }
}

export default LikeSlice.reducer