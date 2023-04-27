import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarsRepository } from './cars.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from '../../providers/db/models/car.model';
import { CarEntity } from '../../common/entities/car.entity';
import { UsersModule } from '../users/users.module';
import { MongoDBModule } from '../../providers/db/database.module';

describe('CarsController', () => {
  let carsController: CarsController;
  let carsService: CarsService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MongoDBModule,
        UsersModule,
        MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }]),
      ],
      controllers: [CarsController],
      providers: [CarsService, CarsRepository],
    }).compile();
    carsController = app.get<CarsController>(CarsController);
    carsService = app.get<CarsService>(CarsService);
  }, 70000);

  describe('createCar', () => {
    it('should return a car', async () => {
      const carData: CarEntity = {
        title: 'M5',
        brand: 'BMW',
        productionYear: 2020,
        price: 21000,
      };

      jest.spyOn(carsService, 'create').mockResolvedValue(carData);

      expect(await carsController.create(carData)).toBe(carData);
    }, 70000);
  });
});
