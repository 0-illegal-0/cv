import React from "react";
import facebook from "../../assets/images/icons/contact/facebook.png";
import phone from "../../assets/images/icons/contact/phone.png";
import twitter from "../../assets/images/icons/contact/twitter.png";
import text from "../../assets/images/contact-text-1.png";

function Contact() {
  return (
    <div className="section" id="contact">
      <h2>Contact</h2>
      <div className="spacer"></div>

      <div className="contact-title">
        <div className="contact-welcome-text contact-background-text">
          <img src={text} />
        </div>
      </div>
      <div className="contact-body">
        <div className="contact-fields-left-side">
          <div className="contact-field">
            {" "}
            <input type="text" name="" placeholder="Your Name" />
          </div>
          <div className="contact-field">
            {" "}
            <input type="phone" name="" placeholder="Your Phone" />
          </div>

          <div className="contact-field">
            {" "}
            <input type="text" name="" placeholder="Your Email" />
          </div>
        </div>

        <div className="text-area">
          {" "}
          <textarea type="text" name="" placeholder="Message" />
        </div>
        <div className="contact-method">
          <div className="contact-icons">
            <div>
              {" "}
              <img src={facebook} alt="" />
            </div>
            <div>
              {" "}
              <img src={phone} alt="" />
            </div>
            <div>
              {" "}
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

//            <h2>I am waiting for your call</h2>

export default Contact;
