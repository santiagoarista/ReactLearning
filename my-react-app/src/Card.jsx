import profilePic from './assets/profilepic.jpeg';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Santiago</h2>
            <p className="card-text">I'm studying computer science engineering</p>
        </div>
    );

}

export default Card