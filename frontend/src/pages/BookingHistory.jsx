import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const BookingHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        const fetchHistory = async () => {
            if (!user) return;
            try {
                const response = await fetch(`http://localhost:5000/api/bookings/history/${user.id}`);
                const data = await response.json();
                if (data.success) {
                    setHistory(data.bookings);
                }
            } catch (err) {
                console.error('Failed to fetch history');
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, [user]);

    if (!user) return <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Please login to view history</div>;

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>My Booking History</h2>

            {loading ? (
                <p style={{ textAlign: 'center' }}>Loading your service records...</p>
            ) : history.length === 0 ? (
                <p style={{ textAlign: 'center', opacity: 0.6 }}>No service records found. Start your first booking today!</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {history.map((booking) => (
                        <div key={booking._id} className="card glass" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ color: 'var(--primary-color)' }}>{booking.packageName}</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                                    Booked on: {new Date(booking.bookingDate).toLocaleDateString('en-IN', {
                                        day: 'numeric', month: 'long', year: 'numeric'
                                    })}
                                </p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <p><strong>Vehicle:</strong> {booking.vehicleType}</p>
                                <p><span className="status-badge status-available" style={{ fontSize: '0.8rem' }}>{booking.bookingStatus}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookingHistory;
