import { Injectable } from '@nestjs/common';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderProductsService {
  constructor(private prisma: PrismaService) {}

  create(createOrderProductDto: CreateOrderProductDto) {
    return this.prisma.orderProduct.create({ data: createOrderProductDto });
  }

  findAll() {
    return this.prisma.orderProduct.findMany();
  }

  findOne(id: number) {
    return this.prisma.orderProduct.findUnique({ where: { id } });
  }

  findByOrderId(id: number) {
    return this.prisma.orderProduct.findMany({ where: { orderId: id } });
  }

  update(id: number, updateOrderProductDto: UpdateOrderProductDto) {
    return this.prisma.orderProduct.update({
      where: { id },
      data: updateOrderProductDto,
    });
  }

  remove(id: number) {
    return this.prisma.orderProduct.delete({ where: { id } });
  }
}
