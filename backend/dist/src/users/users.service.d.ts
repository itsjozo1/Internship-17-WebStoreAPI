import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateUserDto: UpdateUserDto): any;
    remove(id: number): any;
}
