import React from "react";
import  "./Footer.css"
import last from "./last.png"; // replace with your logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src={last} alt="last" className="footer-logo" style={{width:'25%'}}/>
        <p>© 2025 MedsGenesis, Inc.<br />All rights reserved.</p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Our Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/faqs">FAQs</a></li>
          <li><a href="/whitepapers">Whitepapers</a></li>
          <li><a href="/case-studies">Case Studies</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Connect with Us</h4>
        <ul>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
