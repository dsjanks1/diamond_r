import React, { useState } from 'react';
import '../styles/ContactUs.css'; // Ensure this file exists and contains the necessary styling
import homeImg from '../assets/contactUsIMG.png';
import dialingCodes from '../dialingCodes.json'; // Adjust the path to where your actual JSON file is located


const ContactUs: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [dialCode, setDialCode] = useState(dialingCodes[0].code);
  const [selectedDialCode, setSelectedDialCode] = useState(dialingCodes[0].dial_code);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    // Process form submission here
    alert(`Submission received from ${fullName} with dial code ${dialCode} and number ${number}`);
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <div className="image-container text-center">
        <img src={homeImg} alt="Contact Us" className="img-fluid" />
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
          <select
            id="dialCode"
            value={selectedDialCode}
            onChange={(e) => setSelectedDialCode(e.target.value)}
            required
          >
            {dialingCodes.map((country) => (
              <option key={country.code} value={country.dial_code}>
                {country.name} ({country.dial_code})
              </option>
            ))}
          </select>
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
