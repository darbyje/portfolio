import React, { useState } from 'react';
import './Header.css';
import Navigation from './Navigation';
import Cart from './shop/Cart';

interface HeaderProps {
    title: string;
    isHomePage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, isHomePage = false }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
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
            <Navigation onCartClick={() => setIsCartOpen(true)} />
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};

export default Header; 