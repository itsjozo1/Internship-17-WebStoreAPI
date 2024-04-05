import { Module } from '@nestjs/common';
import { CartProductsService } from './cart-products.service';
import { CartProductsController } from './cart-products.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CartProductsController],
  providers: [CartProductsService],
  imports: [PrismaModule],
})
export class CartProductsModule {}
