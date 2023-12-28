import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "@/app/config/EndPoint";

export const CommentSlice = createSlice({
    name:"comment",
    initialState:{
        // allposts:[],
        comments:[],
        // post:{}
    },
    reducers:{
        // SetAllUsersComments:(state,action) => {
        //     state.allposts = action.payload.allposts
        // },
        setMyComments:(state,action) => {
            state.comments = action.payload.comments
        },
        uppendMyComments:(state,action) => {
            state.comments = [...state.comments,action.payload.comments]
        },
        handleDeletedComments:(state,action) => {
            let posts = [...state.posts]
            posts = posts.filter(item => item.id !== action.payload)
        }

    }
})
export const {setMyComments} = CommentSlice.actions



export const getMyComments = (id) => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/getComments/${id}`)
        dispatch(setMyComments({comments:res.data}))
    } catch (error) {
        alert("Ошибка при запросе пожалуйста сообщите об ошибке")
    }

}

export const CreateComment = (data) => async(dispatch) => {
    axios.post(`${END_POINT}/api/newComment`,data)
    .then((response) => {;
        dispatch(getMyComments(response.data.postId))
    }).catch((error) =>{
        console.log(error);
    })
}

// export const editPost = (data) => async(dispatch)=>{
//      try {
//         const res = await axios.put(`${END_POINT}/api/post/editPost`,data)
//         dispatch(getMyPosts())
        
//     } catch (error) {
//         alert("Что то пошло не так, сообщите о ошибке Тех спецам сайта")
//     }
// }

// export const deletePost = (id) => async(dispatch) => {
//     try {
//         const res = await axios.delete(`${END_POINT}/api/post/deletePostByID/${id}`)
//         dispatch(handleDeletedResume(id))
//         dispatch(getMyPosts())
//         dispatch(ToEmptyPost())
//     } catch (error) {
//         alert("что то пошло не так сообщите тех поддержке сайта")
//     }
// }
export default CommentSlice.reducer