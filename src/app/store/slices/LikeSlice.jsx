import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "@/app/config/EndPoint";

export const LikeSlice = createSlice({
    name:"like",
    initialState:{
        likes:[],
    },
    reducers:{
        setMyLikes:(state,action) => {
            state.likes = action.payload.likes
        },
        handleDeletedLikes:(state,action) => {
            let likes = [...state.likes]
            likes = likes.filter(item => item.id !== action.payload)
        },

        setMyCommentLikes:(state,action) => {
            state.commentLikes = action.payload.commentLikes
        },
        handleDeletedCoomentLikes:(state,action) => {
            let commentLikes = [...state.commentLikes]
            commentLikes = commentLikes.filter(item => item.id !== action.payload)
        }

    }
})
export const {setMyLikes,handleDeletedLikes,setMyCommentLikes,handleDeletedCoomentLikes,uppendMyComments} = LikeSlice.actions



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

export const removeLike = (likeid,id) => async(dispatch) => {
    try {
        const res = await axios.delete(`${END_POINT}/api/like/remove-like/${likeid}`)
        dispatch(handleDeletedLikes(likeid))
        dispatch(getLikesOfPost(id))
    } catch (error) {
        alert("что то пошло не так сообщите тех поддержке сайта")
    }
}







export const addLikeToComment = (id) => async(dispatch) => {

    axios.post(`${END_POINT}/api/like/add-like-to-post/${id}`)
    .then((response) => {;
        dispatch(getLikesOfPost(id))
    }).catch((error) =>{
        console.log(error);
    })
}




export default LikeSlice.reducer