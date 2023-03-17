import React, {useRef} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from './Learn';
import emailjs from '@emailjs/browser';

function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wo1kije', 'template_19vdx6m', form.current, 'iBYhqT4UJAXbXb877')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <h1>Get in touch with us:</h1>
      
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
}

export default Contact;

