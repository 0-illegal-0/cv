import React, { useEffect, useRef, useState } from "react";
import project8 from "../../assets/images/portofolio/project-1.jpg";

const prototypeImages = [
  { id: 0, image: project8 },
  { id: 1, image: project8 },
  { id: 2, image: project8 },
];

// Focused button

function headerFilterFocus(type) {
  for (let index = 0; index < prototypeImages.length; index++) {
    document
      .getElementById(prototypeImages[index]["id"])
      .classList.remove("background-focused-color");
  }
  document.getElementById(type).classList.add("background-focused-color");
}

let mainMarginValue = 0;
let currentStage = 0;
let prototypeImagesWidth = 0;

function PrototypeDetails() {
  const [marginVal, setMarginVal] = useState(0);
  useEffect(() => {
    prototypeImagesWidth =
      document.getElementById("prototype-images").offsetWidth;
  });

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
    }, 5);
  }

  return (
    <div className="prototype-details">
      <div className="prototype-container">
        <div className="view-images">
          <div
            className="prototype-images"
            id="prototype-images"
            style={{ marginLeft: -marginVal }}
          >
            {prototypeImages.map((val) => {
              return <img alt="" src={val["image"]} />;
            })}
          </div>
          <div className="choise-image-buttons">
            {prototypeImages.map((val) => {
              return (
                <span
                  className={
                    val["id"] === 0 ? "background-focused-color" : null
                  }
                  id={val["id"]}
                  onClick={() => {
                    portofolioSiderImage(val["id"]);
                    headerFilterFocus(val["id"]);
                  }}
                ></span>
              );
            })}
          </div>
        </div>
        <div className="prototype-info"></div>
        <div className="prototype-description">The Description Here</div>
      </div>
    </div>
  );
}
export default PrototypeDetails;
