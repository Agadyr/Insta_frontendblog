'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
export default function SelectPost({posts,step,closeModal}){
    const ShowPostUser = posts.map(item => item)
    const PostStep = step
    console.log(PostStep);
    return(
        <div>
           <div className="main-window" style={{zIndex:10}}>
            <FontAwesomeIcon icon={faClose} className="close" onClick={() => closeModal(1)}/>
            <div className="Modal-select-window">
                <div className="left-modal-window">
                   <img src={posts[PostStep-1].postimage} alt="" />
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
                    <div className="header-right-modal">
                    <img src="posts/5.png" alt="" id="imageprofile"/>
                        <div className="User-name-in-header">
                            <h3>decode.kz</h3>
                            <p>Some description from text</p>
                        </div>
                    </div>
                    <div className="header-right-modal">
                        <img src="posts/4.png" id="imageprofile" alt="" />
                        <div className="comments">
                            <h3>Senalov.kz</h3>
                            <p>Decode fire</p>
                        </div>
                        <FontAwesomeIcon icon={faHeart} className="icon fa-heart-h"/>
                    </div>
                    <div className="header-right-modal">
                        <img src="posts/4.png" id="imageprofile" alt="" />
                        <div className="comments">
                            <h3>Senalov.kz</h3>
                            <p>Decode fire</p>
                        </div>
                        <FontAwesomeIcon icon={faHeart} className="icon fa-heart-h"/>
                    </div>
                    <div className="header-right-modal">
                        <img src="posts/4.png" id="imageprofile" alt="" />
                        <div className="comments">
                            <h3>Senalov.kz</h3>
                            <p>Decode fire</p>
                        </div>
                        <FontAwesomeIcon icon={faHeart} className="icon fa-heart-h"/>
                    </div>
                    <div className="header-right-modal">
                        <img src="posts/4.png" id="imageprofile" alt="" />
                        <div className="comments">
                            <h3>Senalov.kz</h3>
                            <p>Decode fire</p>
                        </div>
                        <FontAwesomeIcon icon={faHeart} className="icon fa-heart-h"/>
                    </div>
                    <div className="header-right-modal">
                        <img src="posts/4.png" id="imageprofile" alt="" />
                        <div className="comments">
                            <h3>Senalov.kz</h3>
                            <p>Decode fire</p>
                        </div>
                        <FontAwesomeIcon icon={faHeart} className="icon fa-heart-h"/>
                    </div>
                </div>
            </div>
            </div>
        </div>

)}