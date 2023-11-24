'use client'
import Link from "next/link"
export default function Registration(){
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