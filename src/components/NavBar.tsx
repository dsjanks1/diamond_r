import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import verifiedVDVLogo from '../assets/VerifiedLOGO.png'; // Your default logo

import '../styles/NavBar.css'; // Ensure this import points to your actual CSS file

const NavBar: React.FC = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50; // Adjust this value based on when you want the navbar to change
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isAboutUs = location.pathname === '/about-us'; // Check if the current page is the home page

    return (
        <Navbar 
          expanded={expanded} 
          expand="lg" 
          fixed="top" 
          className={scrolled ? 'navbar-container scrolled' : 'navbar-container'}
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={verifiedVDVLogo}
                        alt="Logo"
                        height="60" // Set the height of your logo
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="responsive-navbar-nav" 
                    onClick={() => setExpanded(prevExpanded => !prevExpanded)}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className={isAboutUs ? 'text-green' : ''}as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link className={isAboutUs ? 'text-green' : ''} as={Link} to="/about-us" onClick={() => setExpanded(false)}>About Us</Nav.Link>
                        <Nav.Link className={isAboutUs ? 'text-green' : ''} as={Link} to="/contact-us" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
