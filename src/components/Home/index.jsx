'use client'
import { useState } from "react"
export default function Home({userStory,SelectId}){
    const [inputvalue,Setinputvalue] = useState('')
    const AllStory = userStory.map((item,index) => 
       (<div key={index} className="stories df">
            <div className="story">
                <img src={item.imageprofile} onClick={() => SelectId(item.id)} alt="" />
                <h4>{item.username}</h4>
            </div>
       </div>

        ))
    return(
        <div className="Home">
            <div className="home-left">
                <div className="df">
                    {AllStory}
                </div>
                <div className="ThePostSInHomePage">
                    <div className="header-home-post df aic jcsb">
                        <div className="who-post df aic">
                            <img src="posts/1.png" alt="" />
                            <h3>terryculas</h3>
                        </div>
                        <p>...</p>
                    </div>  
                    <img src="posts/1.png" alt="" className="home-post-image"/>
                    <div className="add-comment add-comment-home-post">
                        <div className="options">
                            <div className="left-options" >
                                <img src="icons/like.svg" alt="" className="p2"/>
                                <img src="icons/comments.svg" alt="" className="p2" />
                            </div>
                            <div className="right-options">
                                <img src="icons/save.svg" alt="" className="p2"/>
                            </div>
                        </div>
                        <h3 className="likeOfPoST">5 likes</h3>
                        <div className="about-home-post">
                            <h3 className="">terryculas</h3>
                            <p>Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti </p>
                        </div>
                        <p className="gray-p">View all 100 comments</p>
                        <p className="gray-p">1 HOUR AGO</p>
                    </div>
                    <div className="add-comment-to-input">
                            <div className="input-container">
                                <img src="icons/Emoji.svg" alt="" className="smileOfSelect" />
                                <input type="text" placeholder="Add a comment..." className="full-width" onChange={(e)=> Setinputvalue(e.target.value)} value={inputvalue}/>
                                {inputvalue.length >= 1 && <button className="Add-comment-to-post">Post</button>}
                                {inputvalue.length ==0 && <button className="Add-comment-to-post withoutcolor">Post</button>}
                            </div>
                        </div>
                </div>
            </div>
            <div className="home-right">
                <div className="suggest">
                    <div className="title-suggest df jcsb">
                        <h3>Suggestions For You</h3>
                        <h2>See All</h2>
                    </div>
                    <div className="followersOFUser df jcsb aic suggest-user">
                        <div className="df aic">
                            <img src="posts/6.png" alt="" className=""/>
                            <div className="about-follower  suggest-user-title">
                                <div className="NicknameOfFollower df aic ">
                                    <h2>Jenna </h2>
                                </div>
                                <h3 className="gray-p">Followed by christinasterling + 2 m...</h3>
                            </div>
                        </div>
                        <span className="blue">Follow</span>
                    </div>
                    <div className="followersOFUser df jcsb aic suggest-user">
                        <div className="df aic">
                            <img src="posts/4.png" alt="" className=""/>
                            <div className="about-follower suggest-user-title">
                                <div className="NicknameOfFollower df aic ">
                                    <h2>jack</h2>
                                </div>
                                <h3 className="gray-p">Followed by jack + 2 m...</h3>
                            </div>
                        </div>
                        <span className="blue">Follow</span>
                    </div>
                    <div className="followersOFUser df jcsb aic suggest-user">
                        <div className="df aic">
                            <img src="posts/5.png" alt="" className=""/>
                            <div className="about-follower  suggest-user-title">
                                <div className="NicknameOfFollower df aic ">
                                    <h2>Anna </h2>
                                </div>
                                <h3 className="gray-p">Followed by Anna + 2 m...</h3>
                            </div>
                        </div>
                        <span className="blue">Follow</span>
                    </div>
                </div>
            </div>
        </div>
    )
}