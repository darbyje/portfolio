import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="hamburger-menu">
            <button className="hamburger-button" onClick={() => setIsOpen(!isOpen)}>
                <span className="hamburger-icon">☰</span>
            </button>
            {isOpen && (
                <nav className="menu-items">
                    <Link to="/" onClick={handleClose}>Home</Link>
                    <Link to="/about" onClick={handleClose}>About</Link>
                    <Link to="/portfolio" onClick={handleClose}>Portfolio</Link>
                    <Link to="/shop" onClick={handleClose}>Shop</Link>
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu; 