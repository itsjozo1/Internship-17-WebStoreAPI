import { ApiProperty } from '@nestjs/swagger';

export class OrderProduct implements OrderProduct {
  @ApiProperty()
  id: number;

  @ApiProperty()
  orderId: number;

  @ApiProperty()
  productId: number;

  @ApiProperty()
  quantity: number;
}
