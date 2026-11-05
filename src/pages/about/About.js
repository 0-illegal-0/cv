import React, { useRef, useState, useEffect } from "react";
import aboutData from "../../data/about.json";

import testImage from "../../assets/images/testimonials/pexels-duygugungor.jpg";

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

// view Achievements content

function ViewAchcontent({}) {
  return (
    <div className="view-content-container">
      <div>
      </div>
      <div> 
      </div> 
      <div>
      </div>
    </div>
  );
}

function About({ contentBody, jobName }) {
  return (
    <div id="about-content" className="about-content section" ref={contentBody}>
      <h2>About</h2>
      <div className="personal-informations">
        <h2>I'm {aboutData["name"]}</h2>
        <JobNameAnimation />
        <p>
          I am a <b>{aboutData["job-title"]}</b> {aboutData["summary"]}
        </p>
      </div>



                <Carousel />


      <div className="resume-protofolio-buttons" style={{ display: "non" }}>
        <button>Hire Me</button>
        <button> Portfolio</button>
      </div>
    </div>
  );
}




// Sliders


const INTERVAL_MS = 2000;

 function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance. The timer restarts whenever the slide changes,
  // so clicking a button always gives the full interval before the next move.
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % aboutData["sliders"].length);
    }, INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index, paused]);

  return (
    <>
      {/*<style>{css}</style>*/}
      <section
        className="carousel"
        aria-roledescription="carousel"
        aria-label="Photo carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <h2>What our clients say about us</h2>

        <div className="viewport">
          <div
            className="track"
            style={{ transform: `translateX(-${index * 100}%)` }}
            aria-live={paused ? "polite" : "off"}
          >
            {aboutData["sliders"].map((slide, i) => (
              <div   className="slide"
               key={slide.label}
>               
              <img src= {aboutData["sliders"][i]["image-src"]} /*process.env.PUBLIC_URL+slide["image-src"]*/  alt={slide.alt} />


              <p className="slide-content">{slide.content}</p>
              </div>
            ))}
          </div>
        </div>

                <div className="controls" role="group" aria-label="Choose a slide">
          {aboutData["sliders"].map((slide, i) => (
            <button
              key={slide.label}
              type="button"
              className={i === index ? "ctrl active" : "ctrl"}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            >
              {slide.label}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}


  {/*<figure
                className="slide"
                key={slide.label}
                aria-hidden={i !== index}
                aria-label={`${i + 1} of ${SLIDES.length}`}
              >
                <img src={slide.src} alt={slide.alt} loading={i === 0 ? "eager" : "lazy"} />
              </figure>*/}

export default About;
