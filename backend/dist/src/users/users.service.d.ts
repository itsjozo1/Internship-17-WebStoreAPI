import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        password: string;
        name: string;
        isAdmin: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        email: string;
        password: string;
        name: string;
        isAdmin: boolean;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        password: string;
        name: string;
        isAdmin: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        password: string;
        name: string;
        isAdmin: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        password: string;
        name: string;
        isAdmin: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    register(email: string, password: string, name: string): Promise<string>;
    login(email: string, password: string): Promise<string>;
}
