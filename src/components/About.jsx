import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Shield, HeartPulse } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container about-container">
        
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img src="/images/about_dr.png" alt="Dr. Arshad" className="about-image" />
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-subtitle">ABOUT THE DOCTOR</span>
          <h2 className="heading-lg">Dr. Arshad</h2>
          
          <p className="about-text">
            With over 25 years of dedicated medical practice, Dr. Arshad is a renowned oncologist in Nagpur. He believes in providing personalized, compassionate care, ensuring patients are walked through every step of their recovery with the latest international treatment protocols.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <div className="icon-wrapper">
                <BookOpen size={20} className="text-teal" />
              </div>
              <h4>Education</h4>
              <p>MD Oncology, Top Institute</p>
            </div>
            
            <div className="about-card">
              <div className="icon-wrapper">
                <Award size={20} className="text-teal" />
              </div>
              <h4>Experience</h4>
              <p>25+ Years in Clinical Practice</p>
            </div>

            <div className="about-card">
              <div className="icon-wrapper">
                <Shield size={20} className="text-teal" />
              </div>
              <h4>Certifications</h4>
              <p>Board Certified Oncologist</p>
            </div>

            <div className="about-card">
              <div className="icon-wrapper">
                <HeartPulse size={20} className="text-teal" />
              </div>
              <h4>Specialization</h4>
              <p>Breast, Lung & Targeted Therapy</p>
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
};

export default About;
