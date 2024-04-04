import { Cart } from '@prisma/client';
export declare class CartEntity implements Cart {
    id: number;
    userId: number;
    total: number;
    createdAt: Date;
    updatedAt: Date;
}
