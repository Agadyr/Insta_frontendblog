'use client'
export default function Card({item,SelectPost}){
    return(
        <img src={item.postimage} alt="Not Found" onClick={() => SelectPost(item.id)} />
    )
}