import { Module } from '@nestjs/common';
import { WishlistProductsService } from './wishlist-products.service';
import { WishlistProductsController } from './wishlist-products.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WishlistProductsController],
  providers: [WishlistProductsService],
  imports: [PrismaModule],
})
export class WishlistProductsModule {}
