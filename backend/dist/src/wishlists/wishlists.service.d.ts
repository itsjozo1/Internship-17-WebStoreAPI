import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class WishlistsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createWishlistDto: CreateWishlistDto, userId: number): import(".prisma/client").Prisma.Prisma__WishlistClient<{
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        userId: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__WishlistClient<{
        id: number;
        userId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateWishlistDto: UpdateWishlistDto): import(".prisma/client").Prisma.Prisma__WishlistClient<{
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__WishlistClient<{
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
