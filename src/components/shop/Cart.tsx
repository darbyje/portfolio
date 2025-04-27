import React from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
    const { state, removeItem, updateQuantity } = useCart();

    if (!isOpen) return null;

    return (
        <div className={`cart-overlay ${isOpen ? 'open' : ''}`}>
            <div className="cart-container">
                <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="cart-items">
                    {state.items.length === 0 ? (
                        <div className="empty-cart">Your cart is empty</div>
                    ) : (
                        state.items.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                    <div className="cart-item-controls">
                                        <button
                                            className="quantity-button"
                                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                        >
                                            -
                                        </button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button
                                            className="quantity-button"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                        <button
                                            className="remove-button"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Total:</span>
                        <span>${state.total.toFixed(2)}</span>
                    </div>
                    <button className="checkout-button">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart; 