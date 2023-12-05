'use client'
import Header from "../header"
export default function User({user,Setmodalwindows}){
    const ShowUser = user.map(item => item)
    return(
        <div className="container">
            <div className="user-profile">
                <Header user={user}  Setmodalwindows={Setmodalwindows}/>
                <div className="aboutuser df aic">
                    <div className="userprofilephoto">
                        <img src={ShowUser[0].imageprofile} alt="Not found" id="userphoto" />
                    </div>
                    <div className="stateuser">
                        <div className="name df">
                            <h3>{ShowUser[0].username}</h3>
                            <div className="follow-btn df">
                                <button className="btn btn-f">Follow</button>
                                <button className="More"><img src="/icons/More.png" alt="" /></button>
                            </div>
                        </div>
                        <div className="states df">
                            <div className="states-item df"><h2>{ShowUser[0].stats.posts} </h2>posts</div>
                            <div className="states-item df" onClick={() => Setmodalwindows(4)}><h2>{ShowUser[0].stats.followers}</h2>followers</div>
                            <div className="states-item df" onClick={() => Setmodalwindows(5)}><h2>{ShowUser[0].stats.following} </h2>following</div>
                        </div>
                        <div className="bio">
                            <h2>{ShowUser[0].bio}</h2>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <hr className="line"/>
                    <div className="posts-hr">
                        <div className="posts-img df">
                            <img src="/icons/icon.svg" alt="" />
                            <h3>POSTS</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}