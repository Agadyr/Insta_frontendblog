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
                        <img src='/images/panda.jpg' alt="Not found" id="userphoto" />
                    </div>
                    <div className="stateuser">
                        <div className="name df">
                            {current_user && <h3>{current_user.full_name}</h3>}
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
                           {current_user && <h2>{current_user.username}</h2>}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="df ProfileAllStories">
                        {stories && stories.map(item => (
                        <div className="stories Profilestories df">
                            <div className="story ProfileUserStory">
                                <div className="borderstory">
                                    <img className='ProfileUserStories' src='posts/1.png'  alt="" onClick={() => SetSelectStory(item)}/>
                                </div>
                                <h4>Madi</h4>
                            </div>
                        </div>))}
                    </div>
                </div>
                <div className="posts">
                    <hr className="li className='UserStories'ne"/>
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