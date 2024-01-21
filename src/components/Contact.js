import React, { useState } from "react";
import Map from "../images/map.jpg";
import User from "../images/smartphone 1.png";
import Phone from "../images/smartphone 2.png";
import Email from "../images/smartphone 2.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const formFields = [
    { id: "name", label: 'Full Name', placeholder: 'Enter your full name', imageSrc: User, type: "text" },
    { id: "mobile", label: 'Contact Number', placeholder: 'Enter your contact number', imageSrc: Phone, type: "tel" },
    { id: "email", label: 'Email Address', placeholder: 'Enter your email address', imageSrc: Email, type: "email" },
  ];

  const submitToGoogleForm = () => {
    const apiUrl = "https://sheetdb.io/api/v1/fjmlcv034uu39";
    const formDataObject = new FormData();

    Object.keys(formData).forEach(key => {
      formDataObject.append(`data[${key}]`, formData[key]);
    });

    console.log("formData: ", formData);
    fetch(apiUrl, {
      method: 'POST',
      body: formDataObject,
    })
    .then(response => response.json())
    .then(data => {
      console.log('API Response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  const submitToApi = () => {
    const apiUrl = 'https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-9834102082/insertLead';

    console.log("formData: ", formData);
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if(response.status === 200){
          setFormData({
            name: "",
            email: "",
            mobile: ""
          });
        }else{
          alert("There's some error, Please try again!!");
        }
      })
      .catch(error => {
        alert("There's some error, Please try again!!");
      });
  }



  const handleSubmit = (e) =>{
    e.preventDefault();
    submitToGoogleForm();
    submitToApi();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact-cnt white flex cnt">
      <div className="contact-form">
        <div className="contact-heading-text">
          <h1 className="contact-main-heading">Contact Us</h1>
          <p className="contact-text grey-text">
            Please enter details below and we shall get in touch with you
            shortly
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {formFields.map((field, index) => (
            <div key={index} className="form-field">
              <img src={field.imageSrc} alt={field.label} />
              {/* <div className="poppins ml-20">{field.label}</div> */}
              <input
                type={field.type}
                className="input-contact"
                name={field.id}
                value={formData[field.id]}
                placeholder={field.label}
                onChange={handleChange}
              />
            </div>
          ))}
          <button type="submit" className="poppins submit-btn">
            Submit
          </button>
        </form>
        {/* <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <br />

          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <br />

          <label>
            Mobile:
            <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form> */}
      </div>
      <div className="image-blurred-edge">
        <div className="foggy-overlay"></div>
        <img className="map" src={Map} alt="Map" />
      </div>
    </div>
  );
};

export default Contact;
