import React, { useEffect, useState, useRef } from "react";
import { transformVal } from "../../component/NavBar";

function Resume() {
  const resumeMain = useRef();

  return (
    <div className="resume section" id="resume">
      <h2>Resume</h2>
      <div className="resume-main" ref={resumeMain} id="resume-main">
        <div className="education">
          <div className="education-head">
            <span className="education-head-line"></span>
            <h3> Education </h3>
            <span className="education-head-line"></span>
          </div>
          <EducationSection
            qualification={"Diploma in Graphic Design "}
            university={"Dhaka University"}
            date={"2007 - 2010"}
          />
          <EducationSection
            qualification={"Diploma in Graphic Design "}
            university={"BACHELOR OF ARTS"}
            date={"2012 - 2015"}
          />
          <EducationSection
            qualification={"ARTIST OF COLLEGE"}
            university={"Dhaka University"}
            date={"2028 - 2020"}
          />
        </div>
        <div className="experience">
          <div className="education-head">
            <span className="education-head-line"></span>
            <h3> Experience </h3>
            <span className="education-head-line"></span>
          </div>
          <EducationSection
            qualification={"ARTIST OF COLLEGE"}
            university={"Dhaka University"}
            date={"2028 - 2020"}
          />
          <EducationSection
            qualification={"ARTIST OF COLLEGE"}
            university={"Dhaka University"}
            date={"2028 - 2020"}
          />{" "}
          <EducationSection
            qualification={"ARTIST OF COLLEGE"}
            university={"Dhaka University"}
            date={"2028 - 2020"}
          />
        </div>
        <Skills />
      </div>
    </div>
  );
}

function EducationSection({ qualification, university, date }) {
  return (
    <div className="education-section-main">
      <div className="education-section">
        <h3 className="qualification">{qualification}</h3>
        <div className="line-style">
          <span className="line"></span>
        </div>
        <h4 className="university">{university}</h4>
        <div className="line-style">
          <span className="line"></span>
        </div>
        <span className="date-education"> {date}</span>
      </div>
      <p className="education-section-paragraph">
        Morbi nulla arcu, pellentesque sed egestas in, tempor eget felis. Nullam
        tincidunt augue in leo feugiat, quis interdum nisi sollicitudin, quis
        interdum nisi sollicitudin
      </p>
    </div>
  );
}

function ExperienceSection({ qualification, university, date }) {
  return (
    <div className="education-section-main">
      <div className="education-section">
        <h3 className="qualification">{qualification}</h3>
        <div className="line-style">
          <span className="line"></span>
        </div>
        <h4 className="university">{university}</h4>
        <div className="line-style">
          <span className="line"></span>
        </div>
        <span className="date-education"> {date}</span>
      </div>
      <p className="education-section-paragraph">
        Morbi nulla arcu, pellentesque sed egestas in, tempor eget felis. Nullam
        tincidunt augue in leo feugiat, quis interdum nisi sollicitudin, quis
        interdum nisi sollicitudin
      </p>
    </div>
  );
}

const skillsValues = [
  { value: 80, "skill-name": "HTML" },
  { value: 75, "skill-name": "CSS" },
  { value: 90, "skill-name": "JAVASCRIPT" },
  { value: 95, "skill-name": "PHP" },
  { value: 90, "skill-name": "ANGULAR" },
  { value: 80, "skill-name": "REACT" },
  { value: 85, "skill-name": "MYSQL" },
  { value: 90, "skill-name": "LARAVEL" },
];

function Skills() {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="skills-container">
        {skillsValues.map((count) => {
          return (
            <SkillValue
              value={count["value"]}
              skillName={count["skill-name"]}
            />
          );
        })}
      </div>
    </div>
  );
}
// SkillValue function

let ctx;
let canvas = [];
let canvasCtx = [];
let canvasId = "";
let circleValue = 2;
let canvasWidth = 144;
let canvasColor = "red";

function SkillValue({ value, skillName }) {
  if (window.innerWidth < 700) {
    canvasWidth = 120;
  } else if (window.innerWidth < 901) {
    canvasWidth = 130;
  } else if (window.innerWidth < 1000) {
    canvasWidth = 130;
  } else {
    canvasWidth = 140;
  }
  function circleo() {
    if (document.getElementById(skillName)) {
      if (document.getElementById(skillName)) {
        for (let index = 0; index < 2; index++) {
          if (index === 0) {
            canvasId = skillName;
            circleValue = 2 * Math.PI;
            canvasColor = "red";
          } else {
            canvasId = skillName + "value";
            circleValue = ((2 * value) / 100) * Math.PI;
            canvasColor = "orange";
          }

          console.log(canvasColor, "+-+-+- ", circleValue);
          // document.getElementById(canvasId).style.display = "none";
          canvas[index] = document.getElementById(canvasId);
          canvasCtx[index] = canvas[index].getContext("2d");
          canvasCtx[index].beginPath();
          canvasCtx[index].arc(
            canvasWidth / 2,
            canvasWidth / 2,
            canvasWidth / 2 - 7,
            0,
            circleValue
          );
          canvasCtx[index].lineWidth = 6;
          canvasCtx[index].strokeStyle = canvasColor;

          canvasCtx[index].stroke();
        }
      }
    }
  }
  useEffect(() => {
    circleo();
  });

  return (
    <div className="main-circle-container">
      <div className="main-circle" style={{ height: canvasWidth }}>
        <canvas
          className="skill-circle-canvas"
          id={skillName}
          height={canvasWidth}
          width={canvasWidth}
        ></canvas>
        <canvas
          className="value-circle-canvas"
          id={skillName + "value"}
          height={canvasWidth}
          width={canvasWidth}
        ></canvas>
        <div className="skill-circle">
          <h3>{value}%</h3>
        </div>
      </div>
    </div>
  );
}

export default Resume;
