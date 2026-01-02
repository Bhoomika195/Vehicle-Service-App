
const mongoose = require('mongoose');

/**
 * Service Booking Schema
 * Stores customer details and package information for service appointments.
 */
const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required']
    },
    customerName: {
        type: String,
        required: [true, 'Customer name is required'],
        trim: true
    },
    packageName: {
        type: String,
        required: [true, 'Package name is required']
    },
    vehicleType: {
        type: String,
        required: [true, 'Vehicle type is required'],
        enum: ['Bike', 'Car', 'SUV']
    },
    bookingDate: {
        type: Date,
        default: Date.now
    },
    bookingStatus: {
        type: String,
        default: 'Confirmed'
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
