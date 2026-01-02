
import React from 'react';

const PackageDetails = ({ pkg }) => {
    if (!pkg) return null;

    return (
        <div style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid var(--primary-color)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>{pkg.packageName}</h3>
            <p style={{ fontSize: '1rem', marginBottom: '1rem', lineHeight: '1.6' }}>{pkg.description}</p>

            <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7, marginBottom: '0.5rem' }}>Core Services</h4>
                <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                    {pkg.servicesIncluded.map((service, idx) => (
                        <li key={idx} style={{ padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--success)' }}>✓</span> {service}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Validity</span>
                    <p style={{ fontWeight: '600' }}>{pkg.validity}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Investment</span>
                    <p style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-color)' }}>₹{pkg.price.toLocaleString('en-IN')}</p>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;
