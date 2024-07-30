import React from "react";
import development from "../../assets/images/tech-icon/development.png";
import photography from "../../assets/images/tech-icon/photography.png";

const services = {
  "available-services": [
    {
      icon: development,
      title: "Web Development",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.",
    },
    {
      icon: photography,
      title: "Web Design",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.",
    },
    {
      icon: photography,
      title: "Photography",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.",
    },
    {
      icon: development,
      title: "Web Design",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.",
    },
    {
      icon: development,
      title: "Web Development",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.",
    },
    {
      icon: development,
      title: "Photography",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.",
    },
  ],
};

function Services() {
  return (
    <div className="section" id="services">
      <h2>Services</h2>
      <div className="services-body">
        <div className="available-services">
          {services["available-services"].map((value) => {
            return (
              <div className="service-content">
                <div>
                  <img alt="" src={value["icon"]} />
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
