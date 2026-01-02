
import React, { useEffect } from 'react';

const Toast = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="toast">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✅</span>
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Toast;
