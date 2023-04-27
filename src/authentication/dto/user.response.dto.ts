import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ example: 'qwerty@gmail.com' })
  email: string;

  @ApiProperty({ example: 'pilot' })
  role: string;
}
