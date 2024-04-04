import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { WishlistsModule } from './wishlists/wishlists.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [PrismaModule, UsersModule, ProductsModule, OrdersModule, WishlistsModule, CartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}