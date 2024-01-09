import React from 'react';
import '../styles/Footer.css'; // Make sure to create this CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Address:</h4>
          <p>1st Floor, The Paragon I</p>
          <p>1 Kramer Road</p>
          <p>Bedfordview, 2007</p>
        </div>
        <div className="footer-column">
        <h4>Contact:</h4>
          <p>+27 67 414 5776</p>
          <p>            <a href="mailto:kyc@vdvtrading.co.za" className="footer-email">
              kyc@vdvtrading.co.za
            </a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
