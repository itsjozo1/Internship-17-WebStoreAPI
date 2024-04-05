import { Injectable } from '@nestjs/common';
import { CreateCartProductDto } from './dto/create-cart-product.dto';
import { UpdateCartProductDto } from './dto/update-cart-product.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartProductsService {
  constructor(private prisma: PrismaService) {}

  create(createCartProductDto: CreateCartProductDto) {
    return this.prisma.cartProduct.create({ data: createCartProductDto });
  }

  findAll() {
    return this.prisma.cartProduct.findMany();
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
