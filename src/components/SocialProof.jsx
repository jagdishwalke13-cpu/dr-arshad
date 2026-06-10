import React from 'react';
import { Quote, Star } from 'lucide-react';
import './SocialProof.css';

const SocialProof = () => {
  const testimonials = [
    {
      text: "Dr. Arshad is literally a lifesaver. His skills in modern and precise targeted therapies needed for cancer are unmatched.",
      name: "Priya Deshmukh",
      role: "Patient"
    },
    {
      text: "God in human form! He treated my cancer. The way he explains complex medical issues to common people is truly amazing.",
      name: "Amit Patil",
      role: "Patient"
    },
    {
      text: "My family has known Dr. Arshad for years. He is an exceptional doctor with a great diagnostic ability.",
      name: "Sunita Kale",
      role: "Patient"
    }
  ];

  return (
    <section className="section bg-light" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="heading-lg">What Our Patients Say</h2>
          <p className="text-muted">Trusted by thousands of patients across Nagpur and beyond.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">{t.text}</p>
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <h4>{t.name}</h4>
              <span className="patient-role">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
