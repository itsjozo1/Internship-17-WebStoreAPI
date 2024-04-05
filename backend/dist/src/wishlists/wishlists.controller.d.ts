import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
export declare class WishlistsController {
    private readonly wishlistsService;
    constructor(wishlistsService: WishlistsService);
    create({ user }: {
        user: any;
    }, createWishlistDto: CreateWishlistDto): import(".prisma/client").Prisma.Prisma__WishlistClient<{
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        userId: number;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__WishlistClient<{
        id: number;
        userId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateWishlistDto: UpdateWishlistDto): import(".prisma/client").Prisma.Prisma__WishlistClient<{
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__WishlistClient<{
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
