import React from 'react';
import './About.css'; // Custom CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About <span className="brand">MedsGenesis</span></h1>
        <p>
          At MedsGenesis, we are transforming the way healthcare providers manage their revenue cycle—one efficient process at a time.
        </p>
      </div>

      <div className="about-content">
        <p>
          With a deep understanding of the challenges faced by clinics, hospitals, and private practices, we provide AI-powered, end-to-end Revenue Cycle Management (RCM) services that not only optimize operations but also increase provider revenue by over 15% on average.
        </p>
        <p>
          Our goal is simple: Let doctors focus on patient care while we handle the administrative stress.
        </p>
        <p>
          From scheduling appointments and verifying insurance eligibility to managing prior authorizations and capturing patient demographics, we ensure each step of the revenue cycle is accurate, automated, and aligned with your practice goals.
        </p>
        <p>
          We integrate cutting-edge automation and AI with personalized support to reduce no-shows, eliminate claim denials, and improve cash flow.
        </p>
        <p>
          We’re not just a service provider—we are your technology-driven RCM partner, offering real-time dashboards, intelligent alerts, and 24/7 access to performance analytics.
        </p>
        <p>
          With MedsGenesis, you get a scalable solution tailored to your specialty and practice size.
        </p>
      </div>

      
      <div className="why-choose-unique">
        <h2>Why Choose MedsGenesis?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>📈 Revenue Growth</h3>
            <p>Proven revenue growth for medical practices (15%+ increase)
            </p>
          </div>
          <div className="why-card">
            <h3>🤖 Smart Automation</h3>
            <p>Intelligent automation and RPA to reduce human errors</p>
          </div>
          <div className="why-card">
            <h3>💬 Better Communication</h3>
            <p>Direct provider-patient messaging for better communication</p>
          </div>
          <div className="why-card">
            <h3>🔍 Real-Time Insights</h3>
            <p>Real-time tracking of payments, appointments, and authorizations</p>
          </div>
          <div className="why-card">
            <h3>✅ HIPAA Secure</h3>
            <p>HIPAA-compliant systems with full security and data integrity</p>
          </div>
          <div className="why-card">
            <h3>📊 Transparent Reporting</h3>
            <p>Transparent analytics and weekly performance reporting</p>
          </div>
        </div>
      </div>

      <div className="about-footer">
        <p>
          At MedsGenesis, your success is our mission. Whether you're a solo practitioner or a multi-location clinic, we work tirelessly behind the scenes to ensure you never have to stress about eligibility issues, denials, or operational delays again.
        </p>
        <p>
          Let us handle the back office, while you focus on what matters most—delivering exceptional care.
        </p>
      </div>
    </div>
  );
};

export default About;
