'use client'
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
export default function Followers({closeModal,followers,Removefollower}){
    const[filteredFollowers,SetfilteredFollowers] = useState([]) 
    const[inputvalue,Setinputvalue] = useState('') //usestate for get inputvalue in search
    const[removestep,Setremovestep] = useState(0) //usestate For check open or close remove modal
    const[follower,Setfollower] = useState(null) //usestater For delete follower
    const onChange= (e)=>{
        Setinputvalue(e.target.value)
        if(e.target.value === ""){
            SetfilteredFollowers([])
        }else{
            SetfilteredFollowers([...followers.filter(item => item.nick_name.includes(e.target.value))])
        }
    }
    return(
        <div className="main-window">
            {removestep == 1 &&
            <div className="remove-modal">
                    <div className="remove-follower-modal">
                        <img src={follower.url} alt="" />
                        <h1>Remove Follower?</h1>
                        <p>Instagram won't tell {follower.nick_name} they were removed from your followers.</p>
                        <div className="RemoveOrCansel">
                            <div className="hr">
                            </div>
                            <button className="removebtn" onClick={() => {Setremovestep(0),Removefollower(follower)}}>Remove</button>
                            <div className="hr">
                            </div>
                            <button onClick={() => Setremovestep(0)}>Cansel</button>
                        </div>
                    </div>
            </div>}
            <div className="uploadphoto">
                 <div className="followers">
                    <h1>Followers</h1>
                    <FontAwesomeIcon icon={faClose} onClick={()=>closeModal(1)} className="close-followers-modal" />
                    <div className="hr">
                    </div>
                    <div className="header-input follower-input">
                        <input type="text" placeholder="Search" onChange={onChange} value={inputvalue} />
                        <div className="search-icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="header-search" />
                        </div>
                    </div>
                    <div className="overflow">
                    {filteredFollowers.length >=1 && filteredFollowers.map((Follower) => (
                    <div className="followersOFUser df jcsb aic">
                        <div className="df aic">
                            <img src={Follower.url} alt="" className=""/>
                            <div className="about-follower ">
                                <div className="NicknameOfFollower df aic">
                                    <h2>{Follower.nick_name} ·</h2>
                                    <span>Follow</span>
                                </div>
                                <h3>{Follower.bio}</h3>
                            </div>
                        </div>
                        <button className="remove-follower" onClick={() => {Setfollower(Follower),Setremovestep(1),console.log(Follower);}}>Remove</button>
                    </div>))}
                    {(filteredFollowers.length == 0 && inputvalue.length >= 1) &&
                    <div className="followersOFUser df jcsb aic">
                        <h4 className="result-of-search">No results found</h4>
                    </div>}
                    {inputvalue.length == 0 && followers.map(Follower => (
                    <div className="followersOFUser df jcsb aic">
                        <div className="df aic">
                            <img src={Follower.url} alt="" className=""/>
                            <div className="about-follower ">
                                <div className="NicknameOfFollower df aic">
                                    <h2>{Follower.nick_name} ·</h2>
                                    <span>Follow</span>
                                </div>
                                <h3>{Follower.bio}</h3>
                            </div>
                        </div>
                        <button className="remove-follower" onClick={() => {Setfollower(Follower),Setremovestep(1)}}>Remove</button>
                    </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
}