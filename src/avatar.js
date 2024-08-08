/*import AvatarImage from "./assets/images/avatar/44508.jpg";15591 20011 // 44508*/
import AvatarImage from "./assets/images/avatar/avatar.jpg";
import twitter from "./assets/images/icons/contact/twitter.png";
import facebook from "./assets/images/icons/contact/facebook.png";
import github from "./assets/images/icons/contact/github.png";

function Avatar() {
  return (
    <>
      <div className="about-container">
        <div className="about-container-avatar">
          <div className="avatar-name-description">
            <img src={AvatarImage} alt="" />
          </div>
          <div className="avatar-personal-info">
            <h3>Robin Oliver</h3>
            <h3 className="job-description">Web Developer</h3>
          </div>

          <div className="social-media-icons">
            <img src={twitter} />
            <img src={facebook} />

            <img src={github} />
          </div>

          <div className="personal-data">
            <div>
              <b>Adress: </b>
              <span>Cairo, Helwan, Egypt</span>
            </div>
            <div>
              <b>Age: </b>
              <span>32</span>
            </div>
          </div>
          <div className="download-vc">
            <h3>DOWNLOAD CV</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Avatar;
