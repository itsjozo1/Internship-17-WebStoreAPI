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
import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { WishlistEntity } from './entities/wishlist.entity';
import { UserAuthGuard } from 'src/users/user-auth.guard';
import { AdminAuthGuard } from 'src/users/admin-auth.guard';

@Controller('wishlists')
@ApiTags('wishlists')
export class WishlistsController {
  constructor(private readonly wishlistsService: WishlistsService) {}

  @Post()
  @ApiOkResponse({ type: WishlistEntity, isArray: true })
  @UseGuards(UserAuthGuard)
  create(@Req() { user }, @Body() createWishlistDto: CreateWishlistDto) {
    return this.wishlistsService.create(createWishlistDto, user.id);
  }

  @Get()
  @ApiOkResponse({ type: WishlistEntity, isArray: true })
  @UseGuards(AdminAuthGuard)
  findAll() {
    return this.wishlistsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: WishlistEntity, isArray: true })
  findOne(@Param('id') id: string) {
    return this.wishlistsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: WishlistEntity, isArray: true })
  update(
    @Param('id') id: string,
    @Body() updateWishlistDto: UpdateWishlistDto,
  ) {
    return this.wishlistsService.update(+id, updateWishlistDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: WishlistEntity, isArray: true })
  remove(@Param('id') id: string) {
    return this.wishlistsService.remove(+id);
  }
}
