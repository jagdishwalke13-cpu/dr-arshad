import React from 'react';
import { Activity, Stethoscope, HeartPulse, Pill, ShieldAlert } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    { icon: <Activity />, title: 'Advanced Diagnostics', desc: 'State-of-the-art imaging and biopsy analysis for precise cancer staging.' },
    { icon: <Stethoscope />, title: 'Personalized Therapy', desc: 'Targeted treatments tailored specifically to your genetic profile.' },
    { icon: <HeartPulse />, title: 'Immunotherapy', desc: 'Boosting your body’s natural defenses to fight cancer cells.' },
    { icon: <Pill />, title: 'Chemotherapy', desc: 'Modern, well-managed regimens to minimize side effects and maximize impact.' },
    { icon: <ShieldAlert />, title: 'Preventive Screening', desc: 'Early detection programs for high-risk individuals and families.' },
    { icon: <Activity />, title: 'Palliative Care', desc: 'Comprehensive support focusing on quality of life and pain management.' }
  ];

  return (
    <section className="section bg-light" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR SERVICES</span>
          <h2 className="heading-lg">Comprehensive Oncology Services</h2>
          <p className="text-muted">Expert care across a wide range of medical disciplines to bring you the best in facility.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h4>{service.title}</h4>
              <p className="text-muted">{service.desc}</p>
              <a href="#contact" className="learn-more">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
