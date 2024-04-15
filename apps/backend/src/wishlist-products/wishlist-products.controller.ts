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
import { WishlistProductsService } from './wishlist-products.service';
import { CreateWishlistProductDto } from './dto/create-wishlist-product.dto';
import { UpdateWishlistProductDto } from './dto/update-wishlist-product.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { use } from 'passport';
import { UserAuthGuard } from 'src/users/user-auth.guard';
import { AdminAuthGuard } from 'src/users/admin-auth.guard';

@ApiTags('wishlist-products')
@Controller('wishlist-products')
export class WishlistProductsController {
  constructor(
    private readonly wishlistProductsService: WishlistProductsService,
  ) {}

  @Post()
  @ApiOkResponse({ type: CreateWishlistProductDto, isArray: true })
  @UseGuards(UserAuthGuard)
  create(@Body() createWishlistProductDto: CreateWishlistProductDto) {
    return this.wishlistProductsService.create(createWishlistProductDto);
  }

  @Get()
  @ApiOkResponse({ type: CreateWishlistProductDto, isArray: true })
  @UseGuards(AdminAuthGuard)
  findAll() {
    return this.wishlistProductsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CreateWishlistProductDto, isArray: true })
  @UseGuards(UserAuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.wishlistProductsService.findOne(id);
  }

  @Get('/:wishlistId/:productId')
  @ApiOkResponse({ type: CreateWishlistProductDto, isArray: true })
  @UseGuards(UserAuthGuard)
  findByWishlistAndProduct(
    @Param('wishlistId', ParseIntPipe) wishlistId: number,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.wishlistProductsService.findByWishlistAndProduct(
      wishlistId,
      productId,
    );
  }

  @Patch(':id')
  @ApiOkResponse({ type: CreateWishlistProductDto, isArray: true })
  @UseGuards(UserAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateWishlistProductDto: UpdateWishlistProductDto,
  ) {
    return this.wishlistProductsService.update(id, updateWishlistProductDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CreateWishlistProductDto, isArray: true })
  @UseGuards(UserAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.wishlistProductsService.remove(id);
  }
}
