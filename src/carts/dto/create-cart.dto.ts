import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
