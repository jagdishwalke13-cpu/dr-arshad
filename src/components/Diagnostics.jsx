import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Dna, Target, Search } from 'lucide-react';
import './Diagnostics.css';

const capabilities = [
  {
    icon: <Activity size={32} />,
    title: "Precision PET-CT Interpretation",
    desc: "Accurate staging and monitoring using state-of-the-art functional imaging."
  },
  {
    icon: <Dna size={32} />,
    title: "Advanced Molecular Diagnostics",
    desc: "Genetic sequencing to identify specific mutations driving the tumor."
  },
  {
    icon: <Target size={32} />,
    title: "Targeted Therapy Matching",
    desc: "Customizing drug therapies that precisely attack cancer cells while sparing healthy tissue."
  },
  {
    icon: <Search size={32} />,
    title: "Second Opinion Experts",
    desc: "Comprehensive review of previous biopsies and scans to ensure the right path forward."
  }
];

const Diagnostics = () => {
  return (
    <section className="section section-bg-dark diagnostics-section">
      <div className="container">
        
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="heading-lg" style={{ color: 'var(--text-light)' }}>Accessing Cutting-Edge Cancer Technology in Nagpur</h2>
          <p className="text-lg" style={{ color: 'var(--accent)', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>
            We leverage global advancements in precision medicine to deliver the most effective therapies right here at home.
          </p>
        </div>

        <div className="diagnostics-grid">
          
          <motion.div 
            className="diagnostics-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img src="/images/diagnostic.png" alt="Advanced Diagnostics PET-CT" className="diagnostic-image" />
            <div className="tech-overlay"></div>
          </motion.div>

          <div className="capabilities-grid">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="capability-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="capability-icon">
                  {cap.icon}
                </div>
                <div className="capability-text">
                  <h4 className="heading-sm" style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>{cap.title}</h4>
                  <p style={{ color: 'var(--accent)', fontSize: '0.9rem', opacity: 0.7 }}>{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Diagnostics;
