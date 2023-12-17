import React from 'react';
import '../styles/FeatureBoxFour.css'; // Make sure this file exists and contains the necessary styling
import imageOne from '../assets/diamondTerq.jpg'; // Update with the path to your first image
import imageTwo from '../assets/diamondTerq.jpg'; // Update with the path to your second image
import imageThree from '../assets/diamondTerq.jpg'; // Update with the path to your third image
import imageFour from '../assets/diamondTerq.jpg'; // Update with the path to your fourth image

const FeatureBoxFour: React.FC = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* Feature 1 */}
                <div className="col-12 col-md-3 feature-box">
                    <img src={imageOne} alt="KYC – Know Your Client" className="img-fluid"/>
                    <h3>KYC – Know Your Client</h3>
                    <p>Every De Beers Group diamond goes on an incredible journey</p>
                </div>
                
                {/* Feature 2 */}
                <div className="col-12 col-md-3 feature-box">
                    <img src={imageTwo} alt="KYB – Know Your Business" className="img-fluid"/>
                    <h3>KYB – Know Your Business</h3>
                    <p>Billions of years old, diamonds are one of nature's rarest and most beautiful gifts</p>
                </div>

                {/* Feature 3 */}
                <div className="col-12 col-md-3 feature-box">
                    <img src={imageThree} alt="Feature 3" className="img-fluid"/>
                    <h3>Feature 3 Title</h3>
                    <p>Description for feature three.</p>
                </div>
                
                {/* Feature 4 */}
                <div className="col-12 col-md-3 feature-box">
                    <img src={imageFour} alt="Feature 4" className="img-fluid"/>
                    <h3>Feature 4 Title</h3>
                    <p>Description for feature four.</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureBoxFour;
