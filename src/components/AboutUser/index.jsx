'use client'
import { getMyStories } from "@/app/store/slices/StorySlice"
import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import ShowStoryOfUser from "../ShowStoryOfUser"
export default function AboutUser({Setmodalwindows}){
    const current_user = useSelector((state) => state.auth.currentUser)
    const posts = useSelector((state) => state.post.posts)
    const stories = useSelector((state) => state.story.stories)
    const [SelectStory,SetSelectStory] = useState({})
    const dispatch = useDispatch()
    const didmount = () => {
        dispatch(getMyStories())
    }
    useEffect(didmount,[])

    return(
        
        <div className="container">
            {SelectStory.id && <ShowStoryOfUser SelectStory={SelectStory} SetSelectStory={SetSelectStory}/>}
            <div className="user-profile">
                <div className="aboutuser df aic">
                    <div className="userprofilephoto">
                        <img src='/posts/1.png' alt="Not found" id="userphoto" />
                        <div className="name df aic dn foradaptive">
                            {current_user && <h3>{current_user.full_name}</h3>}
                            <div className="follow-btn df">
                                <button onClick={() => Setmodalwindows(6)} className="btn-silver btn-f">Edit Profile</button>
                                <button className="btn-silver btn-f">View Archive</button>
                            </div>
                        </div>
                    </div>
                    <div className="stateuser">
                        <div className="name df aic">
                            {current_user && <h3>{current_user.full_name}</h3>}
                            <div className="follow-btn df">
                                <button onClick={() => Setmodalwindows(6)} className="btn-silver btn-f">Edit Profile</button>
                                <button className="btn-silver btn-f">View Archive</button>
                            </div>
                        </div>
                        <div className="states df ">
                            <div className="states-item df"><h2>{posts.length} </h2>posts</div>
                            <div className="states-item df" onClick={() => Setmodalwindows(4)}><h2>7</h2>followers</div>
                            <div className="states-item df" onClick={() => Setmodalwindows(5)}><h2> 5</h2>following</div>
                        </div>
                        <div className="bio">
                           {current_user && <h2>{current_user.username}</h2>}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="df ProfileAllStories">
                        {stories && stories.map((item,index) => (
                        <div key={index} className="stories Profilestories df">
                            <div className="story ProfileUserStory">
                                <div className="borderstory">
                                    <img className='ProfileUserStories' src='images/reine.jpg'  alt="" onClick={() => SetSelectStory(item)}/>
                                </div>
                                <h4>Madi</h4>
                            </div>
                        </div>))}
                    </div>
                </div>
                <hr className="li dn"/>
                <div className="df  aic nav-states dn">
                    <div className="states-item nav-state"><h2>{posts.length} </h2>posts</div>
                    <div className="states-item nav-state" onClick={() => Setmodalwindows(4)}><h2>7</h2>followers</div>
                    <div className="states-item nav-state" onClick={() => Setmodalwindows(5)}><h2> 5</h2>following</div>
                </div>
                <div className="posts">
                    <hr className="li"/>
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