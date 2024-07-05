import React, { useRef, useState, useEffect } from "react";
import NavBarAnimation from "../../component/NavBarAnimation.js";
import spiral from "../../assets/images/style/spiral.png";

// JobNameAnimation
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

// Achievements
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

function About({ contentBody, jobName }) {
  return (
    <div id="about-content" className="about-content section" ref={contentBody}>
      <div className="background-image" style={{ position: "absolute" }}>
        <img src={spiral} />
      </div>
      <div className="personal-informations">
        <h2>I'm Soliman Ramadan</h2>
        <JobNameAnimation />
        <p>
          I am a <b>Web developer</b> use logical and mathematical solutions to
          get a lot of work done and to solve problems, i have experience using
          javascript and PHP to create full stack website and integrating API
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
  );
}

export default About;
