import React, { useState } from 'react';
import '../styles/ContactUs.css'; // Ensure this file exists and contains the necessary styling
import homeImg from '../assets/HomeIconTick.png';

const ContactUs: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    // Process form submission here
    // For example, send `fullName`, `email`, and `message` to your backend server
    alert(`Submission received from ${fullName}`);
  };

  return (
    <div className="contact-us-container">
      <h1 className="text-center">Contact Us</h1>
      <div className="image-container text-center">
        <img src={homeImg} alt="Placeholder" className="centered-image" />
      </div>
      <section className="form-section">
        <form onSubmit={submit} className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
