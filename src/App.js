import { useRef } from "react";

import logo from "./logo.svg";
import "./App.css";
import about from "./assets/images/icons/about-2.png";
import resume from "./assets/images/icons/resume.png";
import portfolio from "./assets/images/icons/portfolio.png";
import service from "./assets/images/icons/service.png";
import contact from "./assets/images/icons/contact.png";
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
      <NavBar
        about={about}
        resume={resume}
        portfolio={portfolio}
        service={service}
        contact={contact}
      />
    </div>
  );
}

export default App;
