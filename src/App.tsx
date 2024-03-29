import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NavBar from './components/NavBar';
import Footer from './components/Footer'; // Import the footer component
import RedirectHandler from './components/RedirectHandler'; // Import RedirectHandler

import './styles/App.css'
import './styles/Colours.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const App: React.FC = () => {


  return (
    <Router>
      <RedirectHandler></RedirectHandler>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
