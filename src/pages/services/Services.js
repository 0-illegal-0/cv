import React from "react";
import servicesData from "../../data/services.json";
const serviceseImage = [];
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
  return (
    <div className="section" id="services">
      <h2>Services</h2>
      <div className="services-body">
        <div className="available-services">
          {servicesData["available-services"].map((value, index) => {
            return (
              <div className="service-content">
                <div>
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + serviceseImage[index]}
                  />
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
