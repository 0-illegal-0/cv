import navbarIcon from "./assets/images/icons/work.png";

import about from "./assets/images/icons/about-2.png";
import resume from "./assets/images/icons/resume.png";
import portfolio from "./assets/images/icons/portfolio.png";
import service from "./assets/images/icons/service.png";
import contact from "./assets/images/icons/contact.png";

import { useEffect, useState, useRef } from "react";

function NavBar({ navBarMove, screenState, navList }) {
  const [navbarStyle, setNavbarStyle] = useState({ display: "flex" });
  const navbarId = useRef();

  useEffect(() => {
    if (screenState) {
      setNavbarStyle({ display: "none" });
    }
  }, []);
  return (
    <>
      <div className="nav-bar" style={navbarStyle} ref={navbarId}>
        <div className="navbar-icon" onClick={navBarMove}>
          <img src={navbarIcon} />
        </div>
        <ul className="nav-list" ref={navList}>
          <li>
            <img src={about} />
            <span>About</span>
          </li>
          <li>
            <img src={resume} />

            <span>Resume</span>
          </li>
          <li>
            <img src={portfolio} />

            <span>Portfolio</span>
          </li>
          <li>
            <img src={service} />

            <span>Services</span>
          </li>
          <li>
            <img src={contact} />

            <span>Contact</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
