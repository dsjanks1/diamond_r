// src/components/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Update the path to your logo image
import '../styles/NavBar.css';

const NavBar: React.FC = () => {
    return (
        <div className="navbar-container">
            <div className="top-bar">
                <img src={logo} alt="Logo" className="logo" />
                <div className="social-media-links">
                    <a href="https://facebook.com">FACEBOOK</a>
                    <a href="https://instagram.com">INSTAGRAM</a>
                </div>
            </div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
            </nav>
        </div>
    );
};

export default NavBar;