import { Module } from '@nestjs/common';
import { WishlistProductsService } from './wishlist-products.service';
import { WishlistProductsController } from './wishlist-products.controller';

@Module({
  controllers: [WishlistProductsController],
  providers: [WishlistProductsService],
})
export class WishlistProductsModule {}
