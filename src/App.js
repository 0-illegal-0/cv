import { useRef, useEffect } from "react";
import data from "./data/general-data.json";
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
import NavBarAnimation from "./component/NavBarAnimation.js";
import { useState } from "react";

function App() {
  return (
    <>
      <Main />
    </>
  );
}

function Main() {
  const mainPage = useRef();
  const [getTest, setTest] = useState("Wing");

  function setMainElementHeight() {
    setTimeout(() => {
      if (window.innerHeight) {
        mainPage.current.style.height = window.innerHeight + "px"; // window.innerHeight 739 + "px";
        //  setMainElementHeight();
      } else {
        setMainElementHeight();
      }
      console.log("this is ... ", window.innerHeight);
    }, 10);
  }
  setMainElementHeight();

  return (
    <div className="main">
      <PrototypeDetails />
      <div ref={mainPage} className="page">
        <MainHeader data={data["app-name"]} />
        <div className="box-size-height"></div>
        <Avatar />
        <MainBody innerHeight={window.innerHeight} />
        <NavBar screenState={window.innerWidth > 1100 ? false : true} />
        <NavBarAnimation />
      </div>
    </div>
  );
}

export default App;
