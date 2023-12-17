import React from 'react';
import '../styles/DualFeatureBox.css'; // Make sure to create and import a CSS file for custom styling
import leftAlignedImage from '../assets/diamondTerq.jpg'; // Update with the path to your left-aligned image
import rightAlignedImage from '../assets/diamond-earing-dark.jpg'; // Update with the path to your right-aligned image

const DualFeatureBox: React.FC = () => {
    return (
        <div className="container my-5">
            {/* Row with image left aligned and text right aligned */}
            <div className="row align-items-center feature-row">
                <div className="col-md-6">
                    <img src={leftAlignedImage} alt="Left aligned" className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h2>KYC – Know Your Client</h2>
                    <hr className="title-underline" />
                        <p>Identity Document Verification</p>
                        <p>Ongoing ID Monitoring</p>
                        <p>Known Face Search</p>
                        <p>Proof of Address Verification</p>
                        <p>AML Screening: PEPs, sanctions, watchlists and adverse media</p>
                        <p>Email Verification</p>
                        <p>Phone Verification</p>
                </div>
            </div>
            
            {/* Row with text left aligned and image right aligned */}
            <div className="row align-items-center feature-row">
                <div className="col-md-6 order-md-2">
                    <img src={rightAlignedImage} alt="Right aligned" className="img-fluid"/>
                </div>
                <div className="col-md-6 order-md-1">
                    <h2>KYB – Know Your Businesss</h2>
                    <hr className="title-underline" />
                        <p>Automated Corporate Registry Check</p>
                        <p>Corporate AML Screening</p>
                        <p>Ownership and Management Structure</p>
                        <p>Intermediate Shareholder Check</p>
                        <p>Ongoing Corporate AML Monitoring</p>
                </div>
            </div>
        </div>
    );
};

export default DualFeatureBox;
