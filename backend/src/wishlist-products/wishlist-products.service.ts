import { Injectable } from '@nestjs/common';
import { CreateWishlistProductDto } from './dto/create-wishlist-product.dto';
import { UpdateWishlistProductDto } from './dto/update-wishlist-product.dto';

@Injectable()
export class WishlistProductsService {
  create(createWishlistProductDto: CreateWishlistProductDto) {
    return 'This action adds a new wishlistProduct';
  }

  findAll() {
    return `This action returns all wishlistProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wishlistProduct`;
  }

  update(id: number, updateWishlistProductDto: UpdateWishlistProductDto) {
    return `This action updates a #${id} wishlistProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} wishlistProduct`;
  }
}
