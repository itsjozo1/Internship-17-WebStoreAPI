import { Injectable } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WishlistsService {
  constructor(private prisma: PrismaService) {}

  create(createWishlistDto: CreateWishlistDto, userId: number) {
    return this.prisma.wishlist.create({
      data: { ...createWishlistDto, userId },
    });
  }

  findAll() {
    return this.prisma.wishlist.findMany();
  }

  findOne(id: number) {
    return this.prisma.wishlist.findUnique({ where: { id } });
  }

  update(id: number, updateWishlistDto: UpdateWishlistDto) {
    return this.prisma.wishlist.update({
      where: { id },
      data: updateWishlistDto,
    });
  }

  async findUserWishlist(userId: number) {
    const wishlist = await this.prisma.wishlist.findUnique({
      where: { userId },
    });
    if (!wishlist) {
      const newWishlist = await this.create({ userId }, userId);
      return { wishlistId: newWishlist.id };
    }
    return { wishlistId: wishlist.id };
  }

  remove(id: number) {
    return this.prisma.wishlist.delete({ where: { id } });
  }
}
