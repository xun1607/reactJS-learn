import profilePic from '../assets/profilePic.jpg';
function Card(){

    return (
        <div className="card">
            <img className='card-img' src={profilePic} alt="Profile pic" />
            <h2 className='card-title'>
                Xun
            </h2>
            <p className='card-text'>I'm a junior at HUST and love K-drama</p>
        </div>
    );

}

export default Card;