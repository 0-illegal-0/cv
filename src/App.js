import { useRef } from "react";

import logo from "./logo.svg";
import "./App.css";

import About from "./about.js";
import NavBar from "./nav-bar.js";
import Avatar from "./avatar.js";
import { screen } from "@testing-library/react";

function App() {
  return (
    <>
      <Main />
    </>
  );
}

function Main() {
  const mainRef = useRef();

  console.log(window.innerHeight);
  console.log(screen.availHeight);
  //document.documentElement.offsetHeight
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
      <Avatar />
      <About />
      <NavBar />
    </div>
  );
}

export default App;
