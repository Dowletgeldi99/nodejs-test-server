import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCarDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Toyota Camry 3.5' })
  readonly title: string;

  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({ example: 'Toyota' })
  readonly brand: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 2020 })
  readonly productionYear: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 19000 })
  readonly price: number;
}
