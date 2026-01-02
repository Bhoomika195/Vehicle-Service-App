import React, { useState } from 'react';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get In Touch</h2>
                <p style={{ opacity: 0.8 }}>Have questions? We're here to help you get the best service for your vehicle.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <div className="card glass">
                    <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                            <span>📍</span> 123 Auto Street, Service City, KA 560001
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                            <span>📞</span> +91 98765 43210
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                            <span>✉️</span> support@autocarepro.com
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                            <span>⏰</span> Mon - Sat: 9:00 AM - 7:00 PM
                        </li>
                    </ul>
                </div>

                <div className="card glass">
                    <h3 style={{ marginBottom: '1.5rem' }}>Send us a Message</h3>
                    {submitted ? (
                        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--success)' }}>
                            <h4>Thank you!</h4>
                            <p>We've received your message and will get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" rows="4" placeholder="How can we help?" required style={{ resize: 'none' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
