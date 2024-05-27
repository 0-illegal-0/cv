import NavBarIcon from "./assets/images/icons/nav-bar.png";
import { useRef, useEffect, useState } from "react";
import NavBar from "./nav-bar.js";

let navbarState = false;
let navbarStateProccessing = false;
function MainHeader() {
  const navListId = useRef();

  useEffect(() => {}, []);

  function navBarMove() {
    if (!navbarStateProccessing && navbarState) {
      navbarStateProccessing = true;
      navbarState = false;
      navListId.current.classList.remove("navbar-move-on");
      navListId.current.classList.add("navbar-move-off");
      navListId.current.style.marginLeft = "101%";
      navbarStateProccessing = false;
    } else if (!navbarStateProccessing && !navbarState) {
      navbarStateProccessing = true;
      navbarState = true;
      navListId.current.classList.remove("navbar-move-off");
      navListId.current.classList.add("navbar-move-on");
      navListId.current.style.marginLeft = "calc(101% - 90px)";
      navbarStateProccessing = false;
    }
  }

  return (
    <>
      <div className="main-head">
        <a>SOLO</a>
        <img src={NavBarIcon} onClick={navBarMove} />
      </div>
      <NavBar
        navList={navListId}
        screenState={window.innerWidth < 901 ? false : true}
      />
    </>
  );
}

export default MainHeader;
