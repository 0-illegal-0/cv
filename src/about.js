import React, { useReducer, useState, useRef, useEffect, useMemo } from "react";
import bigAvatar from "./assets/images/avatar/2.png";
import html from "./assets/images/icons/html.png";
import css from "./assets/images/icons/css3.png";
import js from "./assets/images/icons/js.png";
import php from "./assets/images/icons/php.png";
import dart from "./assets/images/icons/dart.png";
import flutter from "./assets/images/icons/flutter.png";
import git from "./assets/images/icons/git.png";
import github from "./assets/images/icons/github.png";
import react from "./assets/images/icons/react.png";
import mysql from "./assets/images/icons/my-sql.png";
import firbase from "./assets/images/icons/firebase.png";
import NavBar from "./nav-bar.js";

const jobNameList = [
  "W",
  "e",
  "b",
  " ",
  "D",
  "e",
  "v",
  "e",
  "l",
  "o",
  "p",
  "e",
  "r",
];

let counter = 0;
let switchKey = true;
let textC = "";
let timer = 100;
let timerSwitch = true;

function JobNameAnimation() {
  const jobNameRef = useRef();

  const [jobName, setJobName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (counter < jobNameList.length && switchKey === true) {
        setJobName(jobName + jobNameList[counter]);
        counter++;
        textC = jobName;

        // Slow down time
        if (counter === jobNameList.length) {
          timer = 1800;
        }
      } else {
        timer = 100;
        switchKey = false;
        counter--;

        textC = jobName.slice(0, counter);
        setJobName(textC);
        if (counter < 6) {
          switchKey = true;
        }
      }
    }, timer);
  });

  return (
    <div className="job-description-text">
      <span>I am a </span>
      <h1 ref={jobNameRef}>{jobName}|</h1>
    </div>
  );
}

// main Icon

function MainIcon({ contentBody, innerHeight }) {
  const [contentBodyWidth, setContentBodyWidth] = useState(0);
  const [contentBodyHeight, setContentBodyHeight] = useState(0);

  function getBottoContentBody() {
    console.log("po");

    setTimeout(() => {
      if (contentBody.current.offsetWidth) {
        setContentBodyWidth((v) => contentBody.current.offsetWidth);
        setContentBodyHeight((v) => contentBody.current.offsetHeight);
      } else {
        getBottoContentBody();
      }
    }, 50);
  }
  getBottoContentBody();
  return (
    <>
      <Icons
        contentBodyWidth={contentBodyWidth - 15}
        contentBodyHeight={innerHeight - 120}
      />
    </>
  );
}

//      <div className="background-fill-main-icon"></div>

//       <div className="personal-informations-section">
//       </div>

function About({ innerHeight, co, contentBody }) {
  //  const contentBody = useRef();

  return (
    <div className="main-content-body">
      <div className="content-body" ref={contentBody}>
        <div className="personal-informations">
          <h2>I'm Soliman Ramadan</h2>
          <JobNameAnimation />
          <p>
            I am a <b>Web developer</b> use logical and mathematical solutions
            to get a lot of work done and to solve problems, i have experience
            using javascript and PHP to create full stack website and
            integrating API
          </p>
        </div>

        <div className="handled-projects">
          <Achievements title={"Client Review"} number={46} />
          <Achievements title={"Years Of Experience"} number={7} />
          <Achievements title={"Handled Projects"} number={23} />
          <Achievements title={"Awards Won"} number={25} />
        </div>
        <div className="resume-protofolio-buttons">
          <button>Hire Me</button>
          <button> Portfolio</button>
        </div>
        <NavBarAnimation />
      </div>

      <div className="bottom">
        <MainIcon contentBody={contentBody} innerHeight={innerHeight} />
      </div>
    </div>
  );
}

function Achievements({ title, number }) {
  return (
    <div className="linearGradient">
      <div>
        <h3>{title}</h3>
        <span>{number}</span>
      </div>
    </div>
  );
}

// NavBarAnimation function

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

let listWidth = 0;
let bottomSectionWidthState = false;

function Icons({ contentBodyWidth, contentBodyHeight }) {
  const [firstElementState, setFirstElementState] = useState(0);
  const [secondElementState, setSecondElementState] = useState(0);

  const firstElement = useRef();
  const secondElement = useRef();
  const bottomSection = useRef();

  useEffect(() => {
    IconsAnimation();
  }, [firstElementState, secondElementState]);

  // get bottomSection width
  function getBottomSection() {
    if (!bottomSectionWidthState) {
      setTimeout(() => {
        if (bottomSection.current.offsetWidth) {
          listWidth = firstElement.current.offsetWidth;
          setSecondElementState(listWidth);
          bottomSectionWidthState = true;
        } else {
          getBottomSection();
        }
      }, 50);
    }
  }

  getBottomSection();

  // (Not finished)  should make width of firstElement or width secondElement is dynamic instead of {1320}
  function IconsAnimation() {
    setTimeout(() => {
      setFirstElementState(firstElementState - 1);
      setSecondElementState(secondElementState - 1);
      firstElement.current.style.marginLeft = firstElementState + "px";
      secondElement.current.style.marginLeft = secondElementState + "px";

      if (firstElementState < -listWidth + 20) {
        setFirstElementState(secondElementState + listWidth);
      } else if (secondElementState < -listWidth + 20) {
        setSecondElementState(firstElementState + listWidth); //bottomSectionWidth
      }
    }, 20);
  }

  const IconsImage = iconsList.map((v) => {
    return <img alt="" src={v} />;
  });
  return (
    <div
      className="bottom-section"
      ref={bottomSection}
      style={
        {
          //marginTop: contentBodyHeight + "px",
        }
      }
    >
      <div
        className="right-section-in-bottom"
        style={{
          marginLeft: contentBodyWidth + "px",
        }}
      ></div>
      <div className="bottom-icon-image-wrap">
        <div ref={firstElement}>{IconsImage}</div>
        <div ref={secondElement}>{IconsImage}</div>
      </div>
    </div>
  );
}

const iconsList = [
  html,
  css,
  js,
  php,
  dart,
  flutter,
  git,
  github,
  react,
  mysql,
  firbase,
];
export default About;
