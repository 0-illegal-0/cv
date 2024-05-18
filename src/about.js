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
      <span style={{ display: "inline", fontSize: "50px" }}>I am a </span>
      <h1 style={{ display: "inline", fontSize: "50px" }} ref={jobNameRef}>
        {jobName}|
      </h1>
    </div>
  );
}

function About(props) {
  return (
    <div className="content-body">
      <div className="personal-informations">
        <h2>I'm Soliman Ramadan</h2>
        <JobNameAnimation />
        <p>
          I am a <b>Web developer</b> use logical and mathematical solutions to
          get a lot of work done and to solve problems.
        </p>
      </div>
      <div className="right-section">
        <div className="big-avatar"></div>
      </div>
      <div className="buttons-containers">
        <div></div>
        <div></div>
      </div>
      <Icons />
    </div>
  );
}

/*
          <img style={{ width: "325px" }} alt="" src={bigAvatar} />

        <img alt="" src={html} />
        <img alt="" src={css} />
        <img alt="" src={js} />
        <img alt="" src={php} />
        <img alt="" src={dart} />
        <img alt="" src={flutter} />
        <img alt="" src={git} />
        <img alt="" src={github} />
        <img alt="" src={react} />
        <img alt="" src={mysql} />
        <img alt="" src={firbase} />
*/

function Icons() {
  const [firstElementState, setFirstElementState] = useState(0);
  const [secondElementState, setSecondElementState] = useState(1320);

  const firstElement = useRef();
  const secondElement = useRef();

  /*
  const MemoGun = useMemo(() => {
    console.log("ploa");
    IconsAnimation();
    return <h1 onClick={() => {}}>Farawla</h1>;
  }, []);
*/
  useEffect(() => {
    IconsAnimation();
  });

  function IconsAnimation() {
    setTimeout(() => {
      setFirstElementState(firstElementState - 1);
      setSecondElementState(secondElementState - 1);
      firstElement.current.style.marginLeft = firstElementState + "px";
      secondElement.current.style.marginLeft = secondElementState + "px";

      if (firstElementState < -1350) {
        setFirstElementState(secondElementState + 1320);
      } else if (secondElementState < -1350) {
        setSecondElementState(firstElementState + 1320);
      }

      // IconsAnimation();
    }, 20);
  }
  //IconsAnimation();

  const IconsImage = iconsList.map((v) => {
    return <img alt="" src={v} />;
  });
  return (
    <div className="bottom-section">
      <div className="bottom-icon-image-wrap">
        <div ref={firstElement}>{IconsImage}</div>
        <div ref={secondElement}>{IconsImage}</div>
      </div>
    </div>
  );
}
/*
    <div className="bottom-section" ref={iconsElement}>
      {IconsImage}
      {IconsImage}
    </div>
*/
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
