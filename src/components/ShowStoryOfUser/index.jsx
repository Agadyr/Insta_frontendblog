'use client'
import { useEffect, useState,useRef  } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faC, faClose } from "@fortawesome/free-solid-svg-icons"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { faCircleStop } from "@fortawesome/free-regular-svg-icons"
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
import { END_POINT } from "@/app/config/EndPoint"
import { useSelector,useDispatch } from "react-redux"
import { deleteStory } from "@/app/store/slices/StorySlice"
import { addLikeToStory, getLikesOfStory, removeStoryLike } from "@/app/store/slices/LikeSlice"
export default function ShowStoryOfUser({SelectStory,SetSelectStory}){
    const [play,SetPlay] = useState(0)
    const [sound,SetSound] = useState(0)
    const [IsVideo,SetIsVideo] = useState(0)
    const [modalSettings,SetModalSettings] = useState(0)
    let [isLike,SetIslike]  = useState([])
    const storylikes = useSelector(state => state.like.storylikes)

    const current_user = useSelector(state => state.auth.currentUser)
    const dispatch = useDispatch()
    const ref = useRef()


    const didmount = () =>{
        dispatch(getLikesOfStory(SelectStory.id))
    }
    useEffect(didmount,[])


    useEffect(() => {
        isLike = storylikes.filter(item => item.userId === current_user.id)
        if(isLike.length){
            SetIslike(isLike)
        }
    },[storylikes])

    const remove = () => {
        isLike = storylikes.filter(item => item.userId === current_user.id )

        if(isLike.length){
            dispatch(removeStoryLike(isLike[0].id,SelectStory.id))
            SetIslike([])
            
        }
    }


    useEffect(() => {
        let fileExtension = SelectStory.video.split('.').pop();

        if (fileExtension.toLowerCase() === 'mp4') {
            SetIsVideo(1)
        } else {
            SetIsVideo(0)
        }
    },[])


    const handleTogglePlay = () => {
        if (ref.current.paused) {
            ref.current.play();
        } else {
            ref.current.pause();
        }

        SetSound(!sound);
    }

    
    return(
        <div className="story-modal-window">
            {modalSettings == 1 && 
            <div className="remove-modal" style={{zIndex:999}}>
                <div className="rm-buttons">
                    <button className="removes">Report</button>
                    <button className="removes"  onClick={() => {
                        dispatch(deleteStory(SelectStory))
                        SetSelectStory({})
                        }}>Delete Story</button>
                    <button className="removes" onClick={() => SetModalSettings(0)}>Cansel</button>
                </div>
            </div>}
            <div className="main-window z-i Show-story-bg">
                <img src="images/1414.png" alt="" className="white-logo"/>
                <FontAwesomeIcon icon={faClose} className="close-white" onClick={() => SetSelectStory({})}/>
                <div className="Modal-select-window show-Story">

                    {IsVideo == 0 &&<img src={`${END_POINT}${SelectStory.video}`} alt="" className="story-content"/>}
                    {IsVideo == 1 && <video ref={ref} src={`${END_POINT}${SelectStory.video}`} className="story-content"> </video>}

                    <div className="header-show-story df">
                        <div className="header-left-show-story df aic">
                            <img src='images/panda.jpg' alt="" className="stories-img"/>
                            <h3>{current_user.username}</h3>
                        </div>
                        <div className="header-right-show-story">
                            {sound == 0 && IsVideo == 1 && <FontAwesomeIcon icon={faPlay} className="mr2" onClick={() => {SetSound(1);handleTogglePlay()}} />}
                            {sound == 1 && IsVideo == 1 && <FontAwesomeIcon icon={faCircleStop} className="mr2" onClick={() => {SetSound(0);handleTogglePlay()} } />}

                            {sound == 0 && IsVideo == 0 && <FontAwesomeIcon icon={faPlay} className="mr2" onClick={() => SetSound(1)} />}
                            {sound == 1 && IsVideo == 0 && <FontAwesomeIcon icon={faCircleStop} className="mr2" onClick={() => SetSound(0)}/>}

                            {play == 0 && <FontAwesomeIcon icon={faVolumeHigh} className="mr2" onClick={() => SetPlay(1)}/>}
                            {play == 1 && <FontAwesomeIcon icon={faVolumeXmark} className="mr2" onClick={() => SetPlay(0)}/>}
                            <FontAwesomeIcon icon={faEllipsis} className="mr2 fz20" onClick={() => SetModalSettings(1)}/>
                        </div>
                    </div>
                    <div className="SendMessage">
                        <input type="text" placeholder={"Reply to " + current_user.username} />
                        {isLike.length === 0  && <FontAwesomeIcon icon={faHeart} className="iconselect iconselectstory" onClick={() => dispatch(addLikeToStory(SelectStory.id))}/>}
                        {isLike.length >= 1 &&  <img onClick={() => remove()} className="iconselect iconselectstory heartpng" src="icons/heartfrom.png" alt=""/>}
                        
                        <FontAwesomeIcon icon={faPaperPlane} className="iconselect iconselectstory"/>
                    </div>
                </div>
            </div>
        </div>
    )
}