import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <button className="hamburger-button" onClick={toggleMenu}>
                <span className="hamburger-icon">☰</span>
            </button>
            {isOpen && (
                <nav className="menu-items">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu; 