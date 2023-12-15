import Link from "next/link"
export default function Logincomponent(){
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