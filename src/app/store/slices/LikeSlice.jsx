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
        uppendMyLikes:(state,action) => {
            state.likes = [...state.likes,action.payload.likes]
        },
        handleDeletedLikes:(state,action) => {
            let likes = [...state.likes]
            likes = likes.filter(item => item.id !== action.payload)
        }

    }
})
export const {setMyLikes,handleDeletedLikes} = LikeSlice.actions



export const getLikesOfPost = (id) => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/like/get-likes-by-post/${id}`)
        dispatch(setMyLikes({likes:res.data}))
    } catch (error) {
        alert("Ошибка при запросе пожалуйста сообщите об ошибке")
    }

}

export const CreateStory = (video) => async(dispatch) => {

    let fd = new FormData()
    fd.append('video', video)

    axios.post(`${END_POINT}/api/post/newStory`,fd)
    .then((response) => {;
        dispatch(getMyStories())
    }).catch((error) =>{
        console.log(error);
    })
}

export const deleteStory = (story) => async(dispatch) => {
    try {
        const res = await axios.delete(`${END_POINT}/api/post/deleteStory/${story.id}`)
        dispatch(handleDeletedStories(story.id))
        dispatch(getMyStories())
    } catch (error) {
        alert("что то пошло не так сообщите тех поддержке сайта")
    }
}
export default LikeSlice.reducer