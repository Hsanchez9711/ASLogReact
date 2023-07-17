import React, { useState } from "react";

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Event handler for form submission
  const handleSubmit = event => {
    event.preventDefault();
    // Here you can handle the form submission logic (e.g., sending the data to a server)
    console.log("Form submitted:", formData);
    // Reset the form fields after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  // Event handler for input changes
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
