'use client'
import ModalWindow from "@/components/modalwindow"
import SelectPostById from "@/components/SelectPostById";
import Posts from "@/components/Posts";
import Footer from '@/components/footer';
import User from "@/components/user";
import Users from "@/components/users";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts } from "../store/slices/postSlice";
import { CreatePost } from "../store/slices/postSlice";
export default function UserProfile(){

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)
    const didMount = () =>{
        dispatch(getMyPosts())
    }
    useEffect(didMount,[])
    console.log(posts);
    const onSelect = (image,description) => {
        dispatch(CreatePost({image,description}))
    }

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
        ,
        {
            url:"posts/4.png",
            nick_name:"Daniyar",
            bio:"Don't Study",
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
                <ModalWindow closeModal={closeModal} onSelect={onSelect}/>}
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