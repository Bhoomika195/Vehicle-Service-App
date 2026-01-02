
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

/**
 * @route   POST /bookService
 * @desc    Creates a new service booking
 * @access  Public
 */
router.post('/bookService', async (req, res) => {
    try {
        const { customerName, packageName, vehicleType, userId } = req.body;

        // Input Validation
        if (!customerName || !packageName || !vehicleType || !userId) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields: customerName, packageName, vehicleType, and userId are mandatory."
            });
        }

        // Validate vehicleType against allowed enums (extra safety)
        const allowedVehicleTypes = ['Bike', 'Car', 'SUV'];
        if (!allowedVehicleTypes.includes(vehicleType)) {
            return res.status(400).json({
                success: false,
                message: "Invalid vehicleType. Allowed values: Bike, Car, SUV."
            });
        }

        // Creating the booking instance
        const newBooking = new Booking({
            customerName,
            packageName,
            vehicleType,
            userId
        });

        // Save to Database
        await newBooking.save();

        // Success Response
        return res.status(201).json({
            success: true,
            message: "Service booking confirmed successfully!",
            booking: newBooking
        });

    } catch (error) {
        console.error("Booking Error:", error.message);

        // Server Error Response
        return res.status(500).json({
            success: false,
            message: "Internal server error occurred while processing your booking.",
            error: error.message
        });
    }
});

// History Route
router.get('/history/:userId', async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.params.userId }).sort({ bookingDate: -1 });
        res.json({ success: true, bookings });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
