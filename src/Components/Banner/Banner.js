// import profilePic from '../../img/profile-1.jpg'
import backgroundPic from '../../img/pexels-1.jpg'
import './Banner.scss'

function Banner() {
    return (
        <div id="home" className="row mb-5">
            <div className="position-relative">
                <img src={backgroundPic} alt="Laptop on top of a table" className="img-fluid"/>
                <div className="banner-msg position-absolute d-block p-4">
                    <h2>Hi! My name is Felicie</h2>
                    <small>I'm a Developer</small>
                </div>
            </div>
            
        </div>
        
    );
}

export default Banner;
  
  
  