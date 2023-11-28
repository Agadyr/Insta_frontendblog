import Post from "./Post"
export default function Posts({posts,SelectPost}){
    function SelectPosts(){
        SelectPost()
    }
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