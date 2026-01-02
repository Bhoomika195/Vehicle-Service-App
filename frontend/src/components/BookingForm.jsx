
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const BookingForm = ({ pkg, onBookingSuccess }) => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        customerName: '',
        vehicleType: 'Car'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.customerName) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('http://localhost:5000/api/bookings/bookService', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    packageName: pkg.packageName,
                    userId: user.id
                }),
            });

            const data = await response.json();

            if (data.success) {
                onBookingSuccess({
                    ...formData,
                    packageName: pkg.packageName
                });
            } else {
                alert("Booking failed: " + (data.message || "Unknown error"));
            }
        } catch (err) {
            console.error(err);
            alert("Error connecting to server. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="animate-fade-in">
            <div className="form-group">
                <label>Full Name</label>
                <input
                    type="text"
                    name="customerName"
                    className="form-control"
                    placeholder="John Doe"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Vehicle Type</label>
                <select
                    name="vehicleType"
                    className="form-control"
                    value={formData.vehicleType}
                    onChange={handleChange}
                >
                    <option value="Bike">Bike</option>
                    <option value="Car">Car</option>
                    <option value="SUV">SUV</option>
                </select>
            </div>

            <div className="form-group">
                <label>Selected Package</label>
                <input
                    type="text"
                    className="form-control"
                    value={pkg.packageName}
                    readOnly
                    style={{ background: 'rgba(0,0,0,0.05)', cursor: 'not-allowed', fontStyle: 'italic' }}
                />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '50px', fontSize: '1rem' }} disabled={isSubmitting}>
                {isSubmitting ? 'Confirming Your Slot...' : 'Complete Booking'}
            </button>
        </form>
    );
};

export default BookingForm;
