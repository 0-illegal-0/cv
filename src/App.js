import { useRef, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

import About from "./about.js";
import NavBar from "./nav-bar.js";
import Avatar from "./avatar.js";
import MainHeader from "./MainHeader.js";

import { screen } from "@testing-library/react";
import NavBarIcon from "./assets/images/icons/nav-bar.png";

function App() {
  return (
    <>
      <Main />
    </>
  );
}

function Main() {
  const mainRef = useRef();
  const contentBody = useRef();

  function setMainElementHeight() {
    setTimeout(() => {
      if (window.innerHeight) {
        mainRef.current.style.height = 739 + "px"; //window.innerHeight + "px";
      } else {
        setMainElementHeight();
      }
    }, 10);
  }
  setMainElementHeight();

  return (
    <div ref={mainRef} className="main">
      <MainHeader />
      <div className="box-size-height"></div>
      <Avatar />
      <About innerHeight={window.innerHeight} contentBody={contentBody} />
      <NavBar
        screenState={window.innerWidth > 1000 ? false : true}
        contentBody={contentBody}
      />
    </div>
  );
}

export default App;
