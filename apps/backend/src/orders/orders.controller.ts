import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ParseIntPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from 'src/users/admin-auth.guard';
import { use } from 'passport';
import { UserAuthGuard } from 'src/users/user-auth.guard';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: CreateOrderDto, isArray: true })
  create(@Req() { user }, @Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(user.id, createOrderDto);
  }

  @Get()
  @UseGuards(AdminAuthGuard)
  @ApiOkResponse({ type: CreateOrderDto, isArray: true })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: CreateOrderDto, isArray: true })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findOne(id);
  }

  @Get('user/:id')
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: CreateOrderDto, isArray: true })
  findByUser(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findByUser(id);
  }

  @Patch(':id')
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: CreateOrderDto, isArray: true })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: CreateOrderDto, isArray: true })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.remove(id);
  }
}
