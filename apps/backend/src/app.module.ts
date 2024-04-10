import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { WishlistsModule } from './wishlists/wishlists.module';
import { CartsModule } from './carts/carts.module';
import { JwtModule } from '@nestjs/jwt';
import { OrderProductsModule } from './order-products/order-products.module';
import { CartProductsModule } from './cart-products/cart-products.module';
import { WishlistProductsModule } from './wishlist-products/wishlist-products.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    ProductsModule,
    OrdersModule,
    WishlistsModule,
    CartsModule,
    OrderProductsModule,
    CartProductsModule,
    WishlistProductsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../', 'frontend', 'dist'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
