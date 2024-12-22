import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      {/* Contact Information Section */}
      <div className="contact-info">
        <p>
          <strong>Email:</strong> <a href="mailto:framer@gmail.com">framer@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+91 9500740631">+91 9500740631</a>
        </p>
        <p>
          <strong>Address:</strong> 123 Frame Street, Eyewear City, Lensland 45678
        </p>
      </div>

      {/* Contact Form Section */}
      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
