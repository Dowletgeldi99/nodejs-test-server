import { UsersService } from './users.service';
import { ValidatorConstraintInterface } from 'class-validator';
export declare class IsUserAlreadyExist implements ValidatorConstraintInterface {
    protected readonly usersService: UsersService;
    constructor(usersService: UsersService);
    validate(email: string): Promise<boolean>;
    defaultMessage(): string;
}
