import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class OrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createOrderDto: CreateOrderDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateOrderDto: UpdateOrderDto): any;
    remove(id: number): any;
}
