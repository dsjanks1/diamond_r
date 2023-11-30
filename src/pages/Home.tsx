import React from 'react';
import '../styles/Home.css'; // Ensure you have a corresponding CSS file
import iosIcon from './ios-icon.svg'; // Add your iOS icon asset path
import androidIcon from './android-icon.svg'; // Add your Android icon asset path

const Home: React.FC = () => {
    return (
        <div className="home-container">
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
    );
};

export default Home;
