import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
