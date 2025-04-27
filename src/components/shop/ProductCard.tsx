import React, { useRef, useState } from 'react';
import { Product } from '../../types/product';
import './ProductCard.css';

// Import images
import keyboardImage from '../../assets/mechanical-keyboard.jpg';
import mouseImage from '../../assets/gaming-mouse.jpg';
import headsetImage from '../../assets/gaming-headset.jpg';

const imageMap: { [key: string]: string } = {
    '/assets/mechanical-keyboard.jpg': keyboardImage,
    '/assets/gaming-mouse.jpg': mouseImage,
    '/assets/gaming-headset.jpg': headsetImage,
    './assets/mechanical-keyboard.jpg': keyboardImage,
    './assets/gaming-mouse.jpg': mouseImage,
    './assets/gaming-headset.jpg': headsetImage
};

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('');
    const [transition, setTransition] = useState('');

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / 10);
        const rotateY = (x - centerX) / 10;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
        setTransition('transform 0.1s ease-out');
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
        setTransition('transform 0.5s ease-out');
    };

    // Get the correct image source from our map
    const imageSrc = imageMap[product.imageUrl] || product.imageUrl;

    return (
        <div
            ref={cardRef}
            className="product-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform, transition }}
        >
            <div className="product-card-inner">
                <img
                    src={imageSrc}
                    alt={product.name}
                    className="product-image"
                    onError={(e) => {
                        console.error('Image failed to load:', imageSrc);
                        e.currentTarget.style.backgroundColor = '#f0f0f0';
                        e.currentTarget.style.padding = '20px';
                    }}
                />
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
        </div>
    );
};

export default ProductCard; 