import React from 'react';
import { Product } from '../../types/product';
import './ProductCard.css';

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                    <span className="price">${product.price.toFixed(2)}</span>
                    <button
                        className="add-to-cart"
                        onClick={() => onAddToCart?.(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard; 