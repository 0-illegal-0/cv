import NavBarIcon from "./assets/images/icons/nav-bar.png";
import { useRef, useEffect, useState } from "react";
import NavBar from "./nav-bar.js";

let navbarState = false;
let navbarStateProccessing = false;
function MainHeader() {
  const navListId = useRef();
  const navbarId = useRef();

  function navBarMove() {
    if (!navbarStateProccessing && navbarState) {
      navbarStateProccessing = true;
      navbarState = false;
      navListId.current.classList.remove("navbar-header-on");
      navListId.current.classList.add("navbar-header-off");
      navListId.current.style.marginRight = "-100px";
      //  navbarId.current.style.zIndex = "-1";

      navbarStateProccessing = false;
    } else if (!navbarStateProccessing && !navbarState) {
      navbarStateProccessing = true;
      navbarState = true;
      navListId.current.classList.remove("navbar-header-off");
      navListId.current.classList.add("navbar-header-on");
      navListId.current.style.marginRight = "0px";
      navbarId.current.style.zIndex = "1";
      navbarStateProccessing = false;
    }
  }

  return (
    <>
      <div className="main-head">
        <a>SOLO</a>
        <img alt="" src={NavBarIcon} onClick={navBarMove} />
      </div>
      <NavBar
        navList={navListId}
        screenState={window.innerWidth < 901 ? false : true}
        navbarId={navbarId}
      />
    </>
  );
}

export default MainHeader;
