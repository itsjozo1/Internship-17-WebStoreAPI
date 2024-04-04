import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateOrderDto: UpdateOrderDto): any;
    remove(id: string): any;
}
