import { ApiProperty } from '@nestjs/swagger';

export class WishlistProduct implements WishlistProduct {
  @ApiProperty()
  id: number;

  @ApiProperty()
  wishlistId: number;

  @ApiProperty()
  productId: number;

  @ApiProperty()
  quantity: number;
}
