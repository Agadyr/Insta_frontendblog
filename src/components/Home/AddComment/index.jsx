'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faShare } from "@fortawesome/free-solid-svg-icons"
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"
import { faComment } from "@fortawesome/free-regular-svg-icons"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { formatDistanceToNow } from 'date-fns';
import { END_POINT } from "@/app/config/EndPoint"
import { CreateComment, getMyComments } from "@/app/store/slices/commentSlice"
import { deleteComment } from "@/app/store/slices/commentSlice"
export default function AddComment({selectPostId,SetselectPostId}){
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.auth.currentUser)
    const [inputvalue,Setinputvalue] = useState('')
    const [ModalSettings,SetModalSettings] = useState(0)
    const [selectCommentForDelete,SetselectCommentForDelete] = useState()
    const [full_name,Setfull_name] = useState('')
    const comments = useSelector((state) => state.comment.comments)
    
    const didMount = () =>{
        dispatch(getMyComments(selectPostId.id))
    }
    useEffect(didMount,[])

    const save = () =>{
        dispatch(CreateComment({
            description:inputvalue,
            postId:selectPostId.id
        }))
        Setinputvalue('')
    }
    
    return(
           <div className="main-window" >
            {ModalSettings == 1 && 
            <div className="remove-modal">
                <div className="rm-buttons">
                    <button className="removes">Report</button>
                    {selectCommentForDelete.User.full_name == currentUser.full_name && <button className="removes"  onClick={() => {
                        dispatch(deleteComment(selectCommentForDelete.id,selectPostId.id))
                        SetModalSettings(0)
                        }}>Delete Comment</button>}
                    <button className="removes" onClick={() => SetModalSettings(0)}>Cansel</button>
                </div>
            </div>}
            <FontAwesomeIcon icon={faClose} className="close" onClick={() => SetselectPostId({})}/>
            
                <div className="Modal-select-window">
                    <div className="left-modal-window">
                    <img src={`${END_POINT}${selectPostId.image}`} alt="" />
                    </div>
                    <div className="right-modal-window">
                        <div className="header-right-modal">
                            <img src="images/panda.jpg" alt="" id="imageprofile"/>
                            <div className="User-name-in-header">
                                <h3>{selectPostId.User.full_name}</h3>
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
                                    <h3>{selectPostId.User.full_name}</h3>
                                    <p>{selectPostId.description}</p>
                                </div>
                            </div>

                            {comments.length <= 0 && <div className="nocomments">
                                <h1>No comments yet.</h1>
                                <p>Start the conversation.</p>
                            </div>}


                            {comments.length > 0 && comments.map((item, index) => {
                            const timeAgo = formatDistanceToNow(new Date(item.updatedAt), { addSuffix: true })
                            return(
                                <div className="CommentOfUser" key={index}>
                                    <img src="posts/4.png" id="imageprofile" alt="" />
                                        <div className="comments">
                                            <div className="df comment">
                                                <h3>{item.User.full_name}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="df aic settings-comment">
                                                <p className="time-ago">{timeAgo}</p>
                                                <h4>Reply</h4>
                                                <button className="More" onClick={() => {SetModalSettings(1);SetselectCommentForDelete(item)}} ><img src="/icons/More.png" alt="" /></button>
                                            </div>
                                        <div>
                                    </div>
                                        
                                    </div>
                                    <div className="select-comment">
                                        <FontAwesomeIcon icon={faHeart} className="icon fa-heart-h" />
                                    </div>
                                </div>)
                            })}
                        </section>
                        <div className="hr">
                        </div>
                        <div className="add-comment">
                            <div className="options">
                                <div className="left-options">
                                <FontAwesomeIcon icon={faHeart} className="iconselect"/>
                                <FontAwesomeIcon icon={faComment} className="iconselect"/>
                                <FontAwesomeIcon icon={faPaperPlane} className="iconselect"/>
                                </div>
                                <div className="right-options">
                                    <FontAwesomeIcon icon={faBookmark} className="iconselect iconbook"/>
                                </div>
                            </div>
                            <h3 className="likeOfPoST">5 likes</h3>
                            <h3>April 22</h3>
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