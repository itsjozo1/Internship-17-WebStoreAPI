import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WishlistProductsService } from './wishlist-products.service';
import { CreateWishlistProductDto } from './dto/create-wishlist-product.dto';
import { UpdateWishlistProductDto } from './dto/update-wishlist-product.dto';

@Controller('wishlist-products')
export class WishlistProductsController {
  constructor(private readonly wishlistProductsService: WishlistProductsService) {}

  @Post()
  create(@Body() createWishlistProductDto: CreateWishlistProductDto) {
    return this.wishlistProductsService.create(createWishlistProductDto);
  }

  @Get()
  findAll() {
    return this.wishlistProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishlistProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWishlistProductDto: UpdateWishlistProductDto) {
    return this.wishlistProductsService.update(+id, updateWishlistProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishlistProductsService.remove(+id);
  }
}
