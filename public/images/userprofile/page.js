import Posts from "@/components/Posts";
export default function UserProfile(){
    posts = [
        {
            imageprofile:"/image/profile.png",
            username:"Michael",
            stats:{
                posts:1258,
                followers:4,
                following:1250
            },
            userposts:""
        }
    ]
    return(
        <Posts/>
    )
}