import { Product } from '../types/product';

export const mockProducts: Product[] = [
    {
        id: '1',
        name: 'React Development Guide',
        description: 'A comprehensive guide to modern React development practices and patterns.',
        price: 29.99,
        imageUrl: 'https://via.placeholder.com/300x200',
        type: 'ebook'
    },
    {
        id: '2',
        name: 'Portfolio Website Template',
        description: 'Professional portfolio template built with React and TypeScript.',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/300x200',
        type: 'template'
    },
    {
        id: '3',
        name: 'Full Stack Development Course',
        description: 'Learn full stack development with React, Node.js, and PostgreSQL.',
        price: 199.99,
        imageUrl: 'https://via.placeholder.com/300x200',
        type: 'course'
    }
]; 