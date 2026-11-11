import { react, useEffect } from "react";

import servicesData from "../../data/services.json";

const serviceseImage = [];

let previewServic;
let previewServiceImage;
let serviceDetails;

function getImageData() {
  for (
    let index = 0;
    index < servicesData["available-services"].length;
    index++
  ) {
    serviceseImage.push(servicesData["available-services"][index]["icon"]);
  }
}
getImageData();

function Services() {
  useEffect(() => {
    previewServic = document.getElementById("preview-service");
    previewServiceImage = document.getElementById("preview-service-image");
    serviceDetails = document.getElementById("services-details");
  });

  function previewService(id) {
    previewServiceImage.innerHTML = "";

    previewServiceImage.innerHTML =
      "<img src= " +
      servicesData["available-services"][id]["preview-service-image"] +
      " />";

    previewServic.classList.remove("prototype-review-hidden");
    previewServic.classList.add("prototype-review-show");
    previewServic.style.display = "flex";
    previewServic.style.opacity = "1";
    previewServic.style.zIndex = "99999";
  }

  return (
    <div className="section" id="services">
      <h2>Services</h2>
      <div className="services-body">
        <div className="available-services">
          {servicesData["available-services"].map((value, index) => {
            return (
              <div
                className="service-content"
                onClick={() => {
                  previewService(index);
                }}
              >
                <div>
                  <img alt="" src={serviceseImage[index]} />
                  <h2> {value["title"]}</h2>
                  <p>{value["description"]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
