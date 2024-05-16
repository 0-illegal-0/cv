function NavBar(props) {
  return (
    <>
      <div className="nav-bar">
        <ul className="nav-list">
          <li>
            <img src={props.about} />
            <span>About</span>
          </li>
          <li>
            <img src={props.resume} />

            <span>Resume</span>
          </li>
          <li>
            <img src={props.portfolio} />

            <span>Portfolio</span>
          </li>
          <li>
            <img src={props.service} />

            <span>Services</span>
          </li>
          <li>
            <img src={props.contact} />

            <span>Contact</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
