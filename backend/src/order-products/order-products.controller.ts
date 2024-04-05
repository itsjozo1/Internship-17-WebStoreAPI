import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrderProductsService } from './order-products.service';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from 'src/users/admin-auth.guard';
import { UserAuthGuard } from 'src/users/user-auth.guard';

@Controller('order-products')
@ApiTags('order-products')
export class OrderProductsController {
  constructor(private readonly orderProductsService: OrderProductsService) {}

  @Post()
  create(@Body() createOrderProductDto: CreateOrderProductDto) {
    return this.orderProductsService.create(createOrderProductDto);
  }

  @Get()
  @UseGuards(AdminAuthGuard)
  findAll() {
    return this.orderProductsService.findAll();
  }

  @Get(':id')
  @UseGuards(UserAuthGuard)
  findOne(@Param('id') id: string) {
    return this.orderProductsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(UserAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateOrderProductDto: UpdateOrderProductDto,
  ) {
    return this.orderProductsService.update(+id, updateOrderProductDto);
  }

  @Delete(':id')
  @UseGuards(UserAuthGuard)
  remove(@Param('id') id: string) {
    return this.orderProductsService.remove(+id);
  }
}
