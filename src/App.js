import { useRef, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

import MainBody from "./MainBody.js";
import NavBar from "./component/NavBar.js";
import Avatar from "./avatar.js";
import MainHeader from "./MainHeader.js";
import PrototypeDetails from "./pages/portofolio/prototypeDetails.js";
import bgImage from "./assets/images/style/background-image.jpg";
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
  const mainPage = useRef();

  function setMainElementHeight() {
    setTimeout(() => {
      if (window.innerHeight) {
        mainPage.current.style.height = 739 + "px"; //window.innerHeight + "px";
      } else {
        setMainElementHeight();
      }
    }, 10);
  }
  setMainElementHeight();

  return (
    <div className="main">
      <PrototypeDetails />
      <div ref={mainPage} className="page">
        <MainHeader />
        <div className="box-size-height"></div>
        <Avatar />
        <MainBody innerHeight={window.innerHeight} />
        <NavBar screenState={window.innerWidth > 1000 ? false : true} />
      </div>
    </div>
  );
}

export default App;
