import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "@/app/config/EndPoint";
import { jwtDecode } from "jwt-decode";
export const AuthSlice = createSlice({
    name:"auth",
    initialState:{
        isAuth:false,
        currentUser:null,
        tokenExt:0
    },
    reducers:{
        authorize:(state,action) => {
            const decoded = jwtDecode(action.payload.token)
            state.currentUser = {
                id:decoded.id,
                email:decoded.email,
                full_name:decoded.full_name,
                username:decoded.username,
                phone:decoded.phone
            }
            state.isAuth = true

            state.tokenExt = decoded.exp


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
export const SignIn  = (email,password) => (dispatch) => {
    axios.post(`${END_POINT}/api/auth/signin`,{
        email,
        password
    }).then(res => {
        dispatch(authorize(res.data))
    })
}


export default AuthSlice.reducer