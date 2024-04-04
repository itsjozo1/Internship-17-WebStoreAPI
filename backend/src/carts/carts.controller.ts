import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CartEntity } from './entities/cart.entity';

@Controller('carts')
@ApiTags('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  @ApiOkResponse({ type: CartEntity, isArray: true })
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartsService.create(createCartDto);
  }

  @Get()
  @ApiOkResponse({ type: CartEntity, isArray: true })
  findAll() {
    return this.cartsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CartEntity, isArray: true })
  findOne(@Param('id') id: string) {
    return this.cartsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartsService.update(+id, updateCartDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CartEntity, isArray: true })
  remove(@Param('id') id: string) {
    return this.cartsService.remove(+id);
  }
}
