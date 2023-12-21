'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useDispatch,useSelector } from "react-redux"
import Link from "next/link"
import { SignIn } from "@/app/store/slices/authSlice"
export default function Logincomponent(){
    const router = useRouter()
    const isAuth = useSelector((state) => state.auth.isAuth)
    const current = useSelector((state) => state.auth.currentUser)
    const dispatch = useDispatch()
    const [email,Setemail] = useState('')
    const [password,Setpassword] = useState('')
    const [error,Seterror] = useState('')
    const save = () => {
        if(email.length > 0 && password.length > 0){
            dispatch(SignIn(email,password))
        }else{
            Seterror('Please fill in all fields')
        }
    }
    useEffect(() => {
        if(isAuth){
            router.push("/homepage")
        }
    },[isAuth])
    return(
        <div className="registration">
            <div className="df aic">
                <div className="phone">
                    <img src="/images/inst.png" alt="" />
                </div>
                <div>
                    <div className="reg-main">
                        <div className="reg-header reg-header-login"> 
                            <img src="/images/logo.png"/>
                        </div>
                        <div>
                            <form action="" className="regForm">
                                <input type="text" placeholder="Phone number,username or email" value={email} onChange={(e) => Setemail(e.target.value)}></input>
                                <input type="tel"  placeholder="Password" value={password} onChange={(e) => Setpassword(e.target.value)}/>
                                <button className="signup btn" type="button" onClick={() => save()}>Sign Up</button>
                                {error.length>0 &&<p className="error">{error}</p>}
                            </form>
                        </div>
                        <div className="Linefor">
                                <p className="linefor"></p>
                                <h2>OR</h2>
                                <p className="linefor"></p>
                        </div>
                        <div className="log-header">
                            <div className="log-fb df jcc aic">
                                <img src="/icons/fbbg.png" alt="" />
                                <h2>Log in with Facebook</h2>
                            </div>
                            <div className="forgot-password df jcc">
                                <button> Forgot password?</button>    
                            </div>
                            
                        </div>
                    </div>
                    <div className="haveLogin">
                        <p>Don't have an account? <Link href="/">Sign in</Link></p>
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
        </div>
       
    )
}