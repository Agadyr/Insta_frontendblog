'use client'
import { END_POINT } from "@/app/config/EndPoint"
export default function Card({item,SelectPost}){
    return(
        <div className="post">
        <img src={`${END_POINT}${item.image}`} alt="Not Found" onClick={() => SelectPost(item)} />
        </div>

    )
}