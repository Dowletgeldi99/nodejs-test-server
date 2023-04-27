import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from '../../providers/db/models/car.model';
import { CarEntity } from '../../common/entities/car.entity';

@Injectable()
export class CarsRepository {
  constructor(
    @InjectModel(Car.name)
    private carModel: Model<CarDocument>,
  ) {}

  async create(carData: CarEntity): Promise<CarEntity> {
    return await this.carModel.create(carData);
  }

  async getById(id: string): Promise<CarEntity> {
    return await this.carModel.findById(new Types.ObjectId(id)).lean().exec();
  }

  async getAll(): Promise<CarEntity[]> {
    return await this.carModel.find().lean().sort({ brand: 1 }).exec();
  }

  async update(id: string, carData: CarEntity): Promise<CarEntity> {
    return this.carModel.findByIdAndUpdate(new Types.ObjectId(id), carData, {
      new: true,
    });
  }

  async delete(id: string): Promise<CarEntity> {
    return this.carModel.findByIdAndDelete(new Types.ObjectId(id));
  }
}
