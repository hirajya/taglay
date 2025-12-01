import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="professional-footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-grid">
                        <div className="footer-section about-section">
                            <h4 className="section-title">About</h4>
                            <div className="section-divider"></div>
                            <p className="section-description">
                                Curating concise React know-how and tasteful UI ideas for builders who want
                                to ship fast without looking generic.
                            </p>
                        </div>
                        
                        <div className="footer-section contact-section">
                            <h4 className="section-title">Contact</h4>
                            <div className="section-divider"></div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                                <span>rodneyestrada2425@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                                <span>09**-***-****</span>
                            </div>
                        </div>
                        
                        <div className="footer-section social-section">
                            <h4 className="section-title">Follow Us</h4>
                            <div className="section-divider"></div>
                            <div className="social-links">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <span className="social-tooltip">LinkedIn</span>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <span className="social-tooltip">Twitter</span>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <span className="social-tooltip">Facebook</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
