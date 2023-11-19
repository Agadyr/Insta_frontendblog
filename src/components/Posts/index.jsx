import Post from "./Post"
export default function Posts({posts}){
    const showposts = posts.map((item) =>(<Post item={item}/>))
    return(
        <div>
            {showposts}
        </div>
    )
}