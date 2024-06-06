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

  function setMainElementHeight() {
    setTimeout(() => {
      if (window.innerHeight) {
        mainRef.current.style.height = 739 /*window.innerHeight*/ + "px";
      } else {
        setMainElementHeight();
      }
    }, 10);
  }
  setMainElementHeight();

  return (
    <div ref={mainRef} className="main">
      <MainHeader />
      <div style={{ height: "30px" }}></div>
      <Avatar />
      <About />
      <NavBar screenState={window.innerWidth > 1000 ? false : true} />
    </div>
  );
}

export default App;
