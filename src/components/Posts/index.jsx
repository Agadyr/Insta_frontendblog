'use client'
import Post from "./Post"
import { useState } from "react";
export default function Posts({posts,SelectPosts}){
    function SelectPost(id){
        SelectPosts(id);
    }
    const showposts = posts.map(item =>(<Post item={item} SelectPost={SelectPost}/>))
    return(
        <div className="container">
            <div className="posts">
                <div className="posts-images">
                        {showposts}
                </div>
            </div>
        </div>

    )
}