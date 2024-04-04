import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CartsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCartDto: CreateCartDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateCartDto: UpdateCartDto): any;
    remove(id: number): any;
}
