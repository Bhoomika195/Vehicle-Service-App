import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import BookingHistory from './pages/BookingHistory';
import Login from './pages/Login';
import Register from './pages/Register';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="app">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/packages" element={<PackagesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/history" element={<ProtectedRoute><BookingHistory /></ProtectedRoute>} />
              </Routes>
            </main>
            <footer style={{ marginTop: '4rem', padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
              <p>© 2026 Vehicle Service Package System. All rights reserved.</p>
            </footer>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
