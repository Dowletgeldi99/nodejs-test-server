import { Date, ObjectId } from 'mongoose';
import { CarEntity } from './car.entity';
export declare class UserEntity {
    id?: ObjectId;
    email: string;
    password: string;
    cars: CarEntity[];
    createdAt?: Date;
    updatedAt?: Date;
}
