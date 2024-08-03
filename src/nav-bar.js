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

  let list;

  function chooseSection(idName) {
    list = document
      .getElementById("content-body-list")
      .querySelectorAll(".section");
    document.getElementById("about-content").style.display = "flex";
    for (let index = 0; index < list.length; index++) {
      list[index].style.opacity = 0;
      list[index].style.zIndex = "unset";
      list[index].style.display = "none";
      //  document.getElementById(idName).style.display = "none";
    }
    document.getElementById(idName).style.opacity = "1";
    document.getElementById(idName).style.display = "flex";
    document.getElementById(idName).style.zIndex = "5";
  }

  return (
    <>
      <div className="nav-bar" style={navbarStyle} ref={navbarId}>
        <div className="navbar-icon" onClick={navBarMove}>
          <img src={navbarIcon} />
        </div>
        <ul className="nav-list" ref={navList}>
          <li
            onClick={() => {
              chooseSection("about-content");
            }}
          >
            <img src={about} />
            <span>About</span>
          </li>
          <li
            onClick={() => {
              chooseSection("resume");
            }}
          >
            <img src={resume} />

            <span>Resume</span>
          </li>
          <li
            onClick={() => {
              chooseSection("portofolio");
            }}
          >
            <img src={portfolio} />

            <span>Portfolio</span>
          </li>
          <li
            onClick={() => {
              chooseSection("services");
            }}
          >
            <img src={service} />

            <span>Services</span>
          </li>
          <li
            onClick={() => {
              chooseSection("contact");
            }}
          >
            <img src={contact} />

            <span>Contact</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
