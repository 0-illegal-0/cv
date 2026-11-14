import close from "../../assets/images/icons/red-close.png";

let previewServiceCloseButtonState = false;

function Previewervice() {
  return (
    <div className="preview-service" id="preview-service">
      <div className="preview-service-container">
        <span
          className="preview-service-close"
          onClick={async () => {
            if (previewServiceCloseButtonState) {
              document
                .getElementById("preview-service")
                .classList.remove("preview-service-hidden");
              document
                .getElementById("preview-service")
                .classList.add("preview-service-show");

              document.getElementById("preview-service").style.display = "none";
              document.getElementById("preview-service").style.opacity = "0";
            } else {
              document
                .getElementById("preview-service")
                .classList.add("preview-service-hidden");
              document
                .getElementById("preview-service")
                .classList.remove("preview-service-show");

              const delay = (ms) =>
                new Promise((resolve) => setTimeout(resolve, ms));
              await delay(370);

              document.getElementById("preview-service").style.opacity = "0";
            }
          }}
        >
          <img src={close} alt="" />
        </span>
        <div className="preview-service-image" id="preview-service-image"></div>
        <div className="services-details">
          <div
            className="services-details-top-section"
            id="services-details-top-section"
          ></div>
          <div
            className="services-details-bottom-section"
            id="services-details-bottom-section"
          ></div>
        </div>
      </div>
    </div>
  );
}
export default Previewervice;
