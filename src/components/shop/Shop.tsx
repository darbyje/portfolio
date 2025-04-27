import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/product';
import './Shop.css';

const Shop: React.FC = () => {
    const { addItem } = useCart();

    const handleAddToCart = (product: Product) => {
        addItem(product);
    };

    return (
        <div className="shop-container">
            <h1>Gaming Accessories</h1>
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop; 