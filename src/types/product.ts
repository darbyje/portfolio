export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    type: 'ebook' | 'course' | 'template';
    downloadUrl?: string;
}

export interface CartItem extends Product {
    quantity: number;
} 