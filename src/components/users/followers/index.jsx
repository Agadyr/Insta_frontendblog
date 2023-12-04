export default function Followers({item,ValueOfInput,filteredFollowers}){
    return(
        <div className="followersOFUser df jcsb aic"> 
            {filteredFollowers.length >=1 && filteredFollowers.map(Follower => (
            <div className="df aic">
                <img src={Follower.url} alt="" className=""/>
                <div className="about-follower ">
                    <div className="NicknameOfFollower df aic">
                        <h2>{Follower.nick_name} ·</h2>
                        <span>Follow</span>
                    </div>
                    <h3>{Follower.bio}</h3>
                </div>
            </div>))}
            <button className="remove-follower">Remove</button>
        </div>
    )
}