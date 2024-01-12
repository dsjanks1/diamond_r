import React from 'react';
import '../styles/FeatureBox.css'; // Make sure to create and import a CSS file for custom styling
import imageOne from '../assets/lifescycle.png'; // Update with the path to your image

const FeatureBox: React.FC = () => {
    return (
        <div className="container">
        <div className="row justify-content-center">
            {/* The use of offset-md here assumes Bootstrap 4+ */}
            <div className="col-lg-5 col-md-5 feature-box order-sm-1">
            <h3 className='text-dark'>Our Legacy</h3>
                <p className='text-grey-light'>Founded on a legacy of experience spanning three decades, <span className='text-green'>verified</span> by VDV was built to be at the forefront of compliance for the diamond industry. Our journey is rooted in a deep understanding of the industry's intricacies, to become a trusted partner for diamond businesses seeking excellence in compliance.</p>
            <div className='hr-line-container'>
                <div className="hr-line-2"></div>
            </div>
                <h3 className='text-dark'>Our Mission</h3>
                <p className='text-grey-light'>Make Compliance Easy for the diamond industry. We do this by combining our extensive knowledge of regulatory frameworks with cutting-edge technology. Our aim is to provide a secure foundation for trading, allowing our clients to operate confidently in a world that has growing demands for the utmost in accountability and transparency.</p>

            </div>
            
            <div className="col-lg-5 col-md-5 feature-box order-sm-2">
            <img src={imageOne} alt="Our Mission" className="img-responsive"/>          
                
                </div>
        </div>
    </div>
    );
  };
  
  export default FeatureBox;