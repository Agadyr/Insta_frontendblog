'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"
import { faComment } from "@fortawesome/free-regular-svg-icons"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { formatDistanceToNow } from 'date-fns';
import EditPost from "./editpost"
import { ToEmptyPost } from "@/app/store/slices/postSlice"
import { END_POINT } from "@/app/config/EndPoint"
import { deletePost } from "@/app/store/slices/postSlice"
import { CreateComment, deleteComment, getMyComments } from "@/app/store/slices/commentSlice"
import { addLikeToPost, getLikesOfPost, removeLike,addLikeToComment,removeCommentLikeBack } from "@/app/store/slices/LikeSlice"
export default function SelectPost({post}){
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.comment.comments)
    const likes = useSelector((state) => state.like.likes)
    const currentUser = useSelector((state) => state.auth.currentUser)

    let [removeLikeid,SetremoveLikeid] = useState([])
    const [inputvalue,Setinputvalue] = useState('')
    const [ModalSettings,SetModalSettings] = useState(0)
    const [selectCommentForDelete,SetselectCommentForDelete] = useState()


    const didMount = () =>{
        dispatch(getLikesOfPost(post.id))
        dispatch(getMyComments(post.id))
    
    }
    
    useEffect(didMount,[])



    const save = () =>{
        dispatch(CreateComment({
            description:inputvalue,
            postId:post.id
        }))
        Setinputvalue('')
    }

    useEffect(() => {
        removeLikeid = likes.filter(item => item.userId === currentUser.id )
        if(removeLikeid.length){
            SetremoveLikeid(removeLikeid)
        }
    },[likes])

    const remove = () =>{
        removeLikeid = likes.filter(item => item.userId === currentUser.id )
        if(removeLikeid.length){
            dispatch(removeLike(removeLikeid[0].id,post.id))
            SetremoveLikeid([])
        }
    }


    const removeCommentLike = (id) => {
        dispatch(removeCommentLikeBack(id,post.id))
    }



    return(
           <div className="main-window" >
            <FontAwesomeIcon icon={faClose} className="close" onClick={() => dispatch(ToEmptyPost())}/>
            {ModalSettings == 3 && <EditPost SetModalSettings={SetModalSettings} post={post}/>}

            {ModalSettings == 4 && <div className="remove-modal">
                <div className="rm-buttons">
                    <button className="removes black">Do you want to delete this post?</button>
                    <button className="removes"  onClick={() => 
                       {
                        dispatch(deletePost(post.id))
                        
                    }
                        }>Delete</button>
                    <button className="removes" onClick={() => SetModalSettings(0)}>Cansel</button>
                </div>
            </div>}

            {ModalSettings == 2 && 
            <div className="remove-modal">
                <div className="rm-buttons">
                    <button className="removes"  onClick={() => SetModalSettings(3)}>Edit</button>
                    <button className="removes"  onClick={() => {SetModalSettings(4)}}>Delete</button>
                    <button className="removes" onClick={() => SetModalSettings(0)}>Cansel</button>
                </div>
            </div>}
            
            {ModalSettings == 5 && 
            <div className="remove-modal">
                <div className="rm-buttons">
                    <button className="removes">Report</button>
                    <button className="removes"  onClick={() => {
                        dispatch(deleteComment(selectCommentForDelete,post.id))
                        SetModalSettings(0)
                        }}>Delete Comment</button>
                    <button className="removes" onClick={() => SetModalSettings(0)}>Cansel</button>
                </div>
            </div>}
                <div className="Modal-select-window">
                    <div className="left-modal-window">
                    <img src={`${END_POINT}${post.image}`} alt="" />
                    </div>
                    <div className="right-modal-window">
                        <div className="header-right-modal">
                            <img src="images/panda.jpg" alt="" id="imageprofile"/>
                            <div className="User-name-in-header">
                                <h3>{currentUser.full_name}</h3>
                                <h3>Original Audio</h3>
                            </div>
                            <button className="More" onClick={() => SetModalSettings(2)}><img src="/icons/More.png" alt="" /></button>
                        </div>
                        <div className="hr">
                        </div>
                        <section className="main-section">
                            <div className="UserThatPosted">
                            <img src="images/panda.jpg" alt="" id="imageprofile"/>
                                <div className="User-name-in-header">
                                    <h3>{currentUser.full_name}</h3>
                                    <p>{post.description}</p>
                                </div>
                            </div>

                            {comments.length <= 0 && <div className="nocomments">
                                <h1>No comments yet.</h1>
                                <p>Start the conversation.</p>
                            </div>}


                            {comments.length > 0 && comments.map((item, index) => {
                            const timeAgo = formatDistanceToNow(new Date(item.updatedAt), { addSuffix: true })

                            const ShowCommentLikeUser = item.Likes.filter(likes => likes.userId === currentUser.id)

                            return(
                                <div className="CommentOfUser" key={index}>
                                    <img src="posts/4.png" id="imageprofile" alt="" />
                                    <div className="comments">
                                        <div className="df  comment">
                                            <h3 >{item.User.full_name}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="df aic settings-comment">
                                            <p className="time-ago">{timeAgo}</p>
                                            <p className="time-ago"> {item.Likes.length} like </p>
                                            <h4>Reply</h4>
                                            <button className="More" onClick={() => {SetModalSettings(5);SetselectCommentForDelete(item.id)}} ><img src="/icons/More.png" alt="" /></button>
                                        </div>
                                        <div>
                                        </div>                                        
                                    </div>
                                    <div className="select-comment">
                                        {ShowCommentLikeUser.length === 0 && <FontAwesomeIcon icon={faHeart} className="iconselect" onClick={() => dispatch(addLikeToComment(item.id,post.id))}/>}
                                        {ShowCommentLikeUser.length >= 1 && <FontAwesomeIcon icon={faHeart} className="iconselect heart" onClick={() => removeCommentLike(item.Likes[0].id)}/>}
                                    </div>
                                </div>)
                            })}
                        </section>
                        <div className="hr">
                        </div>
                        <div className="add-comment">
                            <div className="options">
                                <div className="left-options">
                                {removeLikeid.length === 0 && <FontAwesomeIcon icon={faHeart} className="iconselect" onClick={() => dispatch(addLikeToPost(post.id))}/>}
                                {removeLikeid.length >= 1 && <FontAwesomeIcon icon={faHeart} className="iconselect heart" onClick={() => remove()}/>}
                                <FontAwesomeIcon icon={faComment} className="iconselect"/>
                                <FontAwesomeIcon icon={faPaperPlane} className="iconselect"/>
                                </div>
                                <div className="right-options">
                                    <FontAwesomeIcon icon={faBookmark} className="iconselect iconbook"/>
                                </div>
                            </div>
                            {removeLikeid.length >= 1 && <h3 className="likeOfPoST">Liked by {currentUser.full_name} and {likes.length - 1} others</h3>}
                            {removeLikeid.length ==0 && <h3 className="likeOfPoST">Be the first to <span  onClick={() => dispatch(addLikeToPost(post.id))} >like this</span> </h3>}
                            <h3 className="gray-data">April 22</h3>
                        </div>
                        <div className="add-comment-to-input">
                            <div className="input-container">
                                <FontAwesomeIcon icon={faFaceSmile} className="smileOfSelect" />
                                <input type="text" placeholder="Add a comment..." className="full-width" onChange={(e)=> Setinputvalue(e.target.value)} value={inputvalue}/>
                                {inputvalue.length >= 1 && <button className="Add-comment-to-post" onClick={() => save()}>Post</button>}
                                {inputvalue.length == 0 && <button className="Add-comment-to-post withoutcolor">Post</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

)}