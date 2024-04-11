import { Injectable } from '@nestjs/common';
import { CreateCartProductDto } from './dto/create-cart-product.dto';
import { UpdateCartProductDto } from './dto/update-cart-product.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartProductsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.cartProduct.findMany();
  }

  async create(createCartProductDto: CreateCartProductDto) {
    const existingCartProduct = await this.prisma.cartProduct.findUnique({
      where: {
        cartId_productId: {
          cartId: createCartProductDto.cartId,
          productId: createCartProductDto.productId,
        },
      },
    });
    if (existingCartProduct) {
      return await this.prisma.cartProduct.delete({
        where: {
          id: existingCartProduct.id,
        },
      });
    }
    return this.prisma.cartProduct.create({ data: createCartProductDto });
  }

  findByProductCartId(cartId: number, productId: number) {
    return this.prisma.cartProduct.findMany({
      where: {
        cartId: cartId,
        productId: productId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.cartProduct.findUnique({ where: { id } });
  }

  update(id: number, updateCartProductDto: UpdateCartProductDto) {
    return this.prisma.cartProduct.update({
      where: { id },
      data: updateCartProductDto,
    });
  }

  remove(id: number) {
    return this.prisma.cartProduct.delete({ where: { id } });
  }
}
