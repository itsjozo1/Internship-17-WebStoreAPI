import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartsController {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    create(createCartDto: CreateCartDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateCartDto: UpdateCartDto): any;
    remove(id: string): any;
}
