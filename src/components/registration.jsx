'use client'
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useSelector,useDispatch } from "react-redux"
import { SignUp, authorize } from "@/app/store/slices/authSlice"
import React, { useState } from "react"
export default function Registration(){
    const router = useRouter()
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)
    const [email,SetMobilenumberOrEmail] = useState('')
    const [full_name,SetName] = useState('')
    const [username,SetUsername] = useState('')
    const [password,SetPassword] = useState('')
    const [error,Seterror] = useState('')
    const SendDataToBack = () => {
        dispatch(SignUp(email,full_name,username,password))
        if(email.length > 0 && full_name.length > 0 && username.length>0 && password.length > 0) {
            router.push('/login')
            SetMobilenumberOrEmail('')
            SetName('')
            SetUsername('')
            SetPassword('')
            Seterror('')
        }else{
            Seterror('Please fill in all fields')
        }
    }
    return(
        <div className="registration">
            <div>
                <div className="reg-main">
                    <div className="reg-header"> 
                        <img src="/images/logo.png"/>
                        <p className="ppp">Sign up to see photos and
                        videos from your friends.</p>
                        <button className="reg-btn btn">
                            <img src="/images/facebook.png"/>Log in with Facebook
                        </button>
                        <div className="Linefor">
                            <p className="linefor"></p>
                            <h2>OR</h2>
                            <p className="linefor"></p>
                        </div>
                    </div>
                    <div>
                        <form action="" className="regForm">
                            <input type="text" placeholder="Mobile Number or Email" value={email} onChange={(e) => SetMobilenumberOrEmail(e.target.value)}></input>
                            <input type="tel"  placeholder="Name and Surname" value={full_name}  onChange={(e) => SetName(e.target.value)}/>
                            <input type="text" placeholder="Username" value={username}  onChange={(e) => SetUsername(e.target.value)}></input>
                            <input type="tel"  placeholder="Password" value={password}  onChange={(e) => SetPassword(e.target.value)}/>
                            <div className="rules">
                                <p className="rule">People who use our service may have uploaded your contact information to Instagram. <a href="">Learn More</a></p>
                                <p className="rule">By signing up, you agree to our <a href="Terms"></a> , <a href="">Privacy </a>  and <a href="">Cookies Policy </a> .</p>
                            </div>
                            <button className="signup btn" type="button" onClick={SendDataToBack}>Sign Up</button>
                            {<p className="error">{error}</p>}
                        </form>
                    </div>
                </div>
                <div className="haveLogin">
                    <p>Have an account?  <Link href="/login">Login</Link></p>
                </div>
                <div className="InApps">
                    <h3>Get the app.</h3>
                    <div>
                        <img src="images/playmarket.png" alt="" />
                        <img src="images/microsoft.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}