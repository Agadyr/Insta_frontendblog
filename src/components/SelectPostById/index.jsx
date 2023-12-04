'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faShare } from "@fortawesome/free-solid-svg-icons"
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"
import { faComment } from "@fortawesome/free-regular-svg-icons"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
export default function SelectPost({posts,imageID,closeModal,addCommentsToPost,AllComments,Removecomment}){
    const [inputvalue,Setinputvalue] = useState('')
    const [RemoveModal,SetRemoveModal] = useState(0)
    const [SelectCommentForDelete,SetSelectCommentForDelete] = useState({})
    const UserPostId = imageID
    const save = () =>{
        const comments = {
            inputvalue,
            UserPostId
        }
        addCommentsToPost(comments)
        Setinputvalue('')
    }
    return(
           <div className="main-window" >
            <FontAwesomeIcon icon={faClose} className="close" onClick={() => closeModal(1)}/>
            {RemoveModal == 1 && 
            <div className="remove-modal">
                <div className="rm-buttons">
                    <button className="removes">Report</button>
                    <button className="removes"  onClick={() => {Removecomment(SelectCommentForDelete);SetRemoveModal(0);}}>Delete</button>
                    <button className="removes" onClick={() => SetRemoveModal(0)}>Cansel</button>
                </div>
            </div>}
                <div className="Modal-select-window">
                    <div className="left-modal-window">
                    <img src={posts[UserPostId-1].postimage} alt="" />
                    </div>
                    <div className="right-modal-window">
                        <div className="header-right-modal">
                            <img src="posts/2.png" alt="" id="imageprofile"/>
                            <div className="User-name-in-header">
                                <h3>decode.kz</h3>
                                <h3>Original Audio</h3>
                            </div>
                            <button className="More"><img src="/icons/More.png" alt="" /></button>
                        </div>
                        <div className="hr">
                        </div>
                        <section className="main-section">
                            <div className="UserThatPosted">
                            <img src="posts/5.png" alt="" id="imageprofile"/>
                                <div className="User-name-in-header">
                                    <h3>decode.kz</h3>
                                    <p>Some description from text</p>
                                </div>
                            </div>
                            {AllComments.length <= 0 && <div className="nocomments">
                                <h1>No comments yet.</h1>
                                <p>Start the conversation.</p>
                            </div>}
                            {AllComments.length > 0 && AllComments.map((item, index) => (
                                <div className="CommentOfUser" key={index}>
                                    <img src="posts/4.png" id="imageprofile" alt="" />
                                    <div className="comments">
                                        <h3>Senalov.kz</h3>
                                        <p>{item.inputvalue}</p>
                                        <button className="btn rm-button" onClick={() =>{SetSelectCommentForDelete(item);SetRemoveModal(1)}}>Удалить</button>
                                        <FontAwesomeIcon icon={faHeart} className="icon fa-heart-h" />
                                    </div>


                                </div>
                            ))}
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
                                {inputvalue.length >1 && <button className="Add-comment-to-post" onClick={save}>Post</button>}
                                {inputvalue.length ==0 && <button className="Add-comment-to-post withoutcolor">Post</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

)}