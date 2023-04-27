import { Model, ObjectId, Types } from 'mongoose';
import { User, UserDocument } from '../../providers/db/models/user.model';
import { SignUpDto } from '../../authentication/dto/sign-up.dto';
import { UserEntity } from '../../common/entities/user.entity';
export declare class UsersRepository {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getOneUserByFilter(filter: object): Promise<User>;
    addUserCar(id: Types.ObjectId, carId: Types.ObjectId): Promise<UserEntity>;
    deleteUserCar(id: Types.ObjectId, carId: Types.ObjectId): Promise<UserEntity>;
    putNewPassword(id: ObjectId, password: string): Promise<User>;
    getUsersByFilter(filter: object): Promise<User[]>;
    createNewUser(user: SignUpDto): Promise<User>;
}
