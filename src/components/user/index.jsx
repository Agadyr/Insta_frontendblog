'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { faCompass } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
export default function User({user,posts,Setuploadphoto}){
    const ShowUser = user.map(item => item)
    return(
        <div className="container">
            <div className="user-profile">
                <div className="nav-menu">
                        <svg aria-label="Home" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Home</title><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                        <svg aria-label="Explore" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Explore</title><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon><polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                        <svg aria-label="Reels" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Reels</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fill-rule="evenodd"></path></svg>
                        <svg aria-label="New post" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>New post</title><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
                        <svg aria-label="Direct" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Direct</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokelinejoin="round" strokeWidth="2"></polygon></svg>
                        <img src={ShowUser[0].imageprofile} alt="" id="imageprofile" />

                </div>
                <div className="headerofProfile df jcsb aic">
                    <div>
                        <img src="/images/logo.png" alt="" className="ins-prof-logo"/>
                    </div>
                    <div className="header-search">
                        <div className="header-input">
                            <input type="text" placeholder="Search"  />
                            <div className="search-icon-container">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="header-search-icon" />
                            </div>
                        </div>
                        </div>
                    <div className="header-navigation df aic">
                        <FontAwesomeIcon icon={faHouse} className="icon" />
                        <FontAwesomeIcon icon={faFacebookMessenger} className="icon"/>
                        <FontAwesomeIcon icon={faSquarePlus} className="icon" onClick={()=> Setuploadphoto(2)}/>
                        <FontAwesomeIcon icon={faCompass} className="icon"/>
                        <FontAwesomeIcon icon={faHeart} className="icon"/>
                        <img src={ShowUser[0].imageprofile} alt="" id="imageprofile"/>
                    </div>
                </div>
                <div className="aboutuser df aic">
                    <div className="userprofilephoto">
                        <img src={ShowUser[0].imageprofile} alt="Not found" id="userphoto" />
                    </div>
                    <div className="stateuser">
                        <div className="name df">
                            <h3>{ShowUser[0].username}</h3>
                            <div className="follow-btn df">
                                <button className="btn btn-f">Follow</button>
                                <button className="More"><img src="/icons/More.png" alt="" /></button>
                            </div>
                        </div>
                        <div className="states df">
                            <div className="states-item df"><h2>{ShowUser[0].stats.posts} </h2>posts</div>
                            <div className="states-item df"><h2>{ShowUser[0].stats.followers}</h2>followers</div>
                            <div className="states-item df"><h2>{ShowUser[0].stats.following} </h2>following</div>
                        </div>
                        <div className="bio">
                            <h2>{ShowUser[0].bio}</h2>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <hr className="line"/>
                    <div className="posts-hr">
                        <div className="posts-img df">
                            <img src="/icons/icon.svg" alt="" />
                            <h3>POSTS</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}