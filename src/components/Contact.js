import React from "react";
import Map from "../images/map.jpg";
import User from "../images/smartphone 1.png";
import Phone from "../images/smartphone 2.png";
import Email from "../images/smartphone 2.png";

const Contact = () => {
  const formFields = [
    { label: 'Full Name', placeholder: 'Enter your full name', imageSrc: User },
    { label: 'Contact Number', placeholder: 'Enter your contact number', imageSrc: Phone },
    { label: 'Email Address', placeholder: 'Enter your email address', imageSrc: Email },
  ];

  return (
    <div className="contact-cnt white flex cnt">
      <div className="contact-form">
        <div className="contact-heading-text">
          <h1 className="contact-main-heading">Contact Us</h1>
          <p className="contact-text grey-text">
            Please enter details below and we shall get in touch with you shortly
          </p>
        </div>
        <form>
          {formFields.map((field, index) => (
            <div key={index} className="form-field">
              <img src={field.imageSrc} alt={field.label} />
              <div className="poppins ml-20">{field.label}</div>
            </div>
          ))}
         
        </form>
        <button className="poppins submit-btn">Submit</button>
      </div>
      <div className="image-blurred-edge">
        <div className="foggy-overlay"></div>
        <img className="map" src={Map} alt="Map" />
      </div>
    </div>
  );
};

export default Contact;
