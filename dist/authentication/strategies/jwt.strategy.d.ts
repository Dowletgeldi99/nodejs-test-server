import { Strategy } from 'passport-jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { AuthService } from '../auth.service';
import { AppConfigService } from '../../config/app/config.service';
import { UserEntity } from '../../common/entities/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService, appConfigService: AppConfigService);
    validate(payload: JwtPayload): Promise<UserEntity>;
}
export {};
