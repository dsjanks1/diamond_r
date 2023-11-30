import React from 'react';
import '../styles/Home.css'; // Ensure you have a corresponding CSS file
import iosIcon from './ios-icon.svg'; // Add your iOS icon asset path
import androidIcon from './android-icon.svg'; // Add your Android icon asset path

const Home: React.FC = () => {
    return (
        <div>
        <div className="land-container">
            <div className="home-content">
                <h1 className="home-title">Great tool that helps you verify those who interact with you</h1>
                <div className="home-buttons">
                    <a href="#" className="home-button ios">
                        {/* <img src={iosIcon} alt="iOS" /> */}
                        Get on iOS
                    </a>
                    <a href="#" className="home-button android">
                        {/* <img src={androidIcon} alt="Android" /> */}
                        Get on Android
                    </a>
                </div>
                <a href="/features" className="home-features-link">view features</a>
            </div>
        </div>
        <div className="py-4 py-lg-7">
    <div className="home-content text-center">
        <h2 className="home-title">What makes Verified indispensable to your business?</h2>
        <div className="row justify-content-center">
            <div className="col-6 col-md-3">
                <i className="bi bi-alarm large-icon"></i>
                <h4 className="mt-2 font-weight-light">Alarm Info</h4>
            </div>
            <div className="col-6 col-md-3">
                <i className="bi bi-bell large-icon"></i>
                <h4 className="mt-2 font-weight-light">Alarm Info</h4>
            </div>
            <div className="col-6 col-md-3">
                <i className="bi bi-calendar large-icon"></i>
                <h4 className="mt-2 font-weight-light">Alarm Info</h4>
            </div>
            <div className="col-6 col-md-3">
                <i className="bi bi-camera large-icon"></i>
                <h4 className="mt-2 font-weight-light">Alarm Info</h4>
            </div>
        </div>
    </div>
</div>

        </div>
    );
};

export default Home;
