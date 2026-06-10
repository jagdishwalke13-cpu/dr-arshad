import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, CheckCircle, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <span className="dot"></span> Welcome to Dr. Arshad Oncology
          </div>

          <h1 className="heading-xl">
            Advanced Cancer Care & <br/>
            <span className="text-teal">Trusted Oncology</span><br/>
            in Nagpur
          </h1>
          
          <p className="hero-subtitle">
            Consult with Dr. Arshad, offering a comprehensive approach to providing modern diagnosis and compassionate patient care.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">
              <Calendar size={18} style={{ marginRight: '8px' }} />
              Book Appointment
            </button>
            <button className="btn btn-outline">
              <Video size={18} style={{ marginRight: '8px' }} />
              Online Consultation
            </button>
          </div>

          <div className="hero-features">
            <span className="feature"><CheckCircle size={16} className="text-teal"/> 25+ Years Experience</span>
            <span className="feature"><CheckCircle size={16} className="text-teal"/> 2500+ Patients Treated</span>
            <span className="feature"><CheckCircle size={16} className="text-teal"/> Advanced Targeted Therapy</span>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="blob-shape"></div>
          <img src="/images/dr_arshad_cutout.png" alt="Dr. Arshad" className="hero-image" />
          
          <div className="floating-card">
            <div className="icon-box"><Star size={20} className="text-teal" fill="currentColor" /></div>
            <div>
              <p>Patient Satisfaction</p>
              <h4>95%</h4>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
