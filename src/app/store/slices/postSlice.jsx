import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "@/app/config/EndPoint";

export const postSlice = createSlice({
    name:"post",
    initialState:{
        posts:[],
        post:{}
    },
    reducers:{
        setMyPosts:(state,action) => {
            state.posts = action.payload.posts
        },
        uppendMyPosts:(state,action) => {
            state.posts = [...state.posts,action.payload.posts]
        },
        SetPostByid:(state,action) => {
            state.post = action.payload.post
        },
        ToEmptyPost:(state,action) => {
            state.post = {}
        },
        handleDeletedResume:(state,action) => {
            let posts = [...state.posts]
            posts = posts.filter(item => item.id !== action.payload)
        }

    }
})
export const {setMyPosts,SetPostByid,uppendMyPosts,ToEmptyPost,handleDeletedResume} = postSlice.actions



export const getMyPosts = () => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/post/getAllUserPosts`)
        dispatch(setMyPosts({posts:res.data}))
    } catch (error) {
        alert("Ошибка при запросе пожалуйста сообщите об ошибке")
    }

}

export const CreatePost = (data) => async(dispatch) => {
    axios.post(`${END_POINT}/api/post/newPost`,data)
  .then((response) => {
    dispatch(uppendMyPosts({posts:res.data}))
    console.log('Server response:', response.data);
  })
  .catch((error) => {
    console.error('Error submitting form:', error);
  });
}


export const getPostByid = (id) => async(dispatch)=>{
    try {
        const res = await axios.get(`${END_POINT}/api/post/getPostByID/${id}`)
        dispatch(SetPostByid({post:res.data}))
    } catch (error) {
        console.log('You have an error ');
    }
}


export const editPost = (data) => async(dispatch)=>{
     try {
        const res = await axios.put(`${END_POINT}/api/post/editPost`,data)
        dispatch(ToEmptyPost())
        dispatch(uppendMyPosts({posts:res.data}))
    } catch (error) {
        alert("Что то пошло не так, сообщите о ошибке Тех спецам сайта")
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        const res = await axios.delete(`${END_POINT}/api/post/deletePostByID/${id}`)
        dispatch(handleDeletedResume(id))
        dispatch(getMyPosts())
        dispatch(ToEmptyPost())
    } catch (error) {
        alert("что то пошло не так сообщите тех поддержке сайта")
    }
}
export default postSlice.reducer