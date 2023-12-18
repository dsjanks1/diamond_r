import React, {useState} from 'react';
import '../styles/Home.css';
import homeImg from '../assets/HomeIconTick.png';
import ScrollAnimated from '../components/ScrollAnimated';
import FeatureBox from '../components/FeatureBox';
import DualFeatureBox from '../components/DualFeatureBox';
import FeatureBoxFour from '../components/FeatureBoxFour'
const Home: React.FC = () => {
    const [activeTab, setActiveTab] = useState('kyc');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };
    return (
        <div>
        <div className='text-secondary land-container'>
        <ScrollAnimated>
            <div className="container py-lg-6 text-center d-flex align-items-center">
                <div className="align-items-lg-center home-welcome-container">
                    <div className='offset-lg-1  p-5 p-lg-0'>
                        <div className='mb-50'>
                        <h1 className="home-title">
                        Welcome to <span className='text-green'>verified</span> by VDV
                    </h1>
                        </div>
               
                    <img src={homeImg} alt="Logo" className="img-fluid mb-50"/>
                    </div>
                    <div className='order-lg-1 text-lg-left '>

                    <h2 className='home-title-secondary'>KYC and KYB for the Diamond Industry</h2>
                    <p className="home-description">
                        In the intricate world of diamond trading, where trust and transparency are paramount, 
                        verified by VDV stands as your reliable partner, combining cutting-edge technology with 
                        a human touch to ensure compliance with international regulators.
                    </p>
                    </div>
                </div>
            </div>
            </ScrollAnimated>
            </div>
            {/* <FeatureBoxFour></FeatureBoxFour> */}
            <div className="py-4 py-lg-7 bg-secondary">
                <div className="home-content text-center">
                    <h2 className="home-title text-white">What makes <span className='text-green'>verified</span> by VDV indispensable to your business?</h2>
                    {/* Icon and Info Rows */}
                    <div className="row justify-content-center">
                        {/* Icon 1 */}
                        <div className="col-6 col-md-3 mb-3">
                            <i className="bi bi-shield-lock large-icon text-green"></i>
                            <h4 className="mt-2 font-weight-light text-light">Comprehensive Compliance</h4>
                            <p className='text-light'>Stay ahead of regulatory changes and ensure compliance with global AML and anti-terrorist financing regulations.</p>
                        </div>
                        {/* Icon 2 */}
                        <div className="col-6 col-md-3 mb-3">
                            <i className="bi bi-gem large-icon text-green"></i>
                            <h4 className="mt-2 font-weight-light text-light">Tailored for the Diamond Industry</h4>
                            <p className='text-light'>Our KYC and KYB checks are specifically crafted to address the intricacies of the Diamond Industry.</p>
                        </div>
                        {/* Icon 3 */}
                        <div className="col-6 col-md-3 mb-3">
                            <i className="bi bi-people large-icon text-green"></i>
                            <h4 className="mt-2 font-weight-light text-light">Human Touch in a Digital World</h4>
                            <p className='text-light'>Our expert team is ready to assist you throughout the onboarding process and beyond.</p>
                        </div>
                        {/* Icon 4 */}
                        <div className="col-6 col-md-3 mb-3">
                            <i className="bi bi-speedometer2 large-icon text-green"></i>
                            <h4 className="mt-2 font-weight-light text-light">Efficiency, Accuracy and Timeous</h4>
                            <p className='text-light'>The automated verification checks and simplified data capturing streamline the KYC and KYB process.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-secondary join-container">
                <div className="home-content">
                    <h2 className="home-title">Join <span className='text-green'>verified</span> by VDV</h2>
                    <p className="home-description">
                        In the ever-evolving landscape of the Diamond Industry, trust and compliance are the cornerstones of success.
                        Choose verified by VDV as your KYC and KYB solution, and experience the confidence that comes with a partner
                        dedicated to the security and prosperity of your business. Embrace the future of the diamond business with 
                        verified by VDV — where technology meets trust.
                    </p>
                    <a href="/signup" className="join-link bg-primary-green">Secure Your Diamond Business Future</a>
                </div>
            </div>
            <div className='horizontal-line-container'>
            <div className="horizontal-line-2"></div>
            </div>

            <div className="text-secondary">
                <div className="home-content">
                <h2 className="home-title">Our Services</h2>
 
                </div>
            {/* <FeatureBox></FeatureBox> */}
            <DualFeatureBox></DualFeatureBox>
            </div>

        </div>
    );
};

export default Home;
