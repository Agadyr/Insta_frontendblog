'use client'
import Posts from "@/components/Posts";
import Footer from '@/components/footer';

export default function UserProfile(){
    let posts = [
        {
            imageprofile:"posts/userphoto.jpg",
            username:"Michael",
            stats:{
                posts:1258,
                followers:4,
                following:1250
            },
            bio:"Madi Kairambekov",
            userposts:{
                postimage1:"/posts/1.png",
                postimage2:"/posts/2.png",
                postimage3:"/posts/3.png",
                postimage4:"/posts/4.png",
                postimage5:"/posts/5.png",
                postimage6:"/posts/6.png",
                postimage7:"/posts/nurali.jpg",
                postimage8:"/posts/michael.jpg",
                postimage9:"/posts/daryn.jpg",
            }
        }
    ]
    return(
        <div>
            <Posts posts={posts}/>
            <Footer/>
        </div>

        
    )
}