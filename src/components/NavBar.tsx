import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; // Assuming your CSS file is in the same directory
import logoImage from '../assets/logo.png'; // Update the path to where your actual logo is

const NavBar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 200); // Adjust this value as needed
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                <img src={logoImage} alt="Logo" />
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
            </div>
        </nav>
    );
};

export default NavBar;
