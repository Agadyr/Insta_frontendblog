'use client'
import { useState } from "react"
export default function Registration(){
    const[step,setStep] = useState(1)
    return(
        <div className="registration">
            {step == 1 && <div>
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
                            <input type="text" id="name" placeholder="Mobile Number or Email"></input>
                            <input type="tel" id="phoneNumber" placeholder="Name and Surname"/>
                            <input type="text" id="name" placeholder="Username"></input>
                            <input type="tel" id="phoneNumber" placeholder="Password"/>
                            <div className="rules">
                                <p className="rule">People who use our service may have uploaded your contact information to Instagram. <a href="">Learn More</a></p>
                                <p className="rule">By signing up, you agree to our <a href="Terms"></a> , <a href="">Privacy </a>  and <a href="">Cookies Policy </a> .</p>
                            </div>
                            <button className="signup btn">Sign Up</button>
                        </form>
                    </div>
                </div>
                <div className="haveLogin">
                    <p>Have an account?  <button onClick={() => setStep(2)}>Login</button></p>
                </div>
                <div className="InApps">
                    <h3>Get the app.</h3>
                    <div>
                        <img src="images/playmarket.png" alt="" />
                        <img src="images/microsoft.png" alt="" />
                    </div>
                </div>
            </div>}
            {step == 2 && <div className="df aic">
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
                                <input type="text" id="name" placeholder="Phone number,username or email"></input>
                                <input type="tel" id="phoneNumber" placeholder="Password"/>
                                <button className="signup btn">Sign Up</button>
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
                        <p>Do you have account? <button onClick={() => setStep(1)}>Sign in</button></p>
                    </div>
                    <div className="InApps">
                        <h3>Get the app.</h3>
                        <div>
                            <img src="images/playmarket.png" alt="" />
                            <img src="images/microsoft.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}