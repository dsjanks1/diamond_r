import React from 'react';
import '../styles/DualFeatureBox.css'; // Make sure this file exists and contains the necessary styling
import leftAlignedImage from '../assets/KYC500.png'; // Update with the path to your left-aligned image
import rightAlignedImage from '../assets/LadderIcon.png'; 
const DualFeatureBox: React.FC = () => {
    return (
        <div className="container my-5">
            {/* Row with image left aligned and text right aligned */}
            <div className="row align-items-center feature-row">
               
                <div className="col-md-6 col-sm-12 order-md-1">
                    <h2>KYC – Know Your Client</h2>
                    <hr className="title-underline" />
                    <p>Identity Document Verification</p>
                        <p>Ongoing ID Monitoring</p>
                        <p>Known Face Search</p>
                        <p>Proof of Address Verification</p>
                        <p>AML (Anti Money Laundering) Screening: PEPs (Politically Exposed Persons), sanctions, watchlists and adverse media</p>
                        <p>Email Verification</p>
                        <p>Phone Verification</p>                </div>
                        <div className="col-md-6 col-sm-12">
                    <img src={leftAlignedImage} alt="Left aligned" className="img-fluid"/>
                </div>
            </div>
            
            {/* Row with text left aligned and image right aligned */}
            <div className="row align-items-center feature-row">

                <div className="col-md-6 col-sm-12 order-md-1 order-sm-1">
                    <h2>KYB – Know Your Businesss</h2>
                    <hr className="title-underline" />
                    <p>Corporate Registry Check</p>
                        <p>Corporate AML Screening</p>
                        <p>Ownership and Management Structure</p>
                        <p>Intermediate Shareholder Check</p>
                        <p>Ongoing Corporate AML Monitoring</p>
                </div>

                <div className="col-md-6 col-sm-12 order-md-2 order-sm-2">
                    <img src={rightAlignedImage} alt="Right aligned" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default DualFeatureBox;
