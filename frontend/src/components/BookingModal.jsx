
import React from 'react';
import PackageDetails from './PackageDetails';
import BookingForm from './BookingForm';

const BookingModal = ({ pkg, onClose, onBookingSuccess }) => {
    if (!pkg) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content glass animate-fade-in"
                onClick={e => e.stopPropagation()}
                style={{ overflowY: 'auto', maxHeight: '90vh' }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'rgba(0,0,0,0.1)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        cursor: 'pointer',
                        color: 'var(--text)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10
                    }}
                >
                    ✕
                </button>

                <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Secure Your Booking</h2>

                <div className="modal-sections">
                    <PackageDetails pkg={pkg} />
                    <BookingForm pkg={pkg} onBookingSuccess={onBookingSuccess} />
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
