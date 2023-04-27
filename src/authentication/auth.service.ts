import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { SignUpDto } from './dto/sign-up.dto';
import { AuthenticationProvider } from './auth.provider';
import { SignInDto } from './dto/sign-in.dto';
import { UsersService } from '../modules/users/users.service';
import { UserEntity } from '../common/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(signInDto: SignInDto): Promise<any> {
    const user = await this.usersService.getUserByEmail(signInDto.email);
    if (!user) throw new UnauthorizedException('The Email is incorrect.');

    if (
      !(await AuthenticationProvider.checkPassword(
        signInDto.password,
        user.password,
      ))
    ) {
      throw new UnauthorizedException('The password is incorrect.');
    }

    return this.transformUserResponse(user);
  }

  async register(signUpDto: SignUpDto): Promise<any> {
    const user = await this.usersService.create(signUpDto);
    return this.transformUserResponse(user);
  }

  async verifyPayload(payload: JwtPayload): Promise<UserEntity> {
    let user: UserEntity;

    try {
      user = await this.usersService.getUserByEmail(payload.sub);
    } catch (error) {
      throw new UnauthorizedException(
        `There isn't any user with email: ${payload.sub}`,
      );
    }
    return this.transformUserResponse(user);
  }

  signToken(email: string): string {
    const payload = {
      sub: email,
    };
    return this.jwtService.sign(payload);
  }

  transformUserResponse(user: UserEntity): UserEntity {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const newUser = { ...user }._doc;
    delete newUser.password;

    return newUser;
  }
}
