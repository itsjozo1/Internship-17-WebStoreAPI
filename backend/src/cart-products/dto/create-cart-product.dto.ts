import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateCartProductDto {
  @ApiProperty()
  cartId: number;

  @ApiProperty()
  productId: number;

  @ApiProperty()
  @IsNumber()
  quantity: number;
}
