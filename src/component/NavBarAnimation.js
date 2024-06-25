// NavBarAnimation function
import React, { useRef, useEffect } from "react";
import NavBar from "./NavBar.js";

let navbarState = false;
let navbarStateProccessing = false;

function NavBarAnimation() {
  const navbarId = useRef();

  useEffect(() => {
    navbarId.current.style.marginLeft = "101%";
  }, []);

  function navBarMove() {
    if (!navbarStateProccessing && navbarState) {
      navbarStateProccessing = true;
      navbarState = false;
      navbarId.current.classList.remove("navbar-move-on");
      navbarId.current.classList.add("navbar-move-off");
      navbarId.current.style.marginLeft = "101%";
      navbarStateProccessing = false;
    } else if (!navbarStateProccessing && !navbarState) {
      navbarStateProccessing = true;
      navbarState = true;
      navbarId.current.classList.remove("navbar-move-off");
      navbarId.current.classList.add("navbar-move-on");
      navbarId.current.style.marginLeft = "calc(101% - 90px)";
      navbarStateProccessing = false;
    }
  }

  return (
    <div ref={navbarId} className="navbar-small-screen">
      <NavBar
        navBarMove={() => {
          navBarMove();
        }}
      />
    </div>
  );
}

export default NavBarAnimation;
