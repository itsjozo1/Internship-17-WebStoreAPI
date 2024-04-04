import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class WishlistsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createWishlistDto: CreateWishlistDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateWishlistDto: UpdateWishlistDto): any;
    remove(id: number): any;
}
