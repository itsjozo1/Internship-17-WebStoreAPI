import { Injectable } from '@nestjs/common';
import { CreateWishlistProductDto } from './dto/create-wishlist-product.dto';
import { UpdateWishlistProductDto } from './dto/update-wishlist-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WishlistProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createWishlistProductDto: CreateWishlistProductDto) {
    const existingWishlistProduct =
      await this.prisma.wishlistProduct.findUnique({
        where: {
          wishlistId_productId: {
            wishlistId: createWishlistProductDto.wishlistId,
            productId: createWishlistProductDto.productId,
          },
        },
      });

    if (existingWishlistProduct) {
      return this.prisma.wishlistProduct.delete({
        where: {
          id: existingWishlistProduct.id,
        },
      });
    }
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

  findByWishlistAndProduct(wishlistId: number, productId: number) {
    return this.prisma.wishlistProduct.findUnique({
      where: {
        wishlistId_productId: {
          wishlistId,
          productId,
        },
      },
    });
  }

  findByWishlistId(wishlistId: number) {
    return this.prisma.wishlistProduct.findMany({
      where: {
        wishlistId: wishlistId,
      },
    });
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
