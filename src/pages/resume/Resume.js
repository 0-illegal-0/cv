import React, { useEffect, useState } from "react";

function Resume() {
  return (
    <div className="resume section" id="resume">
      <h2>Resume</h2>
      <div className="resume-main">
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
  function kol() {
    skillsValues.forEach((element) => {
      return <h2>ho</h2>;
    });
  }
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

let ctx;
let canvas;
let keyLengthIndex = 0;

function SkillValue({ value, skillName }) {
  const [keyLength, SetkeyLength] = useState(value);

  function circleo() {
    if (document.getElementById(skillName)) {
      console.log("---- ", value);
      canvas = document.getElementById(skillName);
      ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(80, 80, 76, 0, ((2 * value) / 100) * Math.PI);
      ctx.lineWidth = 7;
      ctx.strokeStyle = "#444764"; //"#9425b95e";

      ctx.stroke();
    }
  }

  useEffect(() => {
    circleo();
  });

  return (
    <div className="main-circle">
      <canvas
        className="skill-circle-canvas"
        id={skillName}
        width="160"
        height="160"
      ></canvas>
      <div className="small-circle">
        <div className="skill-circle">
          <h3>{value}%</h3>
        </div>
      </div>
    </div>
  );
}

export default Resume;
