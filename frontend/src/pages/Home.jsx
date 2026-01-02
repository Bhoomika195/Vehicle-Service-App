import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container animate-fade-in">
            <header style={{ textAlign: 'center', padding: '6rem 0' }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: '800' }}>
                    Your Vehicle's <span style={{ color: 'var(--primary-color)' }}>Best Friend</span>
                </h1>
                <p style={{ fontSize: '1.4rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Welcome to Vehicle Service Package System. We provide state-of-the-art diagnostic and maintenance services
                    to keep your car or bike running like new. Explore our specialized packages today.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <Link to="/packages" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Explore Packages</Link>
                    <Link to="/contact" className="btn glass" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Get in Touch</Link>
                </div>
            </header>

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', padding: '4rem 0' }}>
                <div className="card glass" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛠️</div>
                    <h3>Expert Service</h3>
                    <p>Certified technicians with years of experience across all major vehicle brands.</p>
                </div>
                <div className="card glass" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                    <h3>Quick Turnaround</h3>
                    <p>We value your time. Most services completed within the same day for your convenience.</p>
                </div>
                <div className="card glass" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💵</div>
                    <h3>Affordable Pricing</h3>
                    <p>Premium care shouldn't break the bank. Transparent pricing with no hidden charges.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
