import React from "react";

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

export default Resume;
