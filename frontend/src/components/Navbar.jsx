import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar glass">
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Vehicle Service Package System</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/packages">Packages</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {user ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Hi, {user.name}</span>
                        <button onClick={handleLogout} className="btn" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '0.5rem 1rem' }}>Sign Out</button>
                    </div>
                ) : (
                    <Link to="/login" className="btn btn-primary" style={{ textDecoration: 'none', padding: '0.5rem 1rem' }}>Login</Link>
                )}
                <button
                    onClick={toggleTheme}
                    className="btn"
                    style={{ background: 'transparent', fontSize: '1.2rem', padding: '0.5rem' }}
                >
                    {isDarkMode ? '🌞' : '🌙'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
