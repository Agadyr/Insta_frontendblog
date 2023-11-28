'use client'
import ModalWindow from "@/components/modalwindow"
import Posts from "@/components/Posts";
import Footer from '@/components/footer';
import User from "@/components/user";
export default function UserProfile(){
    let user  = [
        {
            imageprofile:"posts/1.png",
            username:"Michael",
            stats:{
                posts:1258,
                followers:4,
                following:1250
            },
            bio:"Madi Kairambekov",
        }
    ]
    let posts = [

            { 
            id:1,
            postimage:"/posts/1.png"
            },
            {
            id:3,
            postimage:"/posts/2.png"
            },
            {
            id:3,                
            postimage:"/posts/3.png"
            },       
            {
            id:4,    
            postimage:"/posts/4.png"
            },
            {
            id:5,    
            postimage:"/posts/5.png"
            },
            {
            id:6,    
            postimage:"/posts/6.png"
            },
            {
            id:7,    
            postimage:"/posts/nurali.jpg"
            },
            {
            id:8,    
            postimage:"/posts/michael.jpg"
            },
            {
            id:9,    
            postimage:"/posts/daryn.jpg"
            }
    ]
    function SelectPost(){
        const id = 1;
    }
    return(
        <div>
            <User user={user} posts={posts}/>
            <Posts posts={posts} SelectPost={SelectPost}/>
            <Footer/>
        </div>

        
    )
}