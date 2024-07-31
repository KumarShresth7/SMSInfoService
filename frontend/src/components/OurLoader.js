import React from 'react';
import './OurLoader.css';
import notificationBell from '../assets/notification-bell.svg'; // Adjust the path as needed

const OurLoader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader">
                <img src={notificationBell} alt="Loading..." className="loader-icon" />
                <div className="loader-text">We Present...</div>
            </div>
        </div>
    );
};

export default OurLoader;
