
import React from 'react';
import StatusBadge from './StatusBadge';

const PackageCard = ({ pkg, onBookClick }) => {
    return (
        <div className={`card glass animate-fade-in`}>
            {pkg.featured && <div className="featured-badge">FEATURED</div>}
            <div style={{ marginBottom: '1rem' }}>
                <StatusBadge status={pkg.packageStatus} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{pkg.packageName}</h3>
            <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem' }}>
                ₹{pkg.price.toLocaleString('en-IN')}
            </p>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', opacity: 0.8 }}>
                {pkg.description}
            </p>
            <button
                className="btn btn-primary"
                onClick={() => onBookClick(pkg)}
                disabled={pkg.packageStatus !== 'Available'}
                style={{ width: '100%', opacity: pkg.packageStatus !== 'Available' ? 0.5 : 1 }}
            >
                {pkg.packageStatus === 'Available' ? 'Book Service' : 'Waitlist Only'}
            </button>
        </div>
    );
};

export default PackageCard;
