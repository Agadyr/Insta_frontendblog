'use client'
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faC, faClose } from "@fortawesome/free-solid-svg-icons"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { faCircleStop } from "@fortawesome/free-regular-svg-icons"
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons"
export default function ShowStoryOfUser({closeModal,userStory,StoryId}){
    const [play,SetPlay] = useState(0)
    const [sound,SetSound] = useState(0)
    const ShowStory = userStory.map(item => item)
    return(
        <div className="main-window z-i Show-story-bg">
            <img src="images/1414.png" alt="" className="white-logo"/>
            <FontAwesomeIcon icon={faClose} className="close-white" onClick={closeModal}/>
            <div className="Modal-select-window show-Story">
                 <img src={ShowStory[StoryId-1].story} alt="" className="story-content"/>
                <div className="header-show-story df">
                    <div className="header-left-show-story df aic">
                        <img src={ShowStory[StoryId-1].imageprofile} alt="" className="stories-img"/>
                          <h3>{ShowStory[StoryId-1].username}</h3>
                    </div>
                    <div className="header-right-show-story">
                        {sound == 0 && <FontAwesomeIcon icon={faPlay} className="mr2" onClick={() => SetSound(1)}/>}
                        {sound == 1 && <FontAwesomeIcon icon={faCircleStop} className="mr2" onClick={() => SetSound(0)}/>}
                        {play == 0 && <FontAwesomeIcon icon={faVolumeHigh} className="mr2" onClick={() => SetPlay(1)}/>}
                        {play == 1 && <FontAwesomeIcon icon={faVolumeXmark} className="mr2" onClick={() => SetPlay(0)}/>}
                        <FontAwesomeIcon icon={faEllipsis} className="mr2 fz20"/>
                    </div>
                </div>
                <div className="SendMessage">
                    <input type="text" placeholder={"Reply to " + ShowStory[StoryId-1].username} />
                    <FontAwesomeIcon icon={faHeart} className="iconselect iconselectstory"/>
                    <FontAwesomeIcon icon={faPaperPlane} className="iconselect iconselectstory"/>
                </div>
            </div>
        </div>
    )
}