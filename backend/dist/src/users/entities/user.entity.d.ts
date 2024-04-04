import { User } from '@prisma/client';
export declare class UserEntity implements User {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}
