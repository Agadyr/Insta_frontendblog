import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
export default function Following({closeModal,following,Stopfollowing}){
    const[filteredFollowing,SetfilteredFollowing] = useState([]) 
    const [inputvalue,Setinputvalue] = useState('')
    const[ForStopFollow,SetForStopFollow] = useState(null) //usestate For unfollow 
    const[removestep,Setremovestep] = useState(0)
    const onChange= (e)=>{
        Setinputvalue(e.target.value)
        if(e.target.value === ""){
            SetfilteredFollowing([])
        }else{
            SetfilteredFollowing([...following.filter(item => item.nick_name.includes(e.target.value))])
        }
    }
    
    return(
        <div className="main-window">
            {removestep == 1 &&
            <div className="remove-modal">
                    <div className="remove-follower-modal remove-following-modal">
                        <img src={ForStopFollow.url} alt="" />
                        <p style={{color:"black"}}> UnFollow @{ForStopFollow.nick_name}?</p>
                        <div className="RemoveOrCansel">
                            <div className="hr">
                            </div>
                            <button className="removebtn" onClick={() => {Stopfollowing(ForStopFollow),Setremovestep(0),Setinputvalue('')}}>Unfollow</button>
                            <div className="hr">
                            </div>
                            <button onClick={() => Setremovestep(0)}>Cansel</button>
                        </div>
                    </div>
            </div>}
            <div className="uploadphoto">
                    <div className="followers">
                        <h1>Following</h1>
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
                        {filteredFollowing.length >=1 && filteredFollowing.map((Follower) => (
                        <div className="followersOFUser df jcsb aic">
                            <div className="df aic">
                                <img src={Follower.url} alt="" className=""/>
                                <div className="about-follower ">
                                    <div className="NicknameOfFollower df aic">
                                        <h2>{Follower.nick_name} </h2>
                                    </div>
                                    <h3>{Follower.bio}</h3>
                                </div>
                            </div>
                            <button className="remove-follower" onClick={() => {SetForStopFollow(Follower),Setremovestep(1)}}>Following</button>
                        </div>))}
                        {(filteredFollowing.length == 0 && inputvalue.length >= 1) &&
                        <div className="followersOFUser df jcsb aic">
                            <h4 className="result-of-search">No results found</h4>
                        </div>}
                        {inputvalue.length == 0 && following.map(Follower => (
                        <div className="followersOFUser df jcsb aic">
                            <div className="df aic">
                                <img src={Follower.url} alt="" className=""/>
                                <div className="about-follower ">
                                    <div className="NicknameOfFollower df aic">
                                        <h2>{Follower.nick_name}</h2>
                                    </div>
                                    <h3>{Follower.bio}</h3>
                                </div>
                            </div>
                            <button className="remove-follower" onClick={() => {SetForStopFollow(Follower),Setremovestep(1)}}>Following</button>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
}