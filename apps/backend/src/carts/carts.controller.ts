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
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CartEntity } from './entities/cart.entity';
import { UserAuthGuard } from 'src/users/user-auth.guard';
import { AdminAuthGuard } from 'src/users/admin-auth.guard';

@Controller('carts')
@ApiTags('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  @ApiOkResponse({ type: CartEntity, isArray: true })
  create(@Req() { user }, @Body() createCartDto: CreateCartDto) {
    return this.cartsService.create(user.id, createCartDto);
  }

  @Get()
  @UseGuards(AdminAuthGuard)
  @ApiOkResponse({ type: CartEntity, isArray: true })
  findAll() {
    return this.cartsService.findAll();
  }

  @Get(':id')
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: CartEntity, isArray: true })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cartsService.findOne(id);
  }

  @Get('user/:id')
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: CartEntity, isArray: true })
  findByUserId(@Param('id', ParseIntPipe) id: number) {
    return this.cartsService.findByUserId(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CartEntity, isArray: true })
  @UseGuards(UserAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return this.cartsService.update(id, updateCartDto);
  }

  @Delete(':id')
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: CartEntity, isArray: true })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cartsService.remove(id);
  }
}
