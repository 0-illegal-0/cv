import React, { useEffect, useRef, useState } from "react";
import project8 from "../../assets/images/portofolio/project-1.jpg";

const prototypeImages = [project8, project8, project8];

function PrototypeImages({ mainMarginValue = 0 }) {
  const [marginVal, setMarginVal] = useState(0);

  function portofolioSiderImage(index) {
    setTimeout(() => {
      if (marginValue < 960 * index) {
        setMarginVal((v) => v + 20);
        portofolioSiderImage();
        console.log("..... ", marginValue);
      }
    }, 10);
  }
  marginValue = marginVal;

  useEffect(() => {
    setMarginVal(mainMarginValue);

    console.log(marginVal);
  });
  return (
    <div
      className="prototype-images"
      id="prototype-images"
      style={{ marginLeft: -marginVal }}
    >
      {prototypeImages.map((val) => {
        return <img alt="" src={val} />;
      })}
    </div>
  );
}

let marginValue = 0;
let mainMarginValue = 0;

let buttonIndex = 0;

function PrototypeDetails() {
  const [marginValT, setMarginValT] = useState(0);

  function fog(index) {
    mainMarginValue = 600;
    setMarginValT(600);
    setTimeout(() => {
      /*  if (mainMarginValue < 960 * index) {
        mainMarginValue = mainMarginValue + 20;
        fog();
        console.log("..... ", mainMarginValue);
      }*/
    }, 10);
  }
  return (
    <div className="prototype-details">
      <div className="view-images">
        <PrototypeImages mainMarginValue={marginValT} />
        <div className="choise-image-buttons">
          {prototypeImages.map((val) => {
            buttonIndex = buttonIndex + 1;
            console.log("+-+-+-+", buttonIndex);

            return (
              <span
                onClick={() => {
                  fog(buttonIndex);
                  // portofolioSiderImage(buttonIndex);
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
