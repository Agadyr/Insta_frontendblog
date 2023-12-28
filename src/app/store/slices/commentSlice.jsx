import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "@/app/config/EndPoint";

export const CommentSlice = createSlice({
    name:"comment",
    initialState:{
        comments:[],
    },
    reducers:{
        setMyComments:(state,action) => {
            state.comments = action.payload.comments
        },
        uppendMyComments:(state,action) => {
            state.comments = [...state.comments,action.payload.comments]
        },
        handleDeletedComments:(state,action) => {
            let comments = [...state.comments]
            comments = comments.filter(item => item.id !== action.payload)
        }

    }
})
export const {setMyComments,handleDeletedComments} = CommentSlice.actions



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

export const deleteComment = (commentid,postid) => async(dispatch) => {
    try {
        const res = await axios.delete(`${END_POINT}/api/deleteComment/${commentid}`)
        dispatch(handleDeletedComments(commentid))
        dispatch(getMyComments(postid))
    } catch (error) {
        alert("что то пошло не так сообщите тех поддержке сайта")
    }
}
export default CommentSlice.reducer