'use client'
import Post from "./Post"
export default function Posts({posts,onSelectPost}){
    const showposts = posts.map((item,index )=>(<Post item={item} SelectPost={onSelectPost} key={index}/>))
    return(
        <div className="container post-container">
            <div className="posts-images">
                    {showposts}
            </div>
        </div>

    )
}