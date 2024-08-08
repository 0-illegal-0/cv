import React, { useEffect, useState, useRef } from "react";
import aboutData from "../../data/resume.json";

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
          {aboutData["education"].map((v) => {
            return (
              <EducationSection
                qualification={v["​certificate"]}
                university={v["university"]}
                date={v["duration-date"]}
                description={v["description"]}
              />
            );
          })}
        </div>
        <div className="experience">
          <div className="education-head">
            <span className="education-head-line"></span>
            <h3> Experience </h3>
            <span className="education-head-line"></span>
          </div>
          {aboutData["education"].map((v) => {
            return (
              <EducationSection
                qualification={v["​certificate"]}
                university={v["university"]}
                date={v["duration-date"]}
                description={v["description"]}
              />
            );
          })}
        </div>
        <Skills />
      </div>
    </div>
  );
}

function EducationSection({ qualification, university, date, description }) {
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
      <p className="education-section-paragraph">{description}</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="skills-container">
        {aboutData["skills"].map((count) => {
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
            canvasColor = "#dcdcf5";
          } else {
            canvasId = skillName + "value";
            circleValue = ((2 * value) / 100) * Math.PI;
            canvasColor = "#a8a6f5";
          }

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
      <h3 className="title">{skillName}</h3>
    </div>
  );
}

export default Resume;
