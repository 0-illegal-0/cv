import React, { useEffect, useRef, useState } from "react";
import project8 from "../../assets/images/portofolio/project-1.jpg";
import close from "../../assets/images/icons/red-close.png";
import techIconTwo from "../../assets/images/tech-icon/css.png";

const prototypeReviw = {
  client: "Johnson Tomas",
  category: "UI/UX Design",
  duration: "40 days",
  prototypeImages: [
    { id: 0, image: project8 },
    { id: 1, image: project8 },
    { id: 2, image: project8 },
  ],
};
const prototypeImages = [
  { id: 0, image: project8 },
  { id: 1, image: project8 },
  { id: 2, image: project8 },
];

// Focused button

function headerFilterFocus(type) {
  for (let index = 0; index < prototypeImages.length; index++) {
    document
      .getElementById(prototypeImages[index]["id"] + "-button")
      .classList.remove("background-focused-color");
    console.log("TYPE ", type);
  }
  document.getElementById(type).classList.add("background-focused-color");
}

let mainMarginValue = 0;
let currentStage = 0;
let prototypeImagesWidth = 0;
let prototypeDetails;

function PrototypeDetails() {
  const [marginVal, setMarginVal] = useState(0);
  useEffect(() => {
    prototypeImagesWidth =
      document.getElementById("prototype-images").offsetWidth;
    prototypeDetails = document.getElementById("prototype-details");
  });

  function prototypeReviewHidden() {
    prototypeDetails.classList.add("prototype-review-hidden");
    prototypeDetails.style.opacity = "0";
    setTimeout(() => {
      prototypeDetails.style.display = "none";
    }, 410);
  }

  function portofolioSiderImage(index) {
    setTimeout(() => {
      if (currentStage > index) {
        if (mainMarginValue > prototypeImagesWidth * index) {
          mainMarginValue = mainMarginValue - 32;
          if (mainMarginValue < index * prototypeImagesWidth) {
            setMarginVal(index * prototypeImagesWidth);
          } else {
            setMarginVal(mainMarginValue);
          }
          portofolioSiderImage(index);
        } else {
          currentStage = index;
        }
      } else {
        if (mainMarginValue < prototypeImagesWidth * index) {
          mainMarginValue = mainMarginValue + 32;
          if (mainMarginValue > index * prototypeImagesWidth) {
            setMarginVal(index * prototypeImagesWidth);
          } else {
            setMarginVal(mainMarginValue);
          }
          portofolioSiderImage(index);
        } else {
          currentStage = index;
        }
      }
      console.log("boook ", marginVal);
    }, 5);
  }

  return (
    <div className="prototype-details" id="prototype-details">
      <div className="prototype-container">
        <div className="close">
          <span
            onClick={() => {
              prototypeReviewHidden();
            }}
          >
            <img src={close} />
          </span>
        </div>
        <div className="view-images">
          <div
            className="prototype-images"
            id="prototype-images"
            style={{ marginLeft: -marginVal }}
          ></div>
          <div className="choise-image-buttons">
            {prototypeImages.map((val) => {
              return (
                <span
                  className={val["id"] === 0 ? "background-focused-color" : ""}
                  id={val["id"] + "-button"}
                  onClick={() => {
                    portofolioSiderImage(val["id"]);
                    headerFilterFocus(val["id"] + "-button");
                  }}
                ></span>
              );
            })}
          </div>
        </div>
        <div className="prototype-info">
          <div className="prototype-client ">
            <b>Client :</b>
            <span>prototypeReviw</span>
          </div>
          <div className="prototype-category"></div>
          <b>Category :</b>
          <span>UI/UX Design</span>
          <div className="prototype-date"></div>
          <b>Duration :</b>
          <span>40 Days</span>
          <div
            className="prototype-technologies"
            id="prototype-technologies"
          ></div>
        </div>
        <div className="prototype-description">The Description Here</div>
      </div>
    </div>
  );
}
export default PrototypeDetails;
