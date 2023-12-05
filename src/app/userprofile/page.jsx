'use client'
import ModalWindow from "@/components/modalwindow"
import SelectPostById from "@/components/SelectPostById";
import Posts from "@/components/Posts";
import Footer from '@/components/footer';
import User from "@/components/user";
import Users from "@/components/users";
import { useState } from "react";
export default function UserProfile(){
    let following = [
        {
            url:"posts/6.png",
            nick_name:"Michael",
            bio:"Study in Decode",
        },
        {
            url:"posts/5.png",
            nick_name:"Erasyl",
            bio:"Study in Decode",
        },
        {
            url:"posts/1.png",
            nick_name:"Nuralu",
            bio:"Study in JustCode",
        },
        {
            url:"posts/daryn.jpg",
            nick_name:"Tima",
            bio:"SPORT",
        },
        {
            url:"posts/4.png",
            nick_name:"Abylll",
            bio:"FOOTBALLLLL;LL",
        }
        ,
        {
            url:"posts/michael.jpg",
            nick_name:"Madi",
            bio:"programmer",
        }
        ,
        {
            url:"posts/daryn.jpg",
            nick_name:"Daniyar",
            bio:"Don't Study",
        }
    ]
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
        postimage:"/posts/5.png"
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
                following:following.length
            },
            bio:"Madi Kairambekov",
        }
    ]
    const [AllComments,SetAllComments] = useState([])
    const [AllFollowers,SetAllFollowers] = useState(followers)
    const [AllFollowing,SetAllFollowing] = useState(following)
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
    const Stopfollowing = (following) =>{
        let Rm = [...AllFollowing]
        let index = AllFollowing.indexOf(following)
        Rm.splice(index,1)
        SetAllFollowing(Rm)
    }
    const[imageID,SetimageID] = useState()
    const[StepOfModalWindow,SetStepOfModalWindow] = useState(1)
    const closeModal = () => {
        SetimageID(0)
        SetStepOfModalWindow(1)
    };
    return(
        <div>
            {StepOfModalWindow == 3 &&  
                <ModalWindow closeModal={closeModal} />}
            {imageID >= 1 && 
                <SelectPostById posts={posts} imageID={imageID} closeModal={closeModal} addCommentsToPost={addCommentsToPost} AllComments={AllComments} Removecomment={Removecomment}/>}
            {(StepOfModalWindow == 5 || StepOfModalWindow == 4) && 
                <Users closeModal={closeModal} followers={AllFollowers} following={AllFollowing} Removefollower={Removefollower} Setmodalwindows={StepOfModalWindow} Stopfollowing={Stopfollowing} />}
            
            
            <User  user={user} Setmodalwindows={SetStepOfModalWindow} />
            <Posts posts={posts} SelectPosts={SetimageID}/>
            <Footer/>
        </div>

        
    )
}