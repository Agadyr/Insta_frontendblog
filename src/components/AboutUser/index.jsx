'use client'
import { useSelector } from "react-redux"
export default function AboutUser({Setmodalwindows}){
    const current_user = useSelector((state) => state.auth.currentUser)
    const posts = useSelector((state) => state.post.posts)
    return(
        <div className="container">
            <div className="user-profile">
                <div className="aboutuser df aic">
                    <div className="userprofilephoto">
                        <img src='/images/panda.jpg' alt="Not found" id="userphoto" />
                    </div>
                    <div className="stateuser">
                        <div className="name df">
                            <h3>{current_user.full_name}</h3>
                            <div className="follow-btn df">
                                <button className="btn btn-f">Follow</button>
                                <button className="More"><img src="/icons/More.png" alt="" /></button>
                            </div>
                        </div>
                        <div className="states df">
                            <div className="states-item df"><h2>{posts.length} </h2>posts</div>
                            <div className="states-item df" onClick={() => Setmodalwindows(4)}><h2>7</h2>followers</div>
                            <div className="states-item df" onClick={() => Setmodalwindows(5)}><h2> 5</h2>following</div>
                        </div>
                        <div className="bio">
                            <h2>{current_user.username}</h2>
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