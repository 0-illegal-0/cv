import NavBarIcon from "./assets/images/icons/nav-bar.png";
import { useRef, useEffect, useState } from "react";
//import NavBar from "./nav-bar.js";
import NavBar from "./component/NavBar.js";

let navbarState = false;
let navbarStateProccessing = false;

export async function navBarOff(navListId, navbarId) {
  navbarStateProccessing = true;
  navbarState = false;
  navListId.current.classList.remove("navbar-header-on");
  navListId.current.classList.add("navbar-header-off");
  navListId.current.style.marginRight = "-100px";
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(500); //

  navbarId.current.style.zIndex = "-1";
  navbarStateProccessing = false;
}

function MainHeader({
  data,
  transitionAnimation,
  transitionAnimationBottom,
  transitionAnimationTop,
}) {
  const navListId = useRef();
  const navbarId = useRef();

  function navBarMove() {
    if (!navbarStateProccessing && navbarState) {
      navBarOff(navListId, navbarId);
    } else if (!navbarStateProccessing && !navbarState) {
      navbarStateProccessing = true;
      navbarState = true;
      navListId.current.classList.remove("navbar-header-off");
      navListId.current.classList.add("navbar-header-on");
      navListId.current.style.marginRight = "0px";
      navbarId.current.style.zIndex = "10";
      navbarStateProccessing = false;
    }
  }

  return (
    <>
      <div className="main-head">
        <a>{data}</a>
        <img alt="" src={NavBarIcon} onClick={navBarMove} />
      </div>
      <NavBar
        navList={navListId}
        screenState={window.innerWidth < 901 ? false : true}
        navbarId={navbarId}
        animNavBar={true}
        transitionAnimation={transitionAnimation}
        transitionAnimationTop={transitionAnimationTop}
        transitionAnimationBottom={transitionAnimationBottom}
        mediamScreen={false}
      />
    </>
  );
}

export default MainHeader;
