import navbarIcon from "./assets/images/icons/work.png";

import { navBarOff } from "./MainHeader";
import navBarData from "./data/nav-bar.json";

import { useEffect, useState } from "react";

function NavBar({ navBarMove, screenState, navList, navbarId, contentBody }) {
  const [navbarStyle, setNavbarStyle] = useState({ display: "flex" });

  useEffect(() => {
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
        <ul className="nav-list" ref={navList} id="nav-list">
          {navBarData["nav-bar-design"].map((navBarDesin, index) => (
            <li
              onClick={() => {
                chooseSection(navBarDesin["id"]);
                navBarOff(navList, navbarId);
              }}
            >
              <img src={navBarDesin["icon"]} />
              <span>{navBarDesin["title"]}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
