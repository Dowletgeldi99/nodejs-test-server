import { UserEntity } from '../entities/user.entity';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../../authentication/auth.service';
export declare class TokenInterceptor implements NestInterceptor {
    private readonly authService;
    constructor(authService: AuthService);
    intercept(context: ExecutionContext, next: CallHandler<UserEntity>): Observable<UserEntity>;
}
