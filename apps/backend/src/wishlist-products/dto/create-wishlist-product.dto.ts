import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateWishlistProductDto {
  @ApiProperty()
  wishlistId: number;

  @ApiProperty()
  productId: number;

  @ApiProperty()
  @IsNumber()
  quantity: number;
}
