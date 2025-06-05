import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      if (data.success) {
        alert('Thank you for your message!');
        setMessage(''); // Clear the textarea after submission
      } else {
        alert('Failed to send message: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      alert('Error sending message: ' + error.message);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Email: jangidlakshit190105@gmail.com</p>
      <p>Phone: +91-787-842-9752</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/laxit-jangid-8588a3257/" target="_blank" rel="noopener noreferrer">Profile</a></p>
      <p>GitHub: <a href="https://github.com/Laxit85" target="_blank" rel="noopener noreferrer">Profile</a></p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="message">Your Review or Message:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Write your review or message here..."
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
