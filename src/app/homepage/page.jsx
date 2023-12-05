'use client'
import { useState } from "react"
import Home from "@/components/Home"
import ModalWindow from "@/components/modalwindow"
import Header from "@/components/header"
export default function HomePage(){
    const[StepOfModalWindow,SetStepOfModalWindow] = useState(1)
    const closeModal = () => {
        SetStepOfModalWindow(1)
    };
    let user  = [
        {
            imageprofile:"posts/1.png",
            username:"Michael",
            bio:"Madi Kairambekov",
        }
    ]
    return(
        <div className="container">
            {StepOfModalWindow == 3 && <ModalWindow closeModal={closeModal} />}
            <Header user={user} Setmodalwindows={SetStepOfModalWindow}/>
            <Home/>
        </div>
    )
}