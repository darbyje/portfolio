import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>John Doe</h1>
                <h2>Software Engineer</h2>
                <div className="contact-info">
                    <p>📧 john.doe@email.com</p>
                    <p>📱 (123) 456-7890</p>
                    <p>📍 San Francisco, CA</p>
                </div>
            </div>
        </header>
    );
};

export default Header; 