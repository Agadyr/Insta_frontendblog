import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "@/app/config/EndPoint";
export const AuthSlice = createSlice({
    name:"auth",
    initialState:{
        isAuth:false,
        currentUser:null,
    },
    reducers:{
        authorize:(state) => {
            state.isAuth = true
        },
        logOut: (state) =>{
            state.isAuth = false
        }
    }
})

export const {authorize, logOut} = AuthSlice.actions



export const SignUp = (email,full_name,username,password) => (dispatch) => {
    axios.post(`${END_POINT}/api/auth/signup`,{
        email,
        full_name,
        username,
        password
    })

}

export default AuthSlice.reducer