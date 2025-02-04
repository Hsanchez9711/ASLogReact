import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import fbLogo from "../images/facebook.png";
import igLogo from "../images/instagram.png";
import profileIcon from "../images/user-3.png";
import phoneIcon from "../images/phone-call.png";
import mailIcon from "../images/envelope.png";
import homeIcon from "../images/marker.png";
import { isMobileDevice } from "./utils.js";

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    prefix: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    number: ""
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  // Event handler for form submission
  const handleSubmit = event => {
    event.preventDefault();
    // Here you can handle the form submission logic (e.g., sending the data to a server)
    console.log("Form submitted:", formData);
    // Reset the form fields after submission
    setFormData({
      prefix: "",
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      number: ""
    });
  };

  const handlePhoneChange = value => {
    setPhoneNumber(value);
  };
  // Event handler for input changes
  const handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const formatEmailMessage = () => {
    // consider adding some more verification for this function
    const completeName =
      formData.prefix + " " + formData.firstName + " " + formData.lastName;
    const completeContact = phoneNumber + " " + formData.email;
    const message =
      "Hello A.S. Logstics Corp, I am interested in your services and would like to receive more information, please contact me regarding: " +
      formData.message +
      ". You can reach me (" +
      completeName +
      ") at the following phone number and email address: " +
      completeContact +
      ". We look forward to hearing from you regarding these inquiries!";

    var messageBody = "&body=" + encodeURIComponent(message);
    return messageBody;
  };

  return (
    <div className="row background-img">
      <div className="desktop-form-spacing">
        <div className="form-background">
        <h1 className="contact-us">
              <b>Speak to One of Our Logistics Professionals Today!</b>
            </h1>
        <div className=" form-and-contacts-container" id="contact-section ">
          <form className="form-request" onSubmit={handleSubmit}>
            <div className="input-fields-group">
            <div className="form-input prefix-input">
              <label htmlFor="prefix" />
              <select
                className="title-select"
                name="prefix"
                id="prefix"
                onChange={handleChange}
              >
                <option value=""> Title </option>
                <option value="Dr."> Dr. </option>
                <option value="Mr."> Mr. </option>
                <option value="Mrs."> Mrs. </option>
                <option value="Ms."> Ms. </option>
              </select>
            </div>
            <div className="form-input">
              <label htmlFor="first-name" />
              <input
                type="text"
                id="name"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="last-name" />
              <input
                type="text"
                id="name"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-input">
              <label htmlFor="email" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-input">
              <PhoneInput
                id="phone"
                name="phone"
                defaultCountry="US"
                maxLength="14"
                value={formData.number}
                onChange={handlePhoneChange}
                placeholder="Phone Number (e.g., xxx-xxx-xxxx)"
              />
            </div>

            <div className="form-input">
              <label htmlFor="message" />
              <textarea
                id="message"
                name="message"
                placeholder="Please tell us more about your needs"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <a
              className="form-submit-btn"
              href={
                "mailto:hectorsanchez97@yahoo.com?subject=Further%20Inquiry&body=" +
                formatEmailMessage()
              }
            >
              Contact Me
            </a>
            <iframe
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.564434661254!2d-106.23885022487111!3d31.755087935509046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e74110765a18b3%3A0x6bf0c9bd2c922946!2sA.S.%20Logistics%20Corp!5e0!3m2!1sen!2sus!4v1691275415039!5m2!1sen!2sus"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </form>
          <div className="contact-numbers-section glass-bg-blue">
          <h3>
              {" "}
              <img
                className="profile-icon"
                src={phoneIcon}
                alt="small icon with in the shape of a phone"
              />
              <u>Main Office:</u> (915) 590 - 2777{" "}
            </h3>
            <h3>
              {" "}
              <br />
              <img
                className="profile-icon"
                src={profileIcon}
                alt="small icon with default profile icon figure"
              />
              Ada Sanchez - President
            </h3>
            <h4>
              Mobile: (915) 726 - 4491 <br />
              Fax:(915) 852 - 0106 <br /> Email: ada@aslogisticsep.com <br />{" "}
            </h4>
            <h3>
              <br />
              <img
                className="profile-icon"
                src={profileIcon}
                alt="small icon with default profile icon figure"
              />
              Hector Sanchez - Operations Manager
            </h3>
            <h4>
              Mobile: (915) 471 - 5013 <br />
              Fax:915) 852- 0106
              <br /> Email: hsanchez@aslogisticsep.com
              <br />
            </h4>
            <h3>
              <br />
              <img
                className="profile-icon"
                src={mailIcon}
                alt="small icon with a small envelope"
              />
              <u>Mailing Address:</u>
            </h3>
            <h4>
              8900 Viscount Blvd. Suite # AN724
              <br /> El Paso, TX 79925
              <br />
            </h4>
            <h3>
              <br />
              <img
                className="profile-icon"
                src={homeIcon}
                alt="small icon representing a home"
              />
              <u>
                Physical Address:
                <br />
              </u>{" "}
            </h3>
            <h4>
              13979 Windermere Ave, El Paso, TX 79928 Monday-Friday 9am - 5pm
              <br />{" "}
            </h4>
            <a href="https://www.instagram.com/a.s.logisticscorp/?igshid=MzRlODBiNWFlZA%3D%3D">
              <img src={igLogo} className="insta-logo"></img>
            </a>
            <a href="https://www.facebook.com/AS.LOGISTIC.CORPORATION">
              <img src={fbLogo} className="facebook-logo"></img>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
