'use client'
export default function Card({item,SelectPost}){
    return(
        <div>
        <img src={item.image} alt="Not Found" onClick={() => SelectPost(item.id)} />
        {/* <p>{item.description}</p> */}
        </div>

    )
}