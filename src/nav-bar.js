import navbarIcon from "./assets/images/icons/work.png";

import about from "./assets/images/icons/about-2.png";
import resume from "./assets/images/icons/resume.png";
import portfolio from "./assets/images/icons/portfolio.png";
import service from "./assets/images/icons/service.png";
import contact from "./assets/images/icons/contact.png";

import { useEffect, useState, useRef } from "react";
import { renderToString } from "react-dom/server";

function NavBar({ navBarMove, screenState, navList, navbarId, contentBody }) {
  const [navbarStyle, setNavbarStyle] = useState({ display: "flex" });
  let mainContentBody;
  let aboutContent;

  //const navbarId = useRef();

  useEffect(() => {
    mainContentBody = document.getElementById("main-content-body");
    aboutContent = document.getElementById("about-content");

    if (screenState) {
      setNavbarStyle({ display: "none" });
    }
  }, []);

  function moveTest() {
    //contentBody.current.style.display = "none";
    aboutContent.style.display = "none";
    mainContentBody.innerHTML = renderToString(ForTest());
  }

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
          <li onClick={moveTest}>
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

function ForTest() {
  return <h2>Waleed</h2>;
}

export default NavBar;
