import { Model } from 'mongoose';
import { CarDocument } from '../../providers/db/models/car.model';
import { CarEntity } from '../../common/entities/car.entity';
export declare class CarsRepository {
    private carModel;
    constructor(carModel: Model<CarDocument>);
    create(carData: CarEntity): Promise<CarEntity>;
    getById(id: string): Promise<CarEntity>;
    getAll(): Promise<CarEntity[]>;
    update(id: string, carData: CarEntity): Promise<CarEntity>;
    delete(id: string): Promise<CarEntity>;
}
