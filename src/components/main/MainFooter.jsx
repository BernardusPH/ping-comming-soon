import Facebook from "../../images/facebook.svg"
import Twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"


function MainFooter() {
    return (
        <div className="main-footer">
            <div className="social-links">
                <div><img src={Facebook} alt="faceBook" /></div>
                <div><img src={Twitter} alt="twitter" /></div>
                <div><img src={instagram} alt="instagram" /></div>
                
              
            </div>
            
            <p className="copyRight">&copy; Copyright Ping. All rights reserved.</p>
        </div>
    );
}

export default MainFooter;