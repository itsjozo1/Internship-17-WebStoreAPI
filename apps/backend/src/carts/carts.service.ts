import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { use } from 'passport';

@Injectable()
export class CartsService {
  constructor(private prisma: PrismaService) {}

  create(userId: number, createCartDto: CreateCartDto) {
    return this.prisma.cart.create({ data: { ...createCartDto, userId } });
  }

  findAll() {
    return this.prisma.cart.findMany();
  }

  findOne(id: number) {
    return this.prisma.cart.findUnique({ where: { id } });
  }

  async findByUserId(userId: number) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId: userId },
    });
    if (!cart) {
      const createdCart = await this.create(userId, {
        total: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userId,
      });
      return { id: createdCart.id, total: createdCart.total };
    }
    return { cartId: cart.id, total: cart.total };
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return this.prisma.cart.update({ where: { id }, data: updateCartDto });
  }

  remove(id: number) {
    return this.prisma.cart.delete({ where: { id } });
  }
}
