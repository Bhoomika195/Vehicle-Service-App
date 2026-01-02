import React, { useState } from 'react';
import PackageList from '../components/PackageList';
import BookingModal from '../components/BookingModal';
import Toast from '../components/Toast';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const PackagesPage = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [toastMessage, setToastMessage] = useState('');
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleBookClick = (pkg) => {
        if (!user) {
            navigate('/login');
            return;
        }
        setSelectedPackage(pkg);
    };

    const handleBookingSuccess = (bookingData) => {
        setToastMessage(`Booking confirmed for ${bookingData.customerName}! Package: ${bookingData.packageName}`);
        setSelectedPackage(null);
    };

    return (
        <div style={{ padding: '4rem 0' }}>
            <header className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Our Service Packages</h2>
                <p style={{ opacity: 0.7 }}>Choose the perfect plan for your vehicle maintenance.</p>
            </header>

            <PackageList onBookClick={handleBookClick} />

            {selectedPackage && (
                <BookingModal
                    pkg={selectedPackage}
                    onClose={() => setSelectedPackage(null)}
                    onBookingSuccess={handleBookingSuccess}
                />
            )}

            {toastMessage && (
                <Toast message={toastMessage} onClose={() => setToastMessage('')} />
            )}
        </div>
    );
};

export default PackagesPage;
