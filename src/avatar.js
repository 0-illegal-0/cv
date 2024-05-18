import AvatarImage from "./assets/images/avatar/avatar.jpg";

function Avatar() {
  return (
    <>
      <div className="about-container">
        <div className="about-container-avatar">
          <div className="avatar-name-description">
            <img src={AvatarImage} alt="" />
            <div className="shadow"></div>
            <h3>Soliman Ramadan</h3>
            <h3 className="job-description">Web Developer</h3>
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
