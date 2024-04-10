import { ApiProperty } from '@nestjs/swagger';

export class CartProduct implements CartProduct {
  @ApiProperty()
  id: number;

  @ApiProperty()
  cartId: number;

  @ApiProperty()
  productId: number;

  @ApiProperty()
  quantity: number;
}
