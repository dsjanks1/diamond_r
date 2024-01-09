import React, { useState } from 'react';
import '../styles/ContactUs.css'; // Ensure this file exists and contains the necessary styling
import homeImg from '../assets/contactIMG.png';

const ContactUs: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    // Process form submission here
    alert(`Submission received from ${fullName}`);
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <div className="image-container text-center">
        <img src={homeImg} alt="Contact Us" className="contact-us-image" />
      </div>
      <section className="contact-us-form-section">
        <form onSubmit={submit} className="contact-us-form">
          <div className="form-field">
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <input
              type="number"
              id="number"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <textarea
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="contact-us-submit-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
