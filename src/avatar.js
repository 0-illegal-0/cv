import AvatarImage from "./assets/images/avatar/avatar.jpg";

function Avatar() {
  return (
    <>
      <div className="about-container">
        <div className="about-container-avatar">
          <img src={AvatarImage} alt="" />
          <div className="shadow"></div>
        </div>
      </div>
    </>
  );
}

export default Avatar;
