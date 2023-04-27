import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/createCar.dto';
import { UpdateCarDto } from './dto/updateCar.dto';
export declare class CarsController {
    private carService;
    constructor(carService: CarsService);
    getAll(): Promise<import("../../common/entities/car.entity").CarEntity[]>;
    getById(id: string): Promise<import("../../common/entities/car.entity").CarEntity>;
    create(body: CreateCarDto): Promise<import("../../common/entities/car.entity").CarEntity>;
    update(req: any, id: string, body: UpdateCarDto): Promise<import("../../common/entities/car.entity").CarEntity>;
    delete(req: any, id: string): Promise<import("../../common/entities/car.entity").CarEntity>;
}
