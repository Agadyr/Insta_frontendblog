import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "@/app/config/EndPoint";

export const StorySlice = createSlice({
    name:"story",
    initialState:{
        stories:[],
    },
    reducers:{
        setMyStories:(state,action) => {
            state.stories = action.payload.stories
        },
        uppendMyStories:(state,action) => {
            state.stories = [...state.stories,action.payload.stories]
        },
        handleDeletedStories:(state,action) => {
            let stories = [...state.stories]
            stories = stories.filter(item => item.id !== action.payload)
        }

    }
})
export const {setMyStories,handleDeletedStories} = StorySlice.actions



export const getMyStories = () => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/post/userStoriesById`)
        dispatch(setMyStories({stories:res.data}))
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

// export const deleteComment = (commentid,postid) => async(dispatch) => {
//     try {
//         const res = await axios.delete(`${END_POINT}/api/deleteComment/${commentid}`)
//         dispatch(handleDeletedComments(commentid))
//         dispatch(getMyComments(postid))
//     } catch (error) {
//         alert("что то пошло не так сообщите тех поддержке сайта")
//     }
// }
export default StorySlice.reducer