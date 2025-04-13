import React from 'react';
import './Contact.css'; // Create this CSS file

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We're here to help you simplify your revenue cycle and elevate your practice.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-box">
          <h3>📞 Let’s Talk Business</h3>
          <p>Have questions or want a free consultation? Our RCM specialists are just a call away.</p>
        </div>
        <div className="contact-box">
          <h3>📬 Get in Touch</h3>
          <p>Email: <span>support@medsgenesis.com</span></p>
          <p>Phone: <span>+1 (XXX) XXX-XXXX</span></p>
          <p>Office Hours: Mon – Fri | 9 AM – 6 PM EST</p>
        </div>
        <div className="contact-box">
          <h3>📍 Our Location</h3>
          <p>MedsGenesis Headquarters</p>
          <p>[Insert Address]</p>
          <p>[City, State, ZIP]</p>
        </div>
      </div>

      <div className="contact-form-container">
        <h3>📥 Request a Callback</h3>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Clinic/Hospital Name" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">Submit Request</button>
        </form>
        <p className="note">🔒 Your information is safe with us. We never share your data.</p>
      </div>

      <div className="final-cta">
        <p>
          Let <strong>MedsGenesis</strong> handle the backend, so you can focus on the frontlines of care.
        </p>
      </div>
    </div>
  );
};

export default Contact;
