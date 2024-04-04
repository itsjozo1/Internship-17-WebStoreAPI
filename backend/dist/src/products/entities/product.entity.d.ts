import { Product } from '@prisma/client';
export declare class ProductEntity implements Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}
