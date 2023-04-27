import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UsersService } from '../modules/users/users.service';
import { UserEntity } from '../common/entities/user.entity';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(signInDto: SignInDto): Promise<any>;
    register(signUpDto: SignUpDto): Promise<any>;
    verifyPayload(payload: JwtPayload): Promise<UserEntity>;
    signToken(email: string): string;
    transformUserResponse(user: UserEntity): UserEntity;
}
