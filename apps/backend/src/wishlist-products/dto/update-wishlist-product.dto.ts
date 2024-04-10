import { PartialType } from '@nestjs/swagger';
import { CreateWishlistProductDto } from './create-wishlist-product.dto';

export class UpdateWishlistProductDto extends PartialType(CreateWishlistProductDto) {}
