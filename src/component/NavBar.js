import navbarIcon from "../assets/images/icons/work.png";
import navBarData from "../data/nav-bar.json";
import { navBarOff } from "../MainHeader";
import { navOut } from "./NavBarAnimation";

import { useEffect, useState } from "react";

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

  let list;
  useEffect(() => {
    if (screenState) {
      setNavbarStyle({ display: "none" });
    }
    document.getElementById("about-content").style.display = "flex";
  }, []);

  return (
    <>
      <div className="nav-bar" style={navbarStyle} ref={navbarId}>
        <div className="navbar-icon" onClick={navBarMove}>
          <img src={navbarIcon} alt=" " />
        </div>
        <ul className="nav-list" ref={navList}>
          {navBarData["nav-bar-design"].map((navBarDesin, index) => (
            <li
              onClick={() => {
                chooseSection(
                  navBarDesin["id"],
                  list,
                  transitionAnimation,
                  transitionAnimationBottom,
                  transitionAnimationTop,
                );
                if (animNavBar) {
                  if (mediamScreen) {
                    navOut(navbarId);
                  } else {
                    navBarOff(navList, navbarId);
                  }
                  console.log("aim work");
                }
              }}
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
}
export default NavBar;
