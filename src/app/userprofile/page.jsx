'use client'
import ModalWindow from "@/components/modalwindow"
import SelectPostById from "@/components/SelectPostById";
import Posts from "@/components/Posts";
import Footer from '@/components/footer';
import User from "@/components/AboutUser";
import Users from "@/components/users";
import Header from "@/components/header";
import EditUserSettings from "@/components/EditUserSettings";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts, getPostByid } from "../store/slices/postSlice";
import { CreatePost } from "../store/slices/postSlice";
export default function UserProfile(){

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)
    const didMount = () =>{
        dispatch(getMyPosts())
    }
    
    useEffect(didMount,[])

    const onSelect = (image,description) => {
        const Form = new FormData();
        Form.append('image', image);
        Form.append('description', description);
        dispatch(CreatePost(Form))
        
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

    const [AllFollowers,SetAllFollowers] = useState(followers)
    const [AllFollowing,SetAllFollowing] = useState(following)
    const [StepOfModalWindow,SetStepOfModalWindow] = useState(1)

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
   
    const closeModal = () => {
        SetStepOfModalWindow(1)
    };
    
    const onSelectPost = (data) => {
        if(data){
            dispatch(getPostByid(data.id))
        }

    }
    const post = useSelector((state) => state.post.post)
    useEffect(onSelectPost,[])
    return(
        <div className="">
            <Header Setmodalwindows={SetStepOfModalWindow}/>
            {StepOfModalWindow == 3 &&  
                <ModalWindow closeModal={closeModal} onSelect={onSelect}/>}
            {post.id > 1 && 
                <SelectPostById post={post}  closeModal={closeModal} />}
            {(StepOfModalWindow == 5 || StepOfModalWindow == 4) && 
                <Users closeModal={closeModal} followers={AllFollowers} following={AllFollowing} Removefollower={Removefollower} Setmodalwindows={StepOfModalWindow} Stopfollowing={Stopfollowing} />}
            {StepOfModalWindow == 6 && <EditUserSettings closeModal={closeModal} following={AllFollowing} Stopfollowing={Stopfollowing}/>}
           <User   Setmodalwindows={SetStepOfModalWindow}/>
            <Posts posts={posts} onSelectPost={onSelectPost}/>
            <Footer/>
        </div>

        
    )
}