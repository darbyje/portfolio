import React, { useState } from 'react';
import './Menu.css';

interface MenuProps {
    onNavigate: (page: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (page: string) => {
        setIsOpen(false);
        onNavigate(page);
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
                    <button onClick={() => handleClick('home')}>Home</button>
                    <button onClick={() => handleClick('about')}>About</button>
                    <button onClick={() => handleClick('portfolio')}>Portfolio</button>
                </div>
            )}
        </div>
    );
};

export default Menu; 