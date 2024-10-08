import React, { useEffect, useRef, useState } from "react";
import close from "../../assets/images/icons/red-close.png";

// Focused button

function headerFilterFocus(type, list) {
  for (let index = 0; index < list.length; index++) {
    document
      .getElementById(index + "-button")
      .classList.remove("background-focused-color");
  }
  document.getElementById(type).classList.add("background-focused-color");
}

function ImageListButtons({ choiseImage, portofolioSiderImage }) {
  return choiseImage.map((val, index) => {
    return (
      <span
        className={index === 0 ? "background-focused-color" : ""}
        id={index + "-button"}
        onClick={() => {
          portofolioSiderImage(index);
          headerFilterFocus(index + "-button", choiseImage);
        }}
      ></span>
    );
  });
}

let mainMarginValue = 0;
let currentStage = 0;
let prototypeImagesWidth = 0;
let prototypeDetails;

let faw = [];
let imageListState = false;

function PrototypeDetails() {
  const [marginVal, setMarginVal] = useState(0);
  const [choiseImage, setChoiseImage] = useState([]);

  useEffect(() => {
    prototypeImagesWidth =
      document.getElementById("prototype-images").offsetWidth;
    prototypeDetails = document.getElementById("prototype-details");
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

  function getLisOfImageLength() {
    setTimeout(() => {
      if (!imageListState) {
        faw = [];

        if (
          document
            .getElementById("prototype-images")
            .getAttribute("countImage") > 0
        ) {
          for (
            let index = 0;
            index <
            document
              .getElementById("prototype-images")
              .getAttribute("countImage");
            index++
          ) {
            faw.push(0);
          }
          setChoiseImage(faw);
          imageListState = true;
        }
      }
      getLisOfImageLength();
    }, 500);
  }
  getLisOfImageLength();

  function prototypeReviewHidden() {
    // reset focused
    portofolioSiderImage(0);
    headerFilterFocus(0 + "-button", choiseImage);
    document.getElementById("prototype-images").setAttribute("countImage", 0);
    imageListState = false;
    prototypeDetails.classList.add("prototype-review-hidden");
    setTimeout(() => {
      prototypeDetails.style.display = "none";
      prototypeDetails.style.opacity = "0";
    }, 400);
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
            <img src={close} alt="" />
          </span>
        </div>
        <div className="view-images">
          <div
            className="prototype-images"
            id="prototype-images"
            style={{ marginLeft: -marginVal }}
          ></div>
          <div className="choise-image-buttons" id="choise-image-buttons">
            {
              <ImageListButtons
                choiseImage={choiseImage}
                portofolioSiderImage={portofolioSiderImage}
              />
            }
          </div>
        </div>
        <div className="prototype-info">
          <div
            id="prototype-info-details"
            className="prototype-info-details"
          ></div>
          <div
            className="prototype-technologies"
            id="prototype-technologies"
          ></div>
        </div>

        <div className="prototype-description">
          <h2>Description</h2>
          <p
            id="prototype-description-content"
            className="prototype-description-content"
          ></p>
        </div>
      </div>
    </div>
  );
}

export default PrototypeDetails;
