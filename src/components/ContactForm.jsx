import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

const ContactForm = () => {
  const handleOnSubmit = () => {
    console.log("handling the submission");
  };

  return (
    <div className="ContactForm">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
