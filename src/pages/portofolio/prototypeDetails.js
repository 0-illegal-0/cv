import React, { useEffect, useRef, useState } from "react";
import project8 from "../../assets/images/portofolio/project-1.jpg";

const prototypeImages = [
  { id: 0, image: project8 },
  { id: 1, image: project8 },
  { id: 2, image: project8 },
];

let mainMarginValue = 0;
let currentStage = 0;
function PrototypeDetails() {
  const [marginVal, setMarginVal] = useState(0);

  function portofolioSiderImage(index) {
    // console.log(currentStage, " **** ", index, " **** ", mainMarginValue);
    setTimeout(() => {
      if (currentStage > index) {
        if (
          mainMarginValue >
          document.getElementById("prototype-images").offsetWidth * index
        ) {
          mainMarginValue = mainMarginValue - 32;
          if (
            mainMarginValue <
            index * document.getElementById("prototype-images").offsetWidth
          ) {
            setMarginVal(
              index * document.getElementById("prototype-images").offsetWidth
            );
          } else {
            setMarginVal(mainMarginValue);
          }
          portofolioSiderImage(index);
        } else {
          currentStage = index;
        }
      } else {
        if (
          mainMarginValue <
          document.getElementById("prototype-images").offsetWidth * index
        ) {
          mainMarginValue = mainMarginValue + 32;
          if (
            mainMarginValue >
            index * document.getElementById("prototype-images").offsetWidth
          ) {
            setMarginVal(
              index * document.getElementById("prototype-images").offsetWidth
            );
          } else {
            setMarginVal(mainMarginValue);
          }
          portofolioSiderImage(index);
        } else {
          currentStage = index;
          console.log("..... In ELSE");
        }
      }
    }, 5);
    console.log("..... ", currentStage);
  }

  function lis() {
    setTimeout(() => {
      console.log("^^^ ", currentStage);
      lis();
    }, 300);
  }

  lis();

  return (
    <div className="prototype-details">
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
                onClick={() => {
                  portofolioSiderImage(val["id"]);
                }}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PrototypeDetails;
