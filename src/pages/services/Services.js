import { react, useEffect } from "react";

import servicesData from "../../data/services.json";

const serviceseImage = [];

let previewServic;
let previewServiceImage;
let serviceDetailsTopSection;
let servicePreviewDescription;

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
    servicePreviewDescription = document.getElementById(
      "services-details-bottom-section",
    );
  });

  function previewService(id) {
    previewServiceImage.innerHTML = "";
    serviceDetailsTopSection.innerHTML = "";
    servicePreviewDescription.innerHTML = "";
    previewServiceImage.innerHTML = `<img src=${servicesData["available-services"][id]["preview-service-image"]} /> `;
    serviceDetailsTopSection.innerHTML = `
    ${previewPageSections("Completed Task", id, "completed-task")}
    ${previewPageSections("Years of Experience", id, "experience")}
    ${previewPageSections("Supported Projects", id, "supported-projects")}
    ${previewPageSections("Developing", id, "developing")}`;
    servicePreviewDescription.innerHTML = `<div class = service-preview-description><p>${servicesData["available-services"][id]["preview-description"]}</P></div>`;
    servicePreviewDescription.innerHTML += `<div class = promotional-text>
                                                    <p>${servicesData["available-services"][id]["promotional-text"]}</P>
                                            </div>`;
    previewServic.classList.remove("preview-service-hidden");
    previewServic.classList.add("preview-service-show");
    previewServic.style.display = "flex";
    previewServic.style.opacity = "1";
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

        <div className="rules-of-work">
          {servicesData["rules-of-work"].map((value, index) => {
            return (
              <div>
                <h3>{value["title"]}</h3>
                <p>{value["text"]}</p>
              </div>
            );
          })}
        </div>

        <div className="services-quotation">
          <span>
            <img src={servicesData["icon-quotation"]} alt="" />
          </span>
          <p>{servicesData["quotation-text"]}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
