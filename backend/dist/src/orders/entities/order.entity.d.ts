import { Order } from '@prisma/client';
export declare class OrderEntity implements Order {
    id: number;
    userId: number;
    total: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
