import React from 'react';
import '../styles/AboutUs.css'; // Ensure you create an AboutUs.css for styling
import FeatureBox from '../components/FeatureBox';
const AboutUs: React.FC = () => {
    return (
        <div className="about-us-wrapper">
            {/* Hero Section */}
            <section className="about-us-hero d-flex justify-content-center text-white">
            <div className="row align-items-center about-row">
                <div className="col-md-10 col-sm-12">
                    {/* <img src={leftAlignedImage} alt="Left aligned" className="img-fluid"/> */}
                    <div className='about-us-text-container'>
                    <h3>Pioneers in Diamond Business Compliance</h3>
                    <p>Welcome to <span className='text-green'>verified</span> by VDV, where expertise meets innovation in the realm of compliance for the diamond industry. With over 30 years of unwavering commitment to the industry, we stand as a beacon of excellence, providing comprehensive solutions that bridge the gap between regulatory complexities and the dynamic world of the diamond industry.</p>
                </div>
                </div>
            </div>
            </section>

            {/* Mission Section with Parallax Effect */}
            <section className="about-us-mission">
                <div className="parallax-background"></div>
               <div className='mission-container'>
                <FeatureBox></FeatureBox>
               </div>

            </section>

            {/* Expertise Section with Interactive Cards */}
            <section className="about-us-expertise">
            <div className="text-white legacy-container">
                <div className="home-content">
                    <h3 className="unparalleled-heading">Unparalleled Expertise</h3>
                    <p className="unparalleled-description">
                    At <span className='text-green'>verified</span> by VDV, our team brings together a wealth of experience in finance, accounting, legal and technology. Our professionals are not just experts in their respective fields but also possess a keen understanding of the nuances of the diamond industry. This unique blend of skills positions us as a versatile and reliable partner, capable of navigating the intersection of regulation and the diamond industry.
                    </p>
                </div>
            </div>
            </section>

            {/* More sections can be added here */}
        </div>
    );
};

export default AboutUs;
