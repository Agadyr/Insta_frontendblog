'use client'
import SelectPost from "@/components/SelectPost"
import { useState } from "react"
export default function Card({item,SelectPost}){
    const [step, SetStep] = useState(1)
    SelectPost(step)
    return(
        <img src={item.postimage} alt="Not Found" onClick={() => SetStep(item.id)} />
    )
}