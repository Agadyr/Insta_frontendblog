'use client'
import Followers from "./followers"
import Following from "./following"
import { useState } from "react"
export default function Users({closeModal,followers,Removefollower,Setmodalwindows,following,Stopfollowing}){

    return(
        <div>
            {Setmodalwindows == 4 && <Followers closeModal={closeModal} followers={followers} Removefollower={Removefollower}/>}
            {Setmodalwindows == 5 && <Following closeModal={closeModal} following={following} Stopfollowing={Stopfollowing}/>}
        </div>

    )
}