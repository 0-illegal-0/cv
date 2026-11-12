import { react, useEffect } from "react";

import servicesData from "../../data/services.json";

const serviceseImage = [];

let previewServic;
let previewServiceImage;
let serviceDetailsTopSection;
let serviceDetailsBottomSection;

function previewPageSections(title, id, key) {
  return ` <div class = services-details-design-box>
                <div>
                    <span class="services-details-design-linear"></span>
                    <span>${title}</span>
                    <b>+${servicesData["available-services"][id][key]}</b>
                </div>
  </div>
  `;
}

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
    serviceDetailsTopSection = document.getElementById(
      "services-details-top-section",
    );
    serviceDetailsBottomSection = document.getElementById(
      "services-details-bottom-section",
    );
  });

  function previewService(id) {
    previewServiceImage.innerHTML = "";
    serviceDetailsTopSection.innerHTML = "";
    serviceDetailsBottomSection.innerHTML = "";
    previewServiceImage.innerHTML = `<img src=${servicesData["available-services"][id]["preview-service-image"]} /> `;
    serviceDetailsTopSection.innerHTML = `
    ${previewPageSections("Completed Task", id, "completed-task")}
    ${previewPageSections("Years of Experience", id, "experience")}
    ${previewPageSections("Supported Projects", id, "supported-projects")}
    ${previewPageSections("Developing", id, "developing")}`;
    serviceDetailsBottomSection.innerHTML = `<div class = service-preview-description><p>${servicesData["available-services"][id]["preview-description"]}</P></div>`;

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

/*

       <div class = services-details-design-box><div><span class="services-details-design-linear"></span><span>Completed Task </span><b>+${servicesData["available-services"][id]["completed-task"]}</b></div></div>


*/
