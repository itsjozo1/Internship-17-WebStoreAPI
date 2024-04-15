import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { OrderProductsService } from './order-products.service';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from 'src/users/admin-auth.guard';
import { UserAuthGuard } from 'src/users/user-auth.guard';

@Controller('order-products')
@ApiTags('order-products')
export class OrderProductsController {
  constructor(private readonly orderProductsService: OrderProductsService) {}

  @Post()
  @ApiOkResponse({ type: CreateOrderProductDto, isArray: true })
  create(@Body() createOrderProductDto: CreateOrderProductDto) {
    return this.orderProductsService.create(createOrderProductDto);
  }

  @Get()
  @ApiOkResponse({ type: CreateOrderProductDto, isArray: true })
  @UseGuards(AdminAuthGuard)
  findAll() {
    return this.orderProductsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CreateOrderProductDto, isArray: true })
  @UseGuards(UserAuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.orderProductsService.findOne(id);
  }

  @Get('order/:id')
  @ApiOkResponse({ type: CreateOrderProductDto, isArray: true })
  @UseGuards(UserAuthGuard)
  findByOrderId(@Param('id', ParseIntPipe) id: number) {
    return this.orderProductsService.findByOrderId(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CreateOrderProductDto, isArray: true })
  @UseGuards(UserAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderProductDto: UpdateOrderProductDto,
  ) {
    return this.orderProductsService.update(id, updateOrderProductDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CreateOrderProductDto, isArray: true })
  @UseGuards(UserAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.orderProductsService.remove(id);
  }
}
