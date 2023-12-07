import React, {useState} from 'react';
import '../styles/Home.css';
import homeImg from '../assets/homeImg.png';
import ScrollAnimated from '../components/ScrollAnimated';
const Home: React.FC = () => {
    const [activeTab, setActiveTab] = useState('kyc');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };
    return (
        <div>
        <div className='bg-primary land-container'>
        <ScrollAnimated>
            <div className="container py-lg-6 text-center d-flex align-items-center">
                <div className="row align-items-lg-center">
                    <div className='col-lg-4 offset-lg-1 order-lg-2 p-5 p-lg-0'>
                    <img src={homeImg} alt="Logo" className="img-fluid"/>
                    </div>
                    <div className='col-lg-6 order-lg-1 text-lg-left'>
                    <h1 className="home-title">
                        Welcome to Verified by VDV: Your Trusted KYC and KYB Solution for the Diamond Industry
                    </h1>
                    <p className="home-description">
                        In the intricate world of diamond trading, where trust and transparency are paramount, 
                        Verified by VDV stands as your reliable partner, combining cutting-edge technology with 
                        a human touch to ensure compliance with international regulators.
                    </p>
                    </div>
                </div>
            </div>
            </ScrollAnimated>
            </div>
            <div className="py-4 py-lg-7">
                <div className="home-content text-center">
                    <h2 className="home-title">What makes Verified indispensable to your business?</h2>
                    {/* Icon and Info Rows */}
                    <div className="row justify-content-center">
                        {/* Icon 1 */}
                        <div className="col-6 col-md-3 mb-3">
                            <i className="bi bi-shield-lock large-icon text-primary"></i>
                            <h4 className="mt-2 font-weight-light text-primary">Comprehensive Compliance</h4>
                            <p className='text-primary'>Stay ahead of regulatory changes and ensure compliance with global AML and anti-terrorist financing regulations.</p>
                        </div>
                        {/* Icon 2 */}
                        <div className="col-6 col-md-3 mb-3">
                            <i className="bi bi-gem large-icon text-primary"></i>
                            <h4 className="mt-2 font-weight-light text-primary">Tailored for the Diamond Industry</h4>
                            <p className='text-primary'>Our KYC and KYB checks are specifically crafted to address the intricacies of the diamond industry.</p>
                        </div>
                        {/* Icon 3 */}
                        <div className="col-6 col-md-3 mb-3">
                            <i className="bi bi-people large-icon text-primary"></i>
                            <h4 className="mt-2 font-weight-light text-primary">Human Touch in a Digital World</h4>
                            <p className='text-primary'>Our expert team is ready to assist you throughout the onboarding process and beyond.</p>
                        </div>
                        {/* Icon 4 */}
                        <div className="col-6 col-md-3 mb-3">
                            <i className="bi bi-speedometer2 large-icon text-primary"></i>
                            <h4 className="mt-2 font-weight-light text-primary">Efficiency and Accuracy</h4>
                            <p className='text-primary'>The automated verification checks and simplified data capturing streamline the KYC and KYB process.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="join-container bg-secondary">
                <div className="home-content">
                    <h2 className="home-title">Join Verified by VDV Today</h2>
                    <p className="home-description">
                        In the ever-evolving landscape of the diamond industry, trust and compliance are the cornerstones of success.
                        Choose Verified by VDV as your KYC and KYB solution, and experience the confidence that comes with a partner
                        dedicated to the security and prosperity of your business. Embrace the future of the diamond business with 
                        Verified by VDV — where technology meets trust.
                    </p>
                    <a href="/signup" className="join-link">Secure Your Diamond Business Future</a>
                </div>
            </div>
            <div className="container py-5">
                <h2 className="text-center mb-4">Our Services</h2>
                <div className="services-tabs">
                    <div className="d-flex justify-content-center mb-3">
                        <button 
                            className={`btn mx-2 ${activeTab === 'kyc' ? 'btn-info' : 'btn-outline-info'}`} 
                            onClick={() => handleTabClick('kyc')}
                        >
                            KYC – Know Your Client
                        </button>
                        <button 
                            className={`btn mx-2 ${activeTab === 'kyb' ? 'btn-primary' : 'btn-outline-primary'}`} 
                            onClick={() => handleTabClick('kyb')}
                        >
                            KYB – Know Your Business
                        </button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 'kyc' && (
                            <div className="kyc-content">
                                {/* KYC content */}
                                <p>Identity Document Verification</p>
                                <p>Ongoing ID Monitoring</p>
                                <p>Known Face Search</p>
                                <p>Proof of Address Verification</p>
                                <p>AML Screening: PEPs, sanctions, watchlists and adverse media</p>
                                <p>Email Verification</p>
                                <p>Phone Verification</p>
                            </div>
                        )}
                        {activeTab === 'kyb' && (
                            <div className="kyb-content">
                                {/* KYB content */}
                                <p>Automated Corporate Registry Check</p>
                                <p>Corporate AML Screening</p>
                                <p>Ownership and Management Structure</p>
                                <p>Intermediate Shareholder Check</p>
                                <p>Ongoing Corporate AML Monitoring</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <h2 className="text-center mb-4">Our Services</h2>
                <div className="row">
                    {/* KYC Section */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-header bg-info text-white">
                                <h3>KYC – Know Your Client</h3>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Identity Document Verification</li>
                                <li className="list-group-item">Ongoing ID Monitoring</li>
                                <li className="list-group-item">Known Face Search</li>
                                <li className="list-group-item">Proof of Address Verification</li>
                                <li className="list-group-item">AML Screening: PEPs, sanctions, watchlists and adverse media</li>
                                <li className="list-group-item">Email Verification</li>
                                <li className="list-group-item">Phone Verification</li>
                            </ul>
                        </div>
                    </div>

                    {/* KYB Section */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-header bg-primary text-white">
                                <h3>KYB – Know Your Business</h3>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Automated Corporate Registry Check</li>
                                <li className="list-group-item">Corporate AML Screening</li>
                                <li className="list-group-item">Ownership and Management Structure</li>
                                <li className="list-group-item">Intermediate Shareholder Check</li>
                                <li className="list-group-item">Ongoing Corporate AML Monitoring</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
