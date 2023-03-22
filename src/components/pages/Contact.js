import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactUs.css';

function Contact(props) {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wo1kije', 'template_19vdx6m', form.current, 'iBYhqT4UJAXbXb877')
      .then((result) => {
        console.log(result.text);
        setIsEmailSent(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  const resetForm = () => {
    form.current.reset();
    setIsEmailSent(false);
  };

  return (
    <div className='contactContainer'>
      {isEmailSent ? (
        <div className='confirmationMessage'>
          <p>Email sent successfully! ✅</p>
          <button className="sendButtonAgain" onClick={resetForm}>Send another email</button>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <h1>Get in touch with us:</h1>
          <label>Name</label>
          <input type='text' name='user_name' />
          <label>Email</label>
          <input type='email' name='user_email' />
          <label>Message</label>
          <textarea name='message' />
          <input type='submit' value='Send' className='sendButton' />
        </form>
      )}
    </div>
  );
}

export default Contact;
