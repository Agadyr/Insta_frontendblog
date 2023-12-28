'use client'
import { useState } from "react"
import Home from "@/components/Home"
import ModalWindow from "@/components/modalwindow"
import Header from "@/components/header"
import ShowStoryOfUser from "@/components/ShowStoryOfUser"
export default function HomePage(){
    const[StepOfModalWindow,SetStepOfModalWindow] = useState(1)
    const[StoryId,SetStoryId] = useState(null)
    const closeModal = () => {
        SetStepOfModalWindow(1)
    };
    let userStory = [
        {
            id:1,
            imageprofile:"posts/6.png",
            username:"Michael",
            story:"posts/6.png"
        },
        {
            id:2,
            imageprofile:"posts/Daryn.jpg",
            username:"Daryn",
            story:"posts/Daryn.jpg"
        },
        {
            id:3,
            imageprofile:"posts/nurali.jpg",
            username:"Nurali",
            story:"posts/nurali.jpg"
        },
        {
            id:4,
            imageprofile:"posts/4.png",
            username:"Erasyl",
            story:"posts/4.png"
        },
    ]
    const SelectId = (id) =>{
        SetStoryId(id)
        SetStepOfModalWindow(4)
    }
    return(
        <div className="container">
            {/* {StepOfModalWindow == 4 && <ShowStoryOfUser closeModal={closeModal} userStory={userStory} StoryId={StoryId}/>} */}
            {StepOfModalWindow == 3 && <ModalWindow closeModal={closeModal} />}
            <Header Setmodalwindows={SetStepOfModalWindow}/>
            <Home userStory={userStory} SelectId={SelectId}/>
        </div>
    )
}