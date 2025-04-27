import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import CartButton from './shop/CartButton';
import './Navigation.css';

const Navigation: React.FC<{ onCartClick: () => void }> = ({ onCartClick }) => {
    return (
        <div className="navigation">
            <CartButton onClick={onCartClick} />
            <HamburgerMenu />
        </div>
    );
};

export default Navigation; 