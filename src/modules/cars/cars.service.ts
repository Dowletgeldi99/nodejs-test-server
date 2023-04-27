import { Injectable } from '@nestjs/common';
import { CarsRepository } from './cars.repository';
import { CarEntity } from '../../common/entities/car.entity';
import { ITokenUserData } from '../../common/types/tokenUserData';
import { UsersService } from '../users/users.service';

@Injectable()
export class CarsService {
  constructor(
    private carRepo: CarsRepository,
    private userService: UsersService,
  ) {}

  async getAll(): Promise<CarEntity[]> {
    return await this.carRepo.getAll();
  }

  async getById(id: string): Promise<CarEntity> {
    return await this.carRepo.getById(id);
  }

  async create(
    // creator: ITokenUserData,
    carData: CarEntity,
  ): Promise<CarEntity> {
    const car = await this.carRepo.create(carData);
    // await this.userService.addUserCar(creator._id, car.id);

    return car;
  }

  async update(
    creator: ITokenUserData,
    id: string,
    carData: CarEntity,
  ): Promise<CarEntity> {
    return await this.carRepo.update(id, carData);
  }

  async delete(creator: ITokenUserData, id: string): Promise<CarEntity> {
    const car = await this.carRepo.delete(id);
    await this.userService.deleteUserCar(creator._id, car.id);
    return car;
  }
}
