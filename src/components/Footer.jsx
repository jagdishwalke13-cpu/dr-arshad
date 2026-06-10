import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-col">
          <div className="footer-logo">
            <h2>Dr. Arshad</h2>
            <p>ONCOLOGY</p>
          </div>
          <p className="footer-about">
            Providing advanced cancer care, comprehensive treatment, and compassionate support to patients in Nagpur since 1998.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Appointments</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#services">Advanced Diagnostics</a></li>
            <li><a href="#services">Targeted Therapy</a></li>
            <li><a href="#services">Immunotherapy</a></li>
            <li><a href="#services">Chemotherapy</a></li>
            <li><a href="#services">Palliative Care</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3>Contact</h3>
          <p><MapPin size={16} /> 123 Medical Square, Dharampeth, Nagpur, MH 440010</p>
          <p><Phone size={16} /> +91 98765 43210</p>
          <p><Mail size={16} /> care@drarshadoncology.com</p>
        </div>

      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Dr. Arshad Oncology. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
