import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  create(userId: number, createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({ data: { ...createOrderDto, userId } });
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findByUser(userId: number) {
    return this.prisma.order.findMany({ where: { userId } });
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({ where: { id }, data: updateOrderDto });
  }

  remove(id: number) {
    return this.prisma.order.delete({ where: { id } });
  }
}
