import { Date, Types } from 'mongoose';
export declare class CarEntity {
    id?: Types.ObjectId;
    title: string;
    brand: string;
    productionYear: number;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
}
