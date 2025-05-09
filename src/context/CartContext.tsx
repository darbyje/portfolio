import React, { createContext, useContext, useReducer } from 'react';
import { Product, CartItem } from '../types/product';

interface CartState {
    items: CartItem[];
    total: number;
}

type CartAction =
    | { type: 'ADD_ITEM'; payload: Product }
    | { type: 'REMOVE_ITEM'; payload: string }
    | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
    | { type: 'CLEAR_CART' };

interface CartContextType {
    state: CartState;
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    total: state.total + action.payload.price
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
                total: state.total + action.payload.price
            };
        }
        case 'REMOVE_ITEM': {
            const item = state.items.find(item => item.id === action.payload);
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                total: state.total - (item ? item.price * item.quantity : 0)
            };
        }
        case 'UPDATE_QUANTITY': {
            const item = state.items.find(item => item.id === action.payload.id);
            if (!item) return state;

            const quantityDiff = action.payload.quantity - item.quantity;
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
                total: state.total + (item.price * quantityDiff)
            };
        }
        case 'CLEAR_CART':
            return {
                items: [],
                total: 0
            };
        default:
            return state;
    }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

    const addItem = (product: Product) => {
        dispatch({ type: 'ADD_ITEM', payload: product });
    };

    const removeItem = (productId: string) => {
        dispatch({ type: 'REMOVE_ITEM', payload: productId });
    };

    const updateQuantity = (productId: string, quantity: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}; 