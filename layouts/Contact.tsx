import React from "react";
import { FiPhone, FiMail, FiMapPin, FiLinkedin } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import ReactGA from "react-ga4";

import Label from "../components/Label";

import CONSTANT from "../public/constant";
import { GA_CATEGORIES } from "../public/constant";

const Contact = () => {
  const onSubmitClick = async (e: any) => {
    e.preventDefault();

    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.buttonClick,
      action: "Send Message",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "Sengkhun Lim" }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <div id="contact" className="section-container contact-section">
      <div className="container">
        <h1 className="section-title">Contact Me</h1>
        <h6 className="section-subtitle">
          Get in touch for any inquiries or collaborative opportunities
        </h6>
        <div className="row">
          {/* left panel */}
          <div className="col-12 col-md-5 left-panel">
            {/* phone */}
            {/* <Label
              icon={<FiPhone />}
              title="Call Me"
              subtitle={CONSTANT.phone}
              href={`tel:${CONSTANT.phone}`}
            /> */}

            {/* email */}
            <Label
              icon={<FiMail />}
              title="Email"
              subtitle={CONSTANT.email}
              href={`mailto:${CONSTANT.email}`}
            />

            {/* linkedin */}
            <Label
              icon={<FiLinkedin />}
              title="LinkedIn"
              subtitle={CONSTANT.linkedInLink}
              href={CONSTANT.linkedInLink}
              newTab={true}
            />

            {/* location */}
            <Label
              icon={<FiMapPin />}
              title="Location"
              subtitle={CONSTANT.location}
              href={CONSTANT.locationLink}
              newTab={true}
            />
          </div>

          {/* right panel */}
          <div className="col-12 col-md-7 right-panel">
            <form onSubmit={onSubmitClick}>
              <div className="row">
                <div className="form-floating col-12 col-md-6">
                  <input type="text" className="form-control" />
                  <label>Name</label>
                </div>
                <div className="form-floating col-12 col-md-6">
                  <input type="email" className="form-control" />
                  <label>Email</label>
                </div>
              </div>
              <div className="row">
                <div className="form-floating col-12">
                  <input type="text" className="form-control" />
                  <label>Project</label>
                </div>
              </div>
              <div className="row">
                <div className="form-floating col-12">
                  <textarea className="form-control" rows={5} />
                  <label>Message</label>
                </div>
              </div>
              <button type="submit" title="Submit" onClick={onSubmitClick}>
                Send Message <AiOutlineSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
