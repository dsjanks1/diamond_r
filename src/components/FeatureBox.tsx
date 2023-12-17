import React from 'react';
import '../styles/FeatureBox.css'; // Make sure to create and import a CSS file for custom styling
import imageOne from '../assets/diamondTerq.jpg'; // Update with the path to your image
import imageTwo from '../assets/diamondSandBack.jpg'; // Update with the path to your image

const FeatureBox: React.FC = () => {
    return (
        <div className="container">
        <div className="row justify-content-center">
            {/* The use of offset-md here assumes Bootstrap 4+ */}
            <div className="col-lg-5 col-md-5 feature-box">
                <img src={imageOne} alt="KYC – Know Your Client" className="img-responsive"/>
                <h3>KYC – Know Your Client</h3>
                <p>Every De Beers Group diamond goes on an incredible journey</p>
                <a href="#" className="discover-more">Discover More</a>
            </div>
            
            <div className="col-lg-5 col-md-5 feature-box">
                <img src={imageOne} alt="KYB – Know Your Business" className="img-responsive"/>
                <h3>KYB – Know Your Businesss</h3>
                <p>Billions of years old, diamonds are one of nature's rarest and most beautiful gifts</p>
                <a href="#" className="discover-more">Discover More</a>
            </div>
        </div>
    </div>
    );
  };
  
  export default FeatureBox;