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
            <span>Robin Oliver</span>
            <span className="job-description">Web Developer</span>
          </div>

          <div className="social-media-icons">
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />

            <img src={github} alt="" />
          </div>

          <div className="personal-data">
            <div>
              <b>Address: </b>
              <span>Cairo, Helwan, Egypt</span>
            </div>
            <div>
              <b>Experience: </b>
              <span>7 Years</span>
            </div>
          </div>
          <div className="download-vc">
            <span>DOWNLOAD CV</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Avatar;
