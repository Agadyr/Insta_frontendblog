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
import { useSelector } from "react-redux"
export default function ShowStoryOfUser({SelectStory,SetSelectStory}){
    const [play,SetPlay] = useState(0)
    const [sound,SetSound] = useState(0)
    const [IsVideo,SetIsVideo] = useState(0)
    const current_user = useSelector(state => state.auth.currentUser)
    const ref = useRef()
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
                        <FontAwesomeIcon icon={faEllipsis} className="mr2 fz20"/>
                    </div>
                </div>
                <div className="SendMessage">
                    <input type="text" placeholder={"Reply to " + current_user.username} />
                    <FontAwesomeIcon icon={faHeart} className="iconselect iconselectstory"/>
                    <FontAwesomeIcon icon={faPaperPlane} className="iconselect iconselectstory"/>
                </div>
            </div>
        </div>
    )
}