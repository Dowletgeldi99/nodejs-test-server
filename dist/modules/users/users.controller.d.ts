import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUserById(id: string): Promise<import("../../common/entities/user.entity").UserEntity>;
}
