import { CarsRepository } from './cars.repository';
import { CarEntity } from '../../common/entities/car.entity';
import { ITokenUserData } from '../../common/types/tokenUserData';
import { UsersService } from '../users/users.service';
export declare class CarsService {
    private carRepo;
    private userService;
    constructor(carRepo: CarsRepository, userService: UsersService);
    getAll(): Promise<CarEntity[]>;
    getById(id: string): Promise<CarEntity>;
    create(carData: CarEntity): Promise<CarEntity>;
    update(creator: ITokenUserData, id: string, carData: CarEntity): Promise<CarEntity>;
    delete(creator: ITokenUserData, id: string): Promise<CarEntity>;
}
