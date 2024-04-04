import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
export declare class WishlistsController {
    private readonly wishlistsService;
    constructor(wishlistsService: WishlistsService);
    create(createWishlistDto: CreateWishlistDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateWishlistDto: UpdateWishlistDto): any;
    remove(id: string): any;
}
