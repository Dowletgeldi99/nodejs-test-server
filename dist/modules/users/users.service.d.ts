import { Types } from 'mongoose';
import { UserEntity } from '../../common/entities/user.entity';
import { SignUpDto } from '../../authentication/dto/sign-up.dto';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUserByEmail(email: string): Promise<UserEntity>;
    getUserById(id: string): Promise<UserEntity>;
    addUserCar(id: Types.ObjectId, carId: Types.ObjectId): Promise<UserEntity>;
    deleteUserCar(id: Types.ObjectId, carId: Types.ObjectId): Promise<UserEntity>;
    create(body: SignUpDto): Promise<import("../../providers/db/models/user.model").User>;
    createUserData(signUpDto: SignUpDto): Promise<SignUpDto>;
}
