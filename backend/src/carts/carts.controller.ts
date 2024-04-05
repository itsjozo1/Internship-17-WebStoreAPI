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
  @UseGuards(UserAuthGuard)
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
  findOne(@Param('id') id: string) {
    return this.cartsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CartEntity, isArray: true })
  @UseGuards(UserAuthGuard)
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartsService.update(+id, updateCartDto);
  }

  @Delete(':id')
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: CartEntity, isArray: true })
  remove(@Param('id') id: string) {
    return this.cartsService.remove(+id);
  }
}
