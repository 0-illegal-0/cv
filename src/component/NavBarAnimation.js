// NavBarAnimation function
import React, { useRef, useEffect } from "react";
import NavBar from "./NavBar.js";

let navbarState = false;
let navbarStateProccessing = false;

export function navOut(navbarId) {
  navbarStateProccessing = true;
  navbarState = false;
  navbarId.current.classList.remove("navbar-move-on");
  navbarId.current.classList.add("navbar-move-off");
  navbarId.current.style.marginLeft = "101%";
  navbarStateProccessing = false;
}

function NavBarAnimation({
  transitionAnimation,
  transitionAnimationBottom,
  transitionAnimationTop,
}) {
  const navbarId = useRef();
  const navListId = useRef();

  useEffect(() => {
    navbarId.current.style.marginLeft = "101%";
  }, []);

  function navBarMove() {
    if (!navbarStateProccessing && navbarState) {
      navOut(navbarId);
    } else if (!navbarStateProccessing && !navbarState) {
      navbarStateProccessing = true;
      navbarState = true;
      navbarId.current.classList.remove("navbar-move-off");
      navbarId.current.classList.add("navbar-move-on");
      navbarId.current.style.marginLeft = "calc(101% - 120px)";
      navbarStateProccessing = false;
    }
  }

  return (
    <div ref={navbarId} className="navbar-small-screen">
      <NavBar
        transitionAnimation={transitionAnimation}
        transitionAnimationBottom={transitionAnimationBottom}
        transitionAnimationTop={transitionAnimationTop}
        screenState={false}
        navList={navListId}
        navbarId={navbarId}
        animNavBar={true}
        mediamScreen={true}
        navBarMove={() => {
          navBarMove();
        }}
      />
    </div>
  );
}

export default NavBarAnimation;
