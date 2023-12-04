'use client'
import ModalWindow from "@/components/modalwindow"
import SelectPostById from "@/components/SelectPostById";
import Posts from "@/components/Posts";
import Footer from '@/components/footer';
import User from "@/components/user";
import Users from "@/components/users";
import { useState } from "react";
export default function UserProfile(){
    let followers = [
        {
            url:"posts/1.png",
            nick_name:"Michael",
            bio:"Study in Decode",
        },
        {
            url:"posts/2.png",
            nick_name:"Erasyl",
            bio:"Study in Decode",
        },
        {
            url:"posts/3.png",
            nick_name:"Nuralu",
            bio:"Study in JustCode",
        },
        {
            url:"posts/4.png",
            nick_name:"Daniyar",
            bio:"Don't Study",
        },
        {
            url:"posts/4.png",
            nick_name:"Daniyar",
            bio:"Don't Study",
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
    let user  = [
        {
            imageprofile:"posts/1.png",
            username:"Michael",
            stats:{
                posts:posts.length,
                followers:followers.length,
                following:1250
            },
            bio:"Madi Kairambekov",
        }
    ]
    const [AllComments,SetAllComments] = useState([])
    const [AllFollowers,SetAllFollowers] = useState(followers)
    const addCommentsToPost = (item) =>{
        SetAllComments([...AllComments,item])
    }
    const Removecomment = (comment) =>{
        let Rm = [...AllComments]
        let index = AllComments.indexOf(comment)
        Rm.splice(index,1)
        SetAllComments(Rm)
    }
    const Removefollower = (follower) =>{
        let Rm = [...AllFollowers]
        let index = AllFollowers.indexOf(follower)
        Rm.splice(index,1)
        SetAllFollowers(Rm)
    }
    const[imageID,SetimageID] = useState()
    const[StepOfModalWindow,SetStepOfModalWindow] = useState(1)
    function SelectAllPostsByID(id){
        SetimageID(id);
    }
    const closeModal = () => {
        SetimageID(0)
        SetStepOfModalWindow(1)
    };
    return(
        <div>
            {StepOfModalWindow == 2 && <ModalWindow closeModal={closeModal} />}
            {imageID >= 1 && <SelectPostById posts={posts} imageID={imageID} closeModal={closeModal} addCommentsToPost={addCommentsToPost} AllComments={AllComments} Removecomment={Removecomment}/>}
            {StepOfModalWindow == 3 && <Users closeModal={closeModal} followers={AllFollowers} Removefollower={Removefollower}/>}
            <User  user={user} Setuploadphoto={SetStepOfModalWindow} />
            <Posts posts={posts} SelectPosts={SelectAllPostsByID}/>
            <Footer/>
        </div>

        
    )
}