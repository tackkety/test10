import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedFields, setFocusedFields] = useState({});

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (field) => {
    setFocusedFields(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocusedFields(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby6ReyYFdWxpYp9L5LxyJNJTad56mukvyxctNAZhhLbI0-wh9MMfhW3vxa57qlazHp0yQ/exec';

    const submitData = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      alert(`Success! Thank you, ${formData.name}. We have received your message.`);
      setFormData({ name: '', email: '', message: '' });
      setFocusedFields({});
    } catch (error) {
      console.error('Error!', error.message);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="heading">Contact <span>Us</span></h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className='bx bx-envelope'></i>
              </div>
              <div className="contact-details">
                <h4>Email Us</h4>
                <p>afrirobot@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className='bx bx-phone'></i>
              </div>
              <div className="contact-details">
                <h4>Whats App Us</h4>
                <p>+251-949018471</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className='bx bx-map'></i>
              </div>
              <div className="contact-details">
                <h4>Visit Us</h4>
                <p>Ethiopia, Addis Ababa</p>
              </div>
            </div>
          </div>

          <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className={`input-group ${focusedFields.name || formData.name ? 'focused' : ''}`}>
                <input 
                  type="text" 
                  name="name" 
                  id="contactName" 
                  placeholder=" "
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  required 
                />
                <label htmlFor="contactName">Your Name</label>
                <div className="input-line"></div>
              </div>
              
              <div className={`input-group ${focusedFields.email || formData.email ? 'focused' : ''}`}>
                <input 
                  type="email" 
                  name="email" 
                  id="contactEmail" 
                  placeholder=" "
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  required 
                />
                <label htmlFor="contactEmail">Email Address</label>
                <div className="input-line"></div>
              </div>

              <div className={`input-group full-width ${focusedFields.message || formData.message ? 'focused' : ''}`}>
                <textarea 
                  name="message" 
                  id="contactMessage" 
                  rows="5" 
                  placeholder=" "
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  required
                ></textarea>
                <label htmlFor="contactMessage">Your Message</label>
                <div className="input-line"></div>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  Sending...<i className="bx bx-loader-alt bx-spin"></i>
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

