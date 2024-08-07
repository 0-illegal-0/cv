import React, { useRef, useState, useEffect } from "react";
import aboutData from "../../data/about.json";

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
      <div className="personal-informations">
        <h2>I'm {aboutData["name"]}</h2>
        <JobNameAnimation />
        <p>
          I am a <b>{aboutData["job-title"]}</b> {aboutData["summary"]}
        </p>
      </div>

      <div className="handled-projects">
        <Achievements
          title={"Client Review"}
          number={aboutData["client-review"]}
        />
        <Achievements
          title={"Years Of Experience"}
          number={aboutData["years-of-experience"]}
        />
        <Achievements
          title={"Handled Projects"}
          number={aboutData["handled-projects"]}
        />
        <Achievements title={"Awards Won"} number={aboutData["awards-won"]} />
      </div>
      <div className="resume-protofolio-buttons">
        <button>Hire Me</button>
        <button> Portfolio</button>
      </div>
    </div>
  );
}

export default About;
