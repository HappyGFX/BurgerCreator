import React from 'react';
import './Notification.css';

const Notification = ({ message }) => {
    if (!message) return null;

    if (message.type === 'error') {
        window.scrollTo(0, 0);
    }

    return (
        <div className="notification">
            <p className={message.type}>{message.message}</p>
        </div>
    );
};

export default Notification;
