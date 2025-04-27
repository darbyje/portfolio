import { Product } from '../types/product';

export const products: Product[] = [
    {
        id: '1',
        name: 'Mechanical Gaming Keyboard',
        description: 'Premium mechanical keyboard with RGB backlight, Cherry MX switches, and aluminum frame',
        price: 159.99,
        imageUrl: './assets/mechanical-keyboard.jpg',
        type: 'template'
    },
    {
        id: '2',
        name: 'Pro Gaming Mouse',
        description: 'High-precision gaming mouse with 16000 DPI sensor and customizable weights',
        price: 79.99,
        imageUrl: './assets/gaming-mouse.jpg',
        type: 'template'
    },
    {
        id: '3',
        name: 'Wireless Gaming Headset',
        description: '7.1 surround sound gaming headset with noise-cancelling mic and memory foam ear cups',
        price: 129.99,
        imageUrl: './assets/gaming-headset.jpg',
        type: 'template'
    }
]; 