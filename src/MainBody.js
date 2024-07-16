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

import About from "./pages/about/About.js";
import JobNameAnimation from "./pages/about/About.js";
import Resume from "./pages/resume/Resume.js";
import Portofolio from "./pages/portofolio/Portofolio.js";
import Services from "./pages/services/Services.js";
import Contact from "./pages/contact/Contact.js";

// main Icon

function MainIcon({ contentBody, innerHeight }) {
  const [contentBodyWidth, setContentBodyWidth] = useState(0);
  const [contentBodyHeight, setContentBodyHeight] = useState(0);

  function getBottoContentBody() {
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

//content-body

function MainBody({ innerHeight }) {
  const contentBody = useRef();
  return (
    <div id="main-content-body" className="main-content-body">
      <div className="about-box" id="content-body-list">
        <About contentBody={contentBody} />
        <Resume id="resume" />
        <Portofolio />
        <Services />
        <Contact />
      </div>
      <div className="bottom">
        <MainIcon contentBody={contentBody} innerHeight={innerHeight} />
      </div>
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

export default MainBody;
