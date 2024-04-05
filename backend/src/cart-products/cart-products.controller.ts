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
import { CartProductsService } from './cart-products.service';
import { CreateCartProductDto } from './dto/create-cart-product.dto';
import { UpdateCartProductDto } from './dto/update-cart-product.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserAuthGuard } from 'src/users/user-auth.guard';
import { AdminAuthGuard } from 'src/users/admin-auth.guard';

@Controller('cart-products')
@ApiTags('cart-products')
export class CartProductsController {
  constructor(private readonly cartProductsService: CartProductsService) {}

  @Post()
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: CreateCartProductDto, isArray: true })
  create(@Body() createCartProductDto: CreateCartProductDto) {
    return this.cartProductsService.create(createCartProductDto);
  }

  @Get()
  @ApiOkResponse({ type: CreateCartProductDto, isArray: true })
  @UseGuards(AdminAuthGuard)
  findAll() {
    return this.cartProductsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CreateCartProductDto, isArray: true })
  @UseGuards(UserAuthGuard)
  findOne(@Param('id') id: string) {
    return this.cartProductsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CreateCartProductDto, isArray: true })
  @UseGuards(UserAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateCartProductDto: UpdateCartProductDto,
  ) {
    return this.cartProductsService.update(+id, updateCartProductDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CreateCartProductDto, isArray: true })
  @UseGuards(UserAuthGuard)
  remove(@Param('id') id: string) {
    return this.cartProductsService.remove(+id);
  }
}
