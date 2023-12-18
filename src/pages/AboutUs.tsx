import React from 'react';
import '../styles/AboutUs.css'; // Ensure you create an AboutUs.css for styling
import FeatureBox from '../components/FeatureBox';
const AboutUs: React.FC = () => {
    return (
        <div className="about-us-wrapper">
            {/* Hero Section */}
            <section className="about-us-hero d-flex justify-content-center text-white">
            <div className="row align-items-center feature-row">
                <div className="col-md-4 col-sm-12">
                    {/* <img src={leftAlignedImage} alt="Left aligned" className="img-fluid"/> */}
                    <div className='about-us-text-container'>
                    <h1>About Verified by VDV</h1>
                    <p>Pioneers in Diamond Business Compliance, Welcome to verified by VDV, where expertise meets innovation in the realm of compliance for the diamond industry. With over 30 years of unwavering commitment to the industry, we stand as a beacon of excellence, providing comprehensive solutions that bridge the gap between regulatory complexities and the dynamic world of the diamond industry.</p>
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
                {/* <div className="container position-relative text-green">
                    <h2>Our Mission</h2>
                    <p>Making Compliance Easy, Ensuring Security
                    Our mission is clear: to make compliance easy for the diamond industry. We do this by combining our extensive knowledge of regulatory frameworks with cutting-edge technology. Our aim is to provide a secure foundation for trading, allowing our clients to operate confidently in a world that has growing demands for the utmost in accountability and transparency.
                    </p>
                </div> */}
            </section>

            {/* Legacy Section */}
            {/* <section className="about-us-legacy text-center py-5">
                <div className="container">
                    <h2>Our Legacy</h2>
                    <p>Founded on a legacy of experience spanning three decades, verified by VDV was built to be at the forefront of compliance for the diamond industry. Our journey is rooted in a deep understanding of the industry's intricacies, evolving alongside the dynamic landscape to become a trusted partner for diamond businesses seeking excellence in compliance.</p>
                </div>
            </section> */}

            {/* Expertise Section with Interactive Cards */}
            <section className="about-us-expertise py-5">
                <div className="container">
                    <h2>Unparalleled Expertise</h2>
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body">
                                <h3>Finance</h3>
                                <p>At verified by VDV, our team brings together a wealth of experience in finance, accounting, legal and technology. Our professionals are not just experts in their respective fields but also possess a keen understanding of the nuances of the diamond industry. This unique blend of skills positions us as a versatile and reliable partner, capable of navigating the complex intersection of regulation and the diamond industry.</p>
                            </div>
                        </div>
                        {/* <div className="card">
                            <div className="card-body">
                                <h3>Legal</h3>
                                <p>Legal professionals...</p>
                            </div>
                        </div>
                        Add more cards for accounting, technology, etc. */}
                    </div>
                </div>
            </section>

            {/* More sections can be added here */}
        </div>
    );
};

export default AboutUs;
