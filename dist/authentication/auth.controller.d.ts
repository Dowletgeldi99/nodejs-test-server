import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: SignUpDto): Promise<any>;
    login(signInDto: SignInDto): Promise<any>;
    me(req: any): Promise<any>;
}
