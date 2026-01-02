# 🚗 Vehicle Service Package Management System

A full-stack web application developed as part of **Structured Enquiry (E2 Batch)** to manage vehicle service packages and allow customers to book services efficiently.

---

## 📌 Project Description

The Vehicle Service Package Management System helps a vehicle service center manage different service packages and enables customers to book a service package based on their vehicle type. The application follows a clean full-stack architecture with a React frontend and a Node.js + Express backend connected to a MongoDB database.

---

## 🛠️ Technologies Used

### Frontend
- React (Vite)
- JavaScript
- CSS
- React Hooks

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## ✨ Features

- Display vehicle service packages
- View package details
- Book a service package
- Select vehicle type (Bike / Car / SUV)
- REST API integration
- Clean and responsive UI

---

## 📂 Project Structure

StructuredEnquiry/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── index.js
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── data/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
└── README.md

---

## 🔌 API Endpoint

### POST /bookService

**Request Body**
```json
{
  "customerName": "Bhoomika",
  "packageName": "Premium Service",
  "vehicleType": "Car"
}
Response
{
  "success": true,
  "message": "Service booked successfully"
}
Database Schema (Booking)

customerName (String)

packageName (String)

vehicleType (String)

bookingDate (Date)

bookingStatus (String)
Backend:
cd backend
npm install
npm run dev
Server runs on:http://localhost:5000
Frontend:
cd frontend
npm install
npm run dev
Frontend runs on:http://localhost:5173
This project is developed for educational purposes as part of the Structured Enquiry curriculum and demonstrates full-stack web development concepts.

👩‍💻 Author
Bhoomika Gudi
Computer Science Engineering
