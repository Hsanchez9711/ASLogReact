import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

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

  return (
    <div className="centered-form">
      <form className="form-parent" onSubmit={handleSubmit}>
        <h1 className="contact-us">
          {" "}
          <b>Contact Us</b>
        </h1>
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
            placeholder="Please tell us more about your inquiry"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
