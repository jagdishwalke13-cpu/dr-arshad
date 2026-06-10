import React from 'react';
import { Users, Clock, Award, ThumbsUp } from 'lucide-react';
import './StatsBanner.css';

const StatsBanner = () => {
  const stats = [
    { icon: <Users size={32} />, number: '2500+', label: 'Patients Treated' },
    { icon: <Clock size={32} />, number: '25+', label: 'Years Experience' },
    { icon: <Award size={32} />, number: '15+', label: 'Medical Awards' },
    { icon: <ThumbsUp size={32} />, number: '95%', label: 'Patient Satisfaction' }
  ];

  return (
    <section className="stats-banner">
      <div className="container stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;
