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
                <img src={imageOne} alt="Our Mission" className="img-responsive"/>
                <h3 className='text-dark'>Our Mission</h3>
                <p className='text-grey-light'>Making Compliance Easy, Ensuring Security
                    Our mission is clear: to make compliance easy for the diamond industry. We do this by combining our extensive knowledge of regulatory frameworks with cutting-edge technology. Our aim is to provide a secure foundation for trading, allowing our clients to operate confidently in a world that has growing demands for the utmost in accountability and transparency.</p>
                {/* <a href="#" className="discover-more">Discover More</a> */}

                {/* <h2>Our Mission</h2>
                    <p>Making Compliance Easy, Ensuring Security
                    Our mission is clear: to make compliance easy for the diamond industry. We do this by combining our extensive knowledge of regulatory frameworks with cutting-edge technology. Our aim is to provide a secure foundation for trading, allowing our clients to operate confidently in a world that has growing demands for the utmost in accountability and transparency.
                    </p> */}
            </div>
            
            <div className="col-lg-5 col-md-5 feature-box">
                <img src={imageOne} alt="KYB – Know Your Business" className="img-responsive"/>
                <h3 className='text-dark'>Our Legacy</h3>
                <p className='text-grey-light'>Founded on a legacy of experience spanning three decades, verified by VDV was built to be at the forefront of compliance for the diamond industry. Our journey is rooted in a deep understanding of the industry's intricacies, evolving alongside the dynamic landscape to become a trusted partner for diamond businesses seeking excellence in compliance.</p>
                
                </div>
        </div>
    </div>
    );
  };
  
  export default FeatureBox;