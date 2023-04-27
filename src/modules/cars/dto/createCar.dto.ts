import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Toyota Camry 3.5' })
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Toyota' })
  readonly brand: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 2020 })
  readonly productionYear: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 19000 })
  readonly price: number;
}
