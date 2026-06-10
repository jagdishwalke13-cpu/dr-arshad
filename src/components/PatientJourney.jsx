import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Microscope, Users, FileSignature, HeartHandshake } from 'lucide-react';
import './PatientJourney.css';

const steps = [
  {
    icon: <MessageCircle size={28} />,
    title: "Detailed Consultation",
    description: "An empathetic, in-depth discussion to understand your symptoms, medical history, and personal concerns."
  },
  {
    icon: <Microscope size={28} />,
    title: "Precise Diagnosis & Staging",
    description: "Utilizing advanced imaging and molecular testing to determine the exact nature and stage of the cancer."
  },
  {
    icon: <Users size={28} />,
    title: "Tumor Board Review",
    description: "A collaborative approach where multiple specialists review your case to ensure the most effective strategy."
  },
  {
    icon: <FileSignature size={28} />,
    title: "Personalized Treatment Planning",
    description: "Tailoring options like Immunotherapy, Targeted Therapy, or Surgery specifically for your unique profile."
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Post-Treatment Support",
    description: "Continuous monitoring, nutritional guidance, and emotional support for long-term health and remission."
  }
];

const PatientJourney = () => {
  return (
    <section className="section section-bg-subtle journey-section">
      <div className="container">
        
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="heading-lg">Your Journey to Recovery</h2>
          <p className="text-muted text-lg">We guide you through every step with compassion and expertise, ensuring clarity and minimizing stress.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {step.icon}
                </div>
                <div className="timeline-text">
                  <h3 className="heading-sm">{`Step ${index + 1}: ${step.title}`}</h3>
                  <p className="text-muted text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default PatientJourney;
