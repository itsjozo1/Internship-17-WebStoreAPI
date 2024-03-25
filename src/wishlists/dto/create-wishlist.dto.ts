import { ApiProperty } from '@nestjs/swagger';

export class CreateWishlistDto {
  @ApiProperty()
  userId: number;
}
