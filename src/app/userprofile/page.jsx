'use client'
import ModalWindow from "@/components/modalwindow"
import SelectPostById from "@/components/SelectPostById";
import Posts from "@/components/Posts";
import Footer from '@/components/footer';
import User from "@/components/user";
import { useState } from "react";
export default function UserProfile(){
    const [AllComments,SetAllComments] = useState([])
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
            id:2,
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
    const addCommentsToPost = (item) =>{
        SetAllComments([...AllComments,item])
    }
    const Removecomment = (comment) =>{
        let Rm = [...AllComments]
        let index = AllComments.indexOf(comment)
        Rm.splice(index,1)
        SetAllComments(Rm)
    }
    const[step,Setstep] = useState()
    const[uploadphoto,Setuploadphoto] = useState(3)
    function SelectPost(id){
        Setstep(id);
    }
    const closeModal = () => {
        Setstep(0)
        Setuploadphoto(1)
    };
    return(
        <div>
            {uploadphoto == 2 && <ModalWindow closeModal={closeModal} />}
            {step >= 1 && <SelectPostById posts={posts} step={step} closeModal={closeModal} addCommentsToPost={addCommentsToPost} AllComments={AllComments} Removecomment={Removecomment}/>}
            <User Poststep={step} user={user} posts={posts} Setuploadphoto={Setuploadphoto}/>
            <Posts posts={posts} SelectPosts={SelectPost}/>
            <Footer/>
        </div>

        
    )
}