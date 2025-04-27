import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartButton.css';

interface CartButtonProps {
    onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
    const { state } = useCart();
    const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

    return (
        <button className="cart-button" onClick={onClick}>
            <span className="cart-icon">🛒</span>
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </button>
    );
};

export default CartButton; 