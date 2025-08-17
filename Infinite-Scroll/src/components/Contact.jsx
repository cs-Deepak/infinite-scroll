import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import resumePDF from '../assets/Deepak_Kumar_Resume.pdf';
import { MdEmail } from "react-icons/md";     // Material Design email
import { FaPhoneAlt } from "react-icons/fa";  // FontAwesome phone
import { FaGithub } from "react-icons/fa";    // FontAwesome GitHub

const Contact = () => {


    const downloadResume = () => {
  // Method 1: Direct download using anchor tag
  const link = document.createElement('a');
  link.href = resumePDF;
  link.download = 'Deepak_Kumar_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// या Method 2: Window.open के साथ
const downloadResumeMethod2 = () => {
  window.open(resumePDF, '_blank');
};


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // EmailJS initialization
  useEffect(() => {
    // Replace with your EmailJS public key
    emailjs.init("o2Y9dtP7iLOY-gLkn");
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Debug: Check if all required fields are filled
    console.log('Form Data:', formData);
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill all required fields!');
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Sending email with EmailJS...');
      
      // EmailJS send function
      const result = await emailjs.send(
        'service_cg480b3',    // Replace with your service ID
        'template_0o4sx37',   // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not specified',
          subject: formData.subject,
          message: formData.message,
          to_email: 'd.deepakkumaryadav9162@gmail.com',
          reply_to: formData.email
        }
      );

      console.log('✅ Email sent successfully!', result);
      console.log('Response status:', result.status);
      console.log('Response text:', result.text);
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('');
      }, 3000);

    } catch (error) {
      console.error('❌ Email sending failed:', error);
      console.error('Error details:', error.text || error.message);
      setSubmitStatus('error');
      
      // Show detailed error to user
      alert(`Error: ${error.text || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

const contactInfo = [
  {
    icon: <MdEmail size={22} color="#FFD700" />,
    title: 'Email',
    value: 'd.deepakkumaryadav9162@gmail.com',
    link: 'mailto:d.deepakkumaryadav9162@gmail.com'
  },
  {
    icon: <FaPhoneAlt size={22} color="#FFD700" />,
    title: 'Phone',
    value: '+91-9162070486',
    link: 'tel:+919162070486'
  },
  {
    icon: <FaGithub size={22} color="#FFD700" />,
    title: 'GitHub',
    value: 'github.com/cs-Deepak',
    link: 'https://github.com/cs-Deepak'
  }
];




const quickActions = [
  {
    title: 'Download Resume',
    description: 'Get my complete resume in PDF format',
    icon: '📄',
    action: downloadResume
  }
];

  

  return (
    <div className="contact-container">

      <div className="contact-wrapper">
        {/* Header */}
        <div className="contact-header">
          <div className="header-content">
            <h1>Let's Work Together</h1>
            <p>Ready to bring your ideas to life? I'm here to help you build amazing web experiences.</p>
          </div>
          <div className="header-visual">
            <div className="floating-icons">
              <span className="icon">⚛️</span>
              <span className="icon">💻</span>
              <span className="icon">🚀</span>
            </div>
          </div>
        </div>

        <div className="contact-content">
          {/* Contact Info & Quick Actions */}
          <div className="left-section">
            {/* Contact Information */}
            <div className="contact-info-card">
              <h2>Get in Touch</h2>
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link} 
                    className="contact-item"
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-details">
                      <h4>{item.title}</h4>
                      <p>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions-card">
              <h3>Quick Actions</h3>
              <div className="quick-actions">
                {quickActions.map((action, index) => (
                  <div key={index} className="action-item" onClick={action.action}>
                    <div className="action-icon">{action.icon}</div>
                    <div className="action-content">
                      <h4>{action.title}</h4>
                      <p>{action.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="right-section">
            <div className="contact-form-card">
              <h2>Send Message</h2>
              <p className="form-description">
                Have a project in mind? Let's discuss how I can help you achieve your goals.
              </p>

              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company/Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="project">New Project Discussion</option>
                      <option value="job">Job Opportunity</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button 
                  type="button"
                  onClick={handleSubmit}
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <span>✅</span>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <span>🚀</span>
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <div className="success-content">
                      <h3>Thank You! 🎉</h3>
                      <p>Your message has been sent successfully. I'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    <div className="error-content">
                      <h3>Oops! ⚠️</h3>
                      <p>Failed to send message. Please try again or contact directly via email.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;