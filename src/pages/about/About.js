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





/*
import { useEffect, useState } from "react";

// Replace the `src` values with your own images (imported files or URLs).
*/
const SLIDES = [
  { src: "https://picsum.photos/seed/ridge/1200/675", alt: "Mountain ridge at dawn", label: "Ridge" },
  { src: "https://picsum.photos/seed/shore/1200/675", alt: "Quiet shoreline", label: "Shore" },
  { src: "https://picsum.photos/seed/pines/1200/675", alt: "Pine forest in mist", label: "Pines" },
];

const INTERVAL_MS = 2000;

 function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance. The timer restarts whenever the slide changes,
  // so clicking a button always gives the full interval before the next move.
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index, paused]);

  return (
    <>
      <style>{css}</style>
      <section
        className="carousel"
        aria-roledescription="carousel"
        aria-label="Photo carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
                <div className="controls" role="group" aria-label="Choose a slide">
          {SLIDES.map((slide, i) => (
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
        <div className="viewport">
          <div
            className="track"
            style={{ transform: `translateX(-${index * 100}%)` }}
            aria-live={paused ? "polite" : "off"}
          >
            {SLIDES.map((slide, i) => (
              <figure
                className="slide"
                key={slide.label}
                aria-hidden={i !== index}
                aria-label={`${i + 1} of ${SLIDES.length}`}
              >
                <img src={slide.src} alt={slide.alt} loading={i === 0 ? "eager" : "lazy"} />
              </figure>
            ))}
          </div>
        </div>


      </section>
    </>
  );
}

const css = `
.carousel {
  --ink: #1d2b2a;
  --paper: #f3f6f5;
  --accent: #0f766e;
  width: min(100%, 880px);
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  display:flex;
  flex-direction: column;

}
.carousel .viewport {
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 16 / 9;
  background: var(--ink);
  width: 83%;
  height: 290px;
  margin: 0 auto;
}
.carousel .track {
  display: flex;
  height: 100%;
  transition: transform 600ms cubic-bezier(0.65, 0, 0.35, 1);
}
.carousel .slide {
  flex: 0 0 100%;
  margin: 0;
  height: 100%;
}
.carousel .slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.carousel .controls {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 20px;

}
.carousel .ctrl {
  flex: 1 1 0;
  max-width: 140px;
  padding: 10px 12px;
  border: 1.5px solid var(--ink);
  border-radius: 8px;
  background: transparent;
  color: var(--ink);
  font: inherit;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 200ms, color 200ms, border-color 200ms;
}
.carousel .ctrl:hover { background: var(--paper); }
.carousel .ctrl.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}
.carousel .ctrl:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}
@media (max-width: 480px) {
  .carousel { padding: 8px; }
  .carousel .ctrl { padding: 9px 6px; font-size: 0.875rem; }
}
@media (prefers-reduced-motion: reduce) {
  .carousel .track { transition: none; }
}
`;



export default About;
