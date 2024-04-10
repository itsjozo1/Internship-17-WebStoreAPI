import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateCartDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  @IsNumber()
  total: number;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  updatedAt: Date;
}
