
import React, { useState } from 'react';
import PackageCard from './PackageCard';
import { packages } from '../data/packages';

const PackageList = ({ onBookClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const filteredPackages = packages.filter(pkg => {
        const matchesSearch = pkg.packageName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'All' || pkg.packageStatus === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <section id="packages" className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem' }}>Explores Service Packages</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <input
                        type="text"
                        placeholder="Search packages..."
                        className="form-control"
                        style={{ maxWidth: '250px' }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="form-control"
                        style={{ maxWidth: '150px' }}
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="Available">Available</option>
                        <option value="Expired">Expired</option>
                    </select>
                </div>
            </div>
            <div className="package-grid">
                {filteredPackages.map(pkg => (
                    <PackageCard key={pkg.id} pkg={pkg} onBookClick={onBookClick} />
                ))}
            </div>
            {filteredPackages.length === 0 && (
                <div style={{ textAlign: 'center', padding: '3rem', opacity: 0.6 }}>
                    No packages found matching your criteria.
                </div>
            )}
        </section>
    );
};

export default PackageList;
