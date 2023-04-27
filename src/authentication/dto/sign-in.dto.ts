import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SignInDto {
  @IsDefined()
  @IsEmail()
  @ApiProperty({ example: 'qwerty@gmail.com' })
  readonly email: string;

  @IsDefined()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({ example: 'qwerty123' })
  readonly password: string;
}
