import React from 'react';
import './Header.css';

interface HeaderProps {
    title: string;
    isHomePage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, isHomePage = false }) => {
    return (
        <header className={`header ${isHomePage ? 'header-full' : 'header-compact'}`}>
            <div className="header-content">
                <h1>{title}</h1>
                <h2>Software Engineer</h2>
                <div className="contact-info">
                    <p>📧 Jeff.Darby@Genesys.com</p>
                    <p>📍 Hobart Tasmania</p>
                </div>
            </div>
        </header>
    );
};

export default Header; 