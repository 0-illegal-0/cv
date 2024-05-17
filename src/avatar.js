import AvatarImage from "./assets/images/avatar/avatar.jpg";

function Avatar() {
  return (
    <>
      <div className="about-container">
        <div className="about-container-avatar">
          <img src={AvatarImage} alt="" />
          <div className="shadow"></div>
          <h3>Soliman Ramadan</h3>
        </div>
      </div>
    </>
  );
}

export default Avatar;
