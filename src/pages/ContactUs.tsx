import React, { useState } from 'react';
import '../styles/ContactUs.css'; // Ensure this file exists and contains the necessary styling
import homeImg from '../assets/contactUsIMG.png';
import dialingCodes from '../dialingCodes.json'; // Adjust the path to where your actual JSON file is located
import emailjs from 'emailjs-com';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="toast-container">
      {message}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const ContactUs: React.FC = () => {

  interface ToastState {
    show: boolean;
    message: string;
  }
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [hasSent, setHasSent] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedDialCode, setSelectedDialCode] = useState(dialingCodes[199].dial_code);
  const [toast, setToast] = useState<ToastState>({ show: false, message: '' });



  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000); // Close the toast after 3 seconds
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSent(true)
    // Asserting e.currentTarget as HTMLFormElement
    const form = e.currentTarget as HTMLFormElement;

    emailjs.sendForm('service_a3xo40q', 'template_0tr25q5', form, 'KbjYqm620mpAxJEOY')
        .then((result) => {
            console.log(result.text);
            setHasSent(false)
            showToast('Thank you for your details, we will be in touch');

            // Reset form and states if needed
        }, (error) => {
            console.log(error.text);
            setHasSent(false)
            alert(error.text);
        });
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
              name='user_name'
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
            name='dial_code'
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
              name='number'
            />
          </div>
          <div className="form-field">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name='user_email'
              required
            />
          </div>
          <div className="form-field">
            <textarea
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name='message'
              required
            />
          </div>
          <button type="submit" className="contact-us-submit-button" disabled={hasSent}>
            Send Message
          </button>
        </form>
      </section>
      {toast.show && <Toast message={toast.message} onClose={() => setToast({ show: false, message: '' })} />}
    </div>
  );
};

export default ContactUs;
