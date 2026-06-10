import React from 'react';
import { Calendar, Phone, Mail } from 'lucide-react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="section appointment-section" id="contact">
      <div className="container appointment-container">
        
        <div className="appointment-info">
          <span className="section-subtitle">BOOK A VISIT</span>
          <h2 className="heading-lg">Schedule Your Appointment</h2>
          <p className="text-muted">
            Book your visit in minutes. Choose a convenient date and time, and receive instant confirmation via SMS and email.
          </p>

          <ul className="benefits-list">
            <li><Calendar size={20} className="text-teal" /> <span>Instant Confirmation via SMS/Email</span></li>
            <li><Phone size={20} className="text-teal" /> <span>Flexible Rescheduling Available</span></li>
            <li><Mail size={20} className="text-teal" /> <span>Online Consultation Options</span></li>
          </ul>
        </div>

        <div className="appointment-form-wrapper">
          <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Patient Name" className="form-input" />
              <input type="text" placeholder="Phone Number" className="form-input" />
            </div>
            <input type="email" placeholder="Email Address" className="form-input" />
            <div className="form-row">
              <select className="form-input" defaultValue="Select Service">
                <option disabled>Select Service</option>
                <option>Consultation</option>
                <option>Follow Up</option>
                <option>Second Opinion</option>
              </select>
              <input type="date" className="form-input" />
            </div>
            <textarea placeholder="Additional Notes (Optional)" className="form-input" rows="4"></textarea>
            <button type="submit" className="btn btn-primary btn-submit">Book Appointment</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
