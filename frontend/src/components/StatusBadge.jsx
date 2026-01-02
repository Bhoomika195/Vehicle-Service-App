
import React from 'react';

const StatusBadge = ({ status }) => {
    const isAvailable = status === 'Available';
    return (
        <span className={`status-badge ${isAvailable ? 'status-available' : 'status-expired'}`}>
            {status}
        </span>
    );
};

export default StatusBadge;
