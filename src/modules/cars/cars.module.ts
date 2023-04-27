import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from '../../providers/db/models/car.model';
import { CarsService } from './cars.service';
import { CarsRepository } from './cars.repository';
import { CarsController } from './cars.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }]),
  ],
  providers: [CarsService, CarsRepository],
  controllers: [CarsController],
})
export class CarsModule {}
