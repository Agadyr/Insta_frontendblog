export default function Following(){
    return(
        <div className="followersOFUser df jcsb aic"> 
            <div className="df aic">
                <img src={item.url} alt="" className=""/>
                <div className="about-follower ">
                    <div className="NicknameOfFollower df aic">
                        <h2>{item.nick_name} ·</h2>
                        <span>Follow</span>
                    </div>
                    <h3>{item.bio}</h3>
                </div>
            </div>
            <button className="remove-follower">Following</button>
        </div>
    )
}