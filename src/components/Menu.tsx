import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

interface MenuProps { }

const Menu: React.FC<MenuProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="menu">
            <button
                className="menu-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            {isOpen && (
                <div className="menu-items">
                    <Link to="/" onClick={handleClose}>Home</Link>
                    <Link to="/about" onClick={handleClose}>About</Link>
                    <Link to="/portfolio" onClick={handleClose}>Portfolio</Link>
                </div>
            )}
        </div>
    );
};

export default Menu; 