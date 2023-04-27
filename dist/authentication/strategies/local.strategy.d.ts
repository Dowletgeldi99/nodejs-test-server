import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { TokenResponseDto } from '../dto/token.response.dto';
import { SignInDto } from '../dto/sign-in.dto';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(signInDto: SignInDto): Promise<TokenResponseDto>;
}
export {};
