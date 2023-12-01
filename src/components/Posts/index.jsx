'use client'
import Post from "./Post"
import { useState } from "react";
export default function Posts({posts,SelectPosts}){
    const showposts = posts.map(item =>(<Post item={item} SelectPost={SelectPosts}/>))
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