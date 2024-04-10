import { Injectable } from '@nestjs/common';
import { CreateWishlistProductDto } from './dto/create-wishlist-product.dto';
import { UpdateWishlistProductDto } from './dto/update-wishlist-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WishlistProductsService {
  constructor(private prisma: PrismaService) {}

  create(createWishlistProductDto: CreateWishlistProductDto) {
    return this.prisma.wishlistProduct.create({
      data: createWishlistProductDto,
    });
  }

  findAll() {
    return this.prisma.wishlistProduct.findMany();
  }

  findOne(id: number) {
    return this.prisma.wishlistProduct.findUnique({ where: { id } });
  }

  update(id: number, updateWishlistProductDto: UpdateWishlistProductDto) {
    return this.prisma.wishlistProduct.update({
      where: { id },
      data: updateWishlistProductDto,
    });
  }

  remove(id: number) {
    return this.prisma.wishlistProduct.delete({ where: { id } });
  }
}
