import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-info">
            <span><MapPin size={14} /> Nagpur, Maharashtra</span>
            <span><Clock size={14} /> Mon - Sat: 9:00 AM - 8:00 PM</span>
          </div>
          <div className="top-contact">
            <span><Phone size={14} /> Emergency: +91 98765 43210</span>
          </div>
        </div>
      </div>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          
          <div className="logo">
            <h2>Dr. Arshad</h2>
            <p>ONCOLOGY</p>
          </div>

          <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn btn-primary btn-book">Book Appointment</button>
            <button 
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;
