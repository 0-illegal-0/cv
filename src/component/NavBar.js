import navbarIcon from "../assets/images/icons/work.png";
import navBarData from "../data/nav-bar.json";
import { navBarOff } from "../MainHeader";
import { navOut } from "./NavBarAnimation";

import { useEffect, useState, useRef } from "react";

function NavBar({
  navBarMove,
  screenState,
  navList,
  navbarId,
  transitionAnimation,
  transitionAnimationBottom,
  transitionAnimationTop,
  animNavBar,
  mediamScreen,
}) {
  const [navbarStyle, setNavbarStyle] = useState({ display: "flex" });
  const navListDesktop = useRef();
  let navListDesktopList;

  let list;
  useEffect(() => {
    if (screenState) {
      setNavbarStyle({ display: "none" });
    }
    document.getElementById("about-content").style.display = "flex";
  }, []);

  // nav bar hover

  const handleClick = (index) => {
    navListDesktopList = navListDesktop.current.querySelectorAll(".nav-btn");

    navListDesktopList.forEach((element) => {
      element.style.backgroundColor = "#fff";
    });
    navListDesktopList[index].style.backgroundColor = "#c8e1f7";
  };

  return (
    <>
      <div className="nav-bar" style={navbarStyle} ref={navbarId}>
        <div className="navbar-icon" onClick={navBarMove}>
          <img src={navbarIcon} alt=" " />
        </div>
        <ul
          className="nav-list"
          ref={!animNavBar ? navListDesktop : navList}
          id="nav-list"
        >
          {navBarData["nav-bar-design"].map((navBarDesin, index) => (
            <li
              className="nav-btn"
              onClick={() => {
                handleClick(index);
                chooseSection(
                  navBarDesin["id"],
                  list,
                  transitionAnimation,
                  transitionAnimationBottom,
                  transitionAnimationTop,
                  index,
                  navList,
                );

                if (animNavBar) {
                  if (mediamScreen) {
                    navOut(navbarId);
                  } else {
                    navBarOff(navList, navbarId);
                  }
                }
              }}
              id={"nav-btn-" + index}
            >
              <img src={navBarDesin["icon"]} alt="" />
              <span>{navBarDesin["title"]}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function chooseSection(
  idName,
  list,
  transitionAnimation,
  transitionAnimationBottom,
  transitionAnimationTop,
  index,
  navList,
) {
  list = document
    .getElementById("content-body-list")
    .querySelectorAll(".section");
  document.getElementById("about-content").style.display = "flex";
  for (let index = 0; index < list.length; index++) {
    list[index].style.opacity = 0;
    list[index].style.zIndex = "unset";
    list[index].style.display = "none";

    document.getElementById(idName).style.display = "none";
    document.getElementById("nav-btn-" + index).style.backgroundColor = "blue";
  }

  document.getElementById(idName).style.opacity = "1";
  document.getElementById(idName).style.display = "flex";
  document.getElementById(idName).style.zIndex = "5";

  transitionAnimation.current.classList.add("transition-display-anim");

  transitionAnimationBottom.current.classList.add(
    "transition-animation-bottom-anim",
  );

  transitionAnimationTop.current.classList.add("transition-animation-top-anim");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  await delay(500); //

  transitionAnimation.current.classList.remove("transition-display-anim");
  transitionAnimationBottom.current.classList.remove(
    "transition-animation-bottom-anim",
  );
  transitionAnimationTop.current.classList.remove(
    "transition-animation-top-anim",
  );

  // Nav Bar Hover
}
export default NavBar;
