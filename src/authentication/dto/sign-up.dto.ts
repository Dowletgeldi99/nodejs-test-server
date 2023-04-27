import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  MinLength,
  Validate,
} from 'class-validator';
import { IsUserAlreadyExist } from '../../modules/users/UserExists';

export class SignUpDto {
  @IsDefined()
  @IsEmail()
  @Validate(IsUserAlreadyExist)
  @ApiProperty({ example: 'qwerty@gmail.com' })
  readonly email: string;

  @IsDefined()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({ example: 'qwerty123' })
  readonly password: string;
}
