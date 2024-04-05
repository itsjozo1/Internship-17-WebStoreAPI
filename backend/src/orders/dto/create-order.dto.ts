import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  @IsNumber()
  total: number;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  updatedAt: Date;
}
